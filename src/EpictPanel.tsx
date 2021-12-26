import React from 'react';
import { DataFrame, FieldType, getFieldDisplayName, PanelProps, urlUtil } from '@grafana/data';
import { SimpleOptions, Box } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { getTemplateSrv } from '@grafana/runtime';
import { getLastNotNullStringValue, getLastNotNullValue } from './Utilities';

declare let $: any;

interface Props extends PanelProps<SimpleOptions> {}
export const SimplePanel: React.FC<Props> = ({ options, data, onOptionsChange, width, height }) => {
  let processedBgURL = getTemplateSrv().replace(options.bgURL);
  let hRatio = 1;
  let wRatio = 1;
  let boxes = options.boxes;
  let boxMouseUpHandler = () => {
    onBoxMouseUp();
  };
  let mainImgRef: React.RefObject<HTMLImageElement> = React.createRef();

  let onMainImageLoaded = () => {
    processImageScaleFactor();
  };

  function processImageScaleFactor() {
    if (mainImgRef !== null && mainImgRef.current?.complete) {
      let img = mainImgRef.current;
      if (options.autoScale === true) {
        hRatio = img.height / img.naturalHeight;
        wRatio = img.width / img.naturalWidth;

        if (hRatio <= 1 && wRatio <= 1 && !isEditMode()) {
          if (img.parentElement !== null) {
            let boxesInDOM = img.parentElement.querySelectorAll('.oneBox');
            if (boxesInDOM !== undefined) {
              for (let index = 0; index < boxesInDOM.length; index++) {
                let oneBox: HTMLSpanElement = boxesInDOM[index] as HTMLSpanElement;

                /* Creating a new div is required, otherwise the transformOrigin will destroy the
                 * rotate transformOrigin (if the user wants to rotate the box)
                 */

                let boxParent = oneBox.parentNode;
                let scalingDiv = undefined;

                if (boxParent !== null && (boxParent as HTMLDivElement)?.className === 'scalingDiv') {
                  scalingDiv = boxParent as HTMLDivElement; //scalingDiv is already existing
                } else {
                  //Create a new scaling div
                  scalingDiv = document.createElement('div');
                  scalingDiv.className = 'scalingDiv';
                  boxParent?.replaceChild(scalingDiv, oneBox);
                  scalingDiv.appendChild(oneBox);
                  //scaling div is now the parent element of oneBox
                }

                if (scalingDiv !== null) {
                  scalingDiv.style.position = 'absolute';
                  scalingDiv.style.top = `${boxes[index].ypos * hRatio}px`;
                  scalingDiv.style.left = `${boxes[index].xpos * wRatio}px`;
                  scalingDiv.style.transform = `scale(${wRatio},${hRatio})`;
                  scalingDiv.style.transformOrigin = `top left`;
                  scalingDiv.style.whiteSpace = 'no-wrap';
                }
              }
            }
          }
        }
      } else if (img.parentElement !== null && img.parentElement?.querySelector('.scalingDiv') !== null) {
        //Panel was autoscaled before. Now the user wants to remove the autoscaling, so we need to remove the scalingDiv
        let boxesInDOM = img.parentElement.querySelectorAll('.oneBox');
        if (boxesInDOM !== undefined) {
          for (let index = 0; index < boxesInDOM.length; index++) {
            let oneBox = boxesInDOM[index] as HTMLSpanElement;
            let boxParent = oneBox.parentNode;
            if (boxParent !== null && (boxParent as HTMLSpanElement).className === 'scalingDiv') {
              unwrap(boxParent);
            }
          }
        }
      }
    }
  }

  React.useEffect(() => {
    /* useEffect allows to call the function when rendering is complete */
    processImageScaleFactor();
  });
  const styles = getStyles();

  return (
    <div
      className={cx(styles.wrapper)}
      onMouseMove={(event) => onBoxMouseMove(event)}
      onClick={(event) => onBackgroundClick(event)}
    >
      <div className={cx(styles.imgWrapper, 'img-wrapper')}>
        <img
          srcSet={processedBgURL}
          onClick={(event) => onBgClick(event)}
          className={!isEditMode() && options.autoScale === true ? cx(styles.bgImgScale) : undefined}
          ref={mainImgRef}
          onLoad={onMainImageLoaded}
        />
        {boxes.map((oneBox, index) => (
          /*start one box processing*/
          <span
            onMouseDown={(event) => onBoxMouseDown(event, oneBox)}
            onClick={(event) => onBoxMouseClick(event, oneBox)}
            key={index}
            className={cx(
              'oneBox',
              css`
                ${
                  options.autoScale === false || isEditMode()
                    ? `
                    position: absolute;
                    top:${oneBox.ypos}px;
                    left: ${oneBox.xpos}px;`
                    : undefined /*If autoscale is enabled, top and left are set by the autoscale function*/
                }
                color: ${getBoxColor(oneBox)};
                transform: rotate(${oneBox.angle}deg);
                display: block;
              `,
              oneBox.hasBackground
                ? css`
                    background-color: ${oneBox.backgroundColor};
                  `
                : '',
              isEditMode() && oneBox.selected ? styles.selectedBoxOutline : ''
            )}
          >
            {/*do not add href on the link while in edit mode because this will prevent the dragging of the box*/}
            <a
              {...(oneBox.url && !isEditMode() ? { href: getTemplateSrv().replace(oneBox.url) } : null)}
              className={cx(
                styles.boxLink,
                oneBox.url
                  ? css`
                      cursor: pointer;
                    `
                  : css`
                      cursor: default;
                    `
              )}
            >
              {(oneBox.hasOrb && oneBox.orbHideText) ||
              (oneBox.hasOrb && !oneBox.orbHideText && oneBox.orbLocation === 'Top') ? (
                <span
                  className={cx(
                    isBoxBlinking(oneBox) ? styles.blink : '',
                    styles.orbDefaults,
                    css`
                      height: ${oneBox.orbSize}px;
                      width: ${oneBox.orbSize}px;
                      background-color: ${getBoxColor(oneBox)};
                    `
                  )}
                  title={getBoxTitleText(oneBox)}
                ></span>
              ) : null}
              {!oneBox.hasOrb || !oneBox.orbHideText ? (
                <div
                  className={cx(
                    css`
                      font-size: ${oneBox.fontSize}px;
                      line-heigh: normal;
                    `
                  )}
                >
                  {oneBox.hasSymbol && !oneBox.colorSymbol && oneBox.symbol !== 'custom' ? (
                    <img srcSet={oneBox.symbol} width={oneBox.symbolWidth} height={oneBox.symbolHeight} />
                  ) : null}
                  {oneBox.hasSymbol && oneBox.colorSymbol && oneBox.symbol !== 'custom' ? (
                    <span
                      className={cx(
                        isBoxBlinking(oneBox) ? styles.blink : '',
                        css`
                          height: ${oneBox.symbolHeight}px;
                          width: ${oneBox.symbolWidth}px;
                          background: ${getBoxColor(oneBox)};
                          mask-size: cover;
                          display: inline-block;
                          mask: url(${oneBox.symbol});
                        `
                      )}
                    />
                  ) : null}
                  {oneBox.symbol === 'custom' && !oneBox.colorSymbol && oneBox.customSymbol !== '' ? (
                    <img
                      srcSet={getTemplateSrv().replace(oneBox.customSymbol)}
                      width={oneBox.symbolWidth}
                      height={oneBox.symbolHeight}
                    />
                  ) : null}
                  {oneBox.symbol === 'custom' && oneBox.colorSymbol && oneBox.customSymbol !== '' ? (
                    <span
                      className={cx(
                        isBoxBlinking(oneBox) ? styles.blink : '',
                        css`
                          height: ${oneBox.symbolHeight}px;
                          width: ${oneBox.symbolWidth}px;
                          background: ${getBoxColor(oneBox)};
                          mask-size: cover;
                          display: inline-block;
                          mask: url(${getTemplateSrv().replace(oneBox.customSymbol)});
                        `
                      )}
                    />
                  ) : null}
                  {oneBox.hasOrb && oneBox.orbLocation === 'Left' ? (
                    <span
                      className={cx(
                        isBoxBlinking(oneBox) ? styles.blink : '',
                        styles.orbDefaults,
                        styles.alignVertically,
                        css`
                          height: ${oneBox.orbSize}px;
                          width: ${oneBox.orbSize}px;
                          background-color: ${getBoxColor(oneBox)};
                        `
                      )}
                      title={getBoxTitleText(oneBox)}
                    ></span>
                  ) : null}

                  {oneBox.prefix ? (
                    <span
                      className={cx(
                        styles.alignVertically,
                        styles.boxPrefix,
                        css`
                          font-size: ${oneBox.prefixSize}px;
                        `
                      )}
                      title={getBoxTitleText(oneBox)}
                    >
                      {oneBox.prefix}
                    </span>
                  ) : null}

                  {!oneBox.symbolHideText ? (
                    <span className={cx(isBoxBlinking(oneBox) ? styles.blink : '', styles.alignVertically)}>
                      {getBoxText(oneBox)}
                    </span>
                  ) : null}

                  {!oneBox.symbolHideText && oneBox.suffix ? (
                    <span
                      className={cx(
                        isBoxBlinking(oneBox) ? styles.blink : '',
                        styles.alignVertically,
                        styles.boxSuffix,
                        css`
                          font-size: ${oneBox.suffixSize}px;
                        `
                      )}
                      title={getBoxTitleText(oneBox)}
                    >
                      {oneBox.suffix}
                    </span>
                  ) : null}

                  {oneBox.hasOrb && oneBox.orbLocation === 'Right' ? (
                    <span
                      className={cx(
                        isBoxBlinking(oneBox) ? styles.blink : '',
                        styles.orbDefaults,
                        styles.alignVertically,
                        css`
                          height: ${oneBox.orbSize}px;
                          width: ${oneBox.orbSize}px;
                          background-color: ${getBoxColor(oneBox)};
                        `
                      )}
                      title={getBoxTitleText(oneBox)}
                    ></span>
                  ) : null}
                </div>
              ) : null}
              {oneBox.hasOrb && !oneBox.orbHideText && oneBox.orbLocation === 'Bottom' ? (
                <span
                  className={cx(
                    isBoxBlinking(oneBox) ? styles.blink : '',
                    styles.orbDefaults,
                    css`
                      height: ${oneBox.orbSize}px;
                      width: ${oneBox.orbSize}px;
                      background-color: ${getBoxColor(oneBox)};
                    `
                  )}
                  title={getBoxTitleText(oneBox)}
                ></span>
              ) : null}
            </a>
          </span>
          /*end one box processing*/
        ))}
      </div>
    </div>
  );

  function isBoxBlinking(box: Box): boolean {
    if (box.isUsingThresholds && box.thresholds && (box.blinkHigh || box.blinkLow)) {
      const value = getBoxText(box);
      const lowThreshold = +box.thresholds.split(',')[0];
      const highThreshold = +box.thresholds.split(',')[1];
      if (box.blinkHigh && +value >= highThreshold) {
        return true;
      } else if (box.blinkLow && +value <= lowThreshold) {
        return true;
      }
    }
    return false;
  }
  function getBoxColor(box: Box): string {
    const value = getBoxText(box);
    if (box.isUsingThresholds && box.thresholds) {
      const lowThreshold = +box.thresholds.split(',')[0];
      const highThreshold = +box.thresholds.split(',')[1];
      if (+value >= highThreshold) {
        return box.colorHigh;
      } else if (+value <= lowThreshold) {
        return box.colorLow;
      } else {
        return box.colorMedium;
      }
    }
    return box.color;
  }

  function getBoxTitleText(box: Box): string {
    return box.prefix ?? ''.concat(getBoxValue(box.serie, 5)) ?? ''.concat(box.suffix);
  }
  function getBoxText(box: Box): string {
    return getBoxValue(box.serie, box.decimal);
  }

  function onBoxMouseClick(event: any, box: Box) {
    if (isEditMode() && event.button === 0) {
      inBox = true;
      deselectAllBoxes();

      box.selected = true;

      onOptionsChange(options);
    }
  }

  function onBackgroundClick(event: any) {
    if (isEditMode() && event.button === 0 && !inBox) {
      deselectAllBoxes();

      onOptionsChange(options);
    }

    inBox = false;
  }

  function deselectAllBoxes() {
    options.boxes.forEach((b) => {
      b.selected = false;
    });
  }

  function onBoxMouseDown(event: any, box: Box) {
    if (isEditMode() && event.button === 0) {
      dragBox = box;
      oldX = box.xpos * 1;
      oldY = box.ypos * 1;
      oldMX = event.clientX * 1;
      oldMY = event.clientY * 1;
      isDrag = true;

      $(document).one('mouseup', boxMouseUpHandler.bind(boxMouseUpHandler));
      event.preventDefault();
    }
  }

  function onBoxMouseMove(event: any) {
    if (isDrag && isEditMode()) {
      let offX = event.clientX - oldMX;
      let offY = event.clientY - oldMY;

      dragBox.xpos = oldX + offX;
      dragBox.ypos = oldY + offY;

      onOptionsChange(options);
    }
  }

  function onBoxMouseUp() {
    $(document).unbind('mouseup', boxMouseUpHandler.bind(boxMouseUpHandler));
    isDrag = false;
  }

  function getBoxValue(serieName: string, decimals: number): string {
    let retVal = undefined;

    let serie = undefined;

    data.series.every((frm: DataFrame) => {
      let numberFields = frm.fields.filter((f) => f.type === FieldType.number);
      let targetField = numberFields.find(function (f) {
        const fieldDisplayName = getFieldDisplayName(f, frm);
        let discoveredField =
          frm.name === undefined || frm.name === fieldDisplayName
            ? fieldDisplayName
            : `${frm.name} (${fieldDisplayName})`;
        return discoveredField === serieName;
      });
      if (targetField !== undefined && targetField !== null) {
        retVal = getLastNotNullValue(targetField, decimals);
        return false; //We found what we were looking for, so stop iterating
      }
      return true; //Continue iterating
    });

    if (retVal === undefined) {
      data.series.every((frm: DataFrame) => {
        let targetField = frm.fields.find(function (f) {
          const fieldDisplayName = getFieldDisplayName(f, frm);
          let discoveredField =
            frm.name === undefined || frm.name === fieldDisplayName
              ? fieldDisplayName
              : `${frm.name} (${fieldDisplayName})`;
          return discoveredField === serieName;
        });
        if (targetField !== undefined && targetField !== null) {
          retVal = getLastNotNullStringValue(targetField);
          return false; //We found what we were looking for, so stop iterating
        }
        return true; //Continue iterating
      });
    }

    if (retVal === undefined) {
      serie = data.series.find((s) => s.name === serieName); /*for backward compatibility*/
      let fields = serie?.fields.find((f) => f.type === 'number');
      retVal = getLastNotNullValue(fields, decimals);
    }

    if (retVal === undefined) {
      retVal = 'N/A';
    }
    return retVal;
  }
};

let onBgClick = (event: any) => {
  if (event.ctrlKey) {
    alert('X:' + event.nativeEvent.offsetX + ' Y:' + event.nativeEvent.offsetY);
  }
};

//global variables
//Drag Box variables
let dragBox: Box;
let isDrag: boolean;
let oldX: number;
let oldY: number;
let oldMX: number;
let oldMY: number;
let inBox: boolean;

let isEditMode = () => {
  const params = urlUtil.getUrlSearchParams();
  let editMode = params.editPanel != null;

  return editMode;
};

/**
 * Unwrap the childrens out of the parent element,
 * and deletes de parent element
 * @param parentElement Parent Element to remove
 */
let unwrap = (parentElement: Node) => {
  const parent = parentElement.parentNode;
  if (parent !== null) {
    while (parentElement.firstChild) {
      parent.insertBefore(parentElement.firstChild, parentElement);
    }
    parent.removeChild(parentElement);
  }
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      display: flex;
      justify-content: center;
      height: 100%;
    `,
    imgWrapper: css`
      position: relative;
      overflow: scroll;
    `,
    bgImgScale: css`
      max-width: 100%;
      max-height: 100%;
      object-fit: scale-down;
      object-position: top left;
    `,
    boxLink: css`
      display: inline-block;
      text-align: center;
      color: unset;
      &:hover {
        color: unset;
      }
      &:focus {
        color: unset;
      }
    `,
    orbDefaults: css`
      border-radius: 50%;
      border-style: solid;
      border-width: thin;
      border-color: #000;
      display: inline-block;
      font-size: 0px;
    `,
    blink: css`
      animation: blink_anim 0.8s linear infinite;
      @keyframes blink_anim {
        50% {
          opacity: 0.2;
        }
      }
    `,
    alignVertically: css`
      display: inline-block;
      white-space: normal;
      vertical-align: middle;
    `,
    boxPrefix: css`
      white-space: pre;
      margin-right: 0.5ch;
    `,
    boxSuffix: css`
      white-space: pre;
      margin-right: 0.5ch;
    `,
    selectedBoxOutline: css`
      border-radius: 15px;
      outline: dotted;'
    `,
  };
});
