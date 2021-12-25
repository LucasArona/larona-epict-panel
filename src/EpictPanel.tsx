import React from 'react';
import { DataFrame, FieldType, getFieldDisplayName, PanelProps } from '@grafana/data';
import { SimpleOptions, Box } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { getTemplateSrv } from '@grafana/runtime';
import { getLastNotNullStringValue, getLastNotNullValue } from './Utilities';

interface Props extends PanelProps<SimpleOptions> {}
export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  let processedBgURL = getTemplateSrv().replace(options.bgURL);
  let boxes = options.boxes;
  const styles = getStyles();
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.imgWrapper)} id="img-wrapper">
        <img srcSet={processedBgURL} onClick={event => onBgClick(event)} />
        {boxes.map((oneBox, index) => (
          <span
            className={cx(
              styles.box,
              css`
                top: ${oneBox.ypos}px;
                left: ${oneBox.xpos}px;
                color: ${getBoxColor(oneBox)};
                transform: rotate(${oneBox.angle}deg);
              `
            )}
          >
            <a
              href={oneBox.url ? getTemplateSrv().replace(oneBox.url) : '#'}
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

                  <span className={cx(isBoxBlinking(oneBox) ? styles.blink : '', styles.alignVertically)}>
                    {getBoxText(oneBox)}
                  </span>

                  {oneBox.suffix ? (
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

  function getBoxValue(serieName: string, decimals: number): string {
    let retVal = undefined;

    let serie = undefined;

    data.series.every((frm: DataFrame) => {
      let numberFields = frm.fields.filter(f => f.type === FieldType.number);
      let targetField = numberFields.find(function(f) {
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
        let targetField = frm.fields.find(function(f) {
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
      serie = data.series.find(s => s.name === serieName); /*for backward compatibility*/
      let fields = serie?.fields.find(f => f.type === 'number');
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

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      display: flex;
      justify-content: center;
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
  };
});
