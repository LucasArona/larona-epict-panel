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
  let boxes = options.boxes;
  let boxMouseUpHandler = () => {
    onBoxMouseUp();
  };
  const styles = getStyles();
  return (
    <div
      className={cx(styles.wrapper)}
      onMouseMove={(event) => onBoxMouseMove(event)}
      onClick={(event) => onBackgroundClick(event)}
    >
      <div className={cx(styles.imgWrapper)} id="img-wrapper">
        <img srcSet={processedBgURL} onClick={(event) => onBgClick(event)} />
        {boxes.map((oneBox, index) => (
          <span
            onMouseDown={(event) => onBoxMouseDown(event, oneBox)}
            onClick={(event) => onBoxMouseClick(event, oneBox)}
            key={index}
            className={cx(
              styles.box,
              css`
                top: ${oneBox.ypos}px;
                left: ${oneBox.xpos}px;
                color: ${getBoxColor(oneBox)};
                transform: rotate(${oneBox.angle}deg);
              `,
              isEditMode() && oneBox.selected ? styles.selectedBoxOutline : ''
            )}
          >
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

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      display: flex;
      justify-content: center;
      height: 100%;
    `,
    imgWrapper: css`
      position: relative;
    `,
    box: css`
      position: absolute;
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
