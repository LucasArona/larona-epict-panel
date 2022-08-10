import { DataFrame, FieldType, getFieldDisplayName, SelectableValue, StandardEditorProps } from '@grafana/data';
import { getTemplateSrv } from '@grafana/runtime';
import {
  Button,
  CollapsableSection,
  ColorPicker,
  Field,
  HorizontalGroup,
  Icon,
  IconButton,
  Input,
  Select,
  Switch,
  Tooltip,
  ValuePicker,
  VerticalGroup,
} from '@grafana/ui';
import React from 'react';
import { SymbolsLibrary } from 'symLibrary';
import { Box, SimpleOptions, OrbLocations } from 'types';

export const BoxesEditor: React.FC<StandardEditorProps> = ({ item, value, onChange, context }) => {
  var ctx = context;
  var data = ctx.data;
  var options = ctx.options as SimpleOptions;
  if (options.boxes == null) {
    options.boxes = [];
  }

  const onAddBoxBtnClicked = ({ target }: any) => {
    if (options.boxes == null) {
      options.boxes = [];
    }
    options.boxes.push({
      angle: 0,
      color: '#fff',
      colorHigh: '#f00',
      colorLow: '#0f0',
      colorMedium: '#fa1',
      decimal: 0,
      fontSize: 12,
      hasOrb: false,
      hasBackground: false,
      backgroundColor: '#5794F2',
      orbHideText: false,
      orbLocation: 'Left',
      orbSize: 10,
      prefixSize: 10,
      serie: 'A-Serie',
      suffixSize: 10,
      text: 'N/A',
      suffix: '',
      prefix: '',
      thresholds: '',
      blinkHigh: true,
      blinkLow: false,
      isUsingThresholds: false,
      xpos: 0,
      ypos: 0,
      url: '',
      hasSymbol: false,
      symbol: '',
      symbolHideText: false,
      symbolWidth: 32,
      symbolHeight: 32,
      symbolDefHeight: 32,
      symbolDefWidth: 32,
      colorSymbol: false,
      customSymbol: '',
      hasBorder: false,
      borderColor: '#fff',
      borderWidth: 1,
      selected: false,
    });
    onChange(options.boxes);
  };

  const orbLocations = [
    { label: 'Top', value: 'Top' },
    { label: 'Bottom', value: 'Bottom' },
    { label: 'Left', value: 'Left' },
    { label: 'Right', value: 'Right' },
  ];

  let availableSeries: SelectableValue[] = [];
  data.forEach((frm: DataFrame) => {
    let valuesFields = frm.fields.filter((f) => f.type === FieldType.number || f.type === FieldType.string);
    valuesFields.forEach((oneValField) => {
      if (oneValField !== undefined) {
        const fieldDisplayName = getFieldDisplayName(oneValField, frm);
        let discoveredField =
          frm.name === undefined || frm.name === fieldDisplayName
            ? fieldDisplayName
            : `${frm.name} (${fieldDisplayName})`;
        let listItemIcon = undefined;
        let listItemTitle = undefined;

        if (options?.boxes?.filter((b) => b.serie === discoveredField).length > 0) {
          //Detects if the user is already using this serie on another box, to show a hint in the value selector
          listItemIcon = 'eye';
          listItemTitle = 'You are using this serie at least once in this panel';
        }
        availableSeries.push({
          value: discoveredField,
          label: discoveredField,
          icon: listItemIcon,
          title: listItemTitle,
        });
      }
    });
  });

  let selectedBoxIndex = options.boxes.findIndex((b) => b.selected === true);

  const oneBoxEditor = (oneBox: Box, index: number) => {
    return (
      <div>
        <h5>Box #{index}</h5>
        <div className="section gf-form-group">
          <HorizontalGroup>
            <IconButton
              name="trash-alt"
              size="xl"
              surface="panel"
              onClick={() => {
                delete options.boxes[index];
                options.boxes.splice(index, 1);
                onChange(options.boxes);
              }}
            />
            <IconButton
              name="copy"
              size="xl"
              surface="panel"
              onClick={() => {
                options.boxes.push({ ...oneBox });
                onChange(options.boxes);
              }}
            />
          </HorizontalGroup>
        </div>
        <CollapsableSection label="Metric" isOpen={true}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <Field label="Name">
                <Input type="text" readOnly={true} value={oneBox.serie} width={16} />
              </Field>
              <ValuePicker
                label="Change Metric"
                icon="exchange-alt"
                options={availableSeries}
                onChange={(selectedItem) => {
                  oneBox.serie = selectedItem.value;
                  onChange(options.boxes);
                }}
                variant="secondary"
                size="sm"
              />
              <Field label="Prefix">
                <Input
                  type="text"
                  onChange={(event) => {
                    oneBox.prefix = event.currentTarget.value;
                    onChange(options.boxes);
                  }}
                  value={oneBox.prefix}
                />
              </Field>
              <Field label="Suffix">
                <Input
                  type="text"
                  onChange={(event) => {
                    oneBox.suffix = event.currentTarget.value;
                    onChange(options.boxes);
                  }}
                  value={oneBox.suffix}
                />
              </Field>
            </HorizontalGroup>
            <HorizontalGroup>
              {oneBox.prefix ? (
                <>
                  <Field label="Prefix size">
                    <Input
                      type="number"
                      min={1}
                      onChange={(event) => {
                        oneBox.prefixSize = parseInt(event.currentTarget.value, 10) || 10;
                        onChange(options.boxes);
                      }}
                      value={oneBox.prefixSize}
                    />
                  </Field>
                </>
              ) : null}
              {oneBox.suffix ? (
                <>
                  <Field label="Suffix size">
                    <Input
                      type="number"
                      onChange={(event) => {
                        oneBox.suffixSize = parseInt(event.currentTarget.value, 10) || 10;
                        onChange(options.boxes);
                      }}
                      value={oneBox.suffixSize}
                    />
                  </Field>
                </>
              ) : null}
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Position and Link" isOpen={true}>
          <div className="section gf-form-group">
            <Tooltip
              theme="info"
              content={
                <p>
                  You can easily find the coordinates if you <code>ctrl</code>+<code>left click</code>
                  anywhere on your image. You can also drag and drop the box on the image.
                </p>
              }
            >
              <Icon name="info-circle" />
            </Tooltip>
            <HorizontalGroup>
              <Field label="X">
                <Input
                  type="number"
                  onChange={(event) => {
                    oneBox.xpos = parseInt(event.currentTarget.value, 10) || 0;
                    onChange(options.boxes);
                  }}
                  value={oneBox.xpos}
                />
              </Field>
              <Field label="Y">
                <Input
                  type="number"
                  onChange={(event) => {
                    oneBox.ypos = parseInt(event.currentTarget.value, 10) || 0;
                    onChange(options.boxes);
                  }}
                  value={oneBox.ypos}
                />
              </Field>
            </HorizontalGroup>
            <HorizontalGroup>
              <Field label="Angle">
                <Input
                  type="number"
                  onChange={(event) => {
                    oneBox.angle = parseInt(event.currentTarget.value, 10);
                    onChange(options.boxes);
                  }}
                  value={oneBox.angle}
                />
              </Field>
              <Field label="Link">
                <Input
                  type="text"
                  onChange={(event) => {
                    oneBox.url = event.currentTarget.value;
                    onChange(options.boxes);
                  }}
                  value={oneBox.url}
                />
              </Field>
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Symbol Library" isOpen={false}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <div className="width-12">
                <Field label="Symbol">
                  <Select
                    options={SymbolsLibrary}
                    onChange={(event) => {
                      oneBox.symbol = event.value || '';
                      oneBox.hasSymbol = event.value !== '';
                      oneBox.symbolDefWidth = event.width;
                      oneBox.symbolWidth = event.width * event.factor;
                      oneBox.symbolDefHeight = event.height;
                      oneBox.symbolHeight = event.height * event.factor;
                      onChange(options.boxes);
                    }}
                    value={oneBox.symbol}
                  />
                </Field>
              </div>
              {oneBox.symbol !== '' && oneBox.symbol !== 'custom' && oneBox.symbol !== 'text' ? (
                <img
                  srcSet={getTemplateSrv().replace(oneBox.symbol)}
                  width={oneBox.symbolDefWidth}
                  height={oneBox.symbolDefHeight}
                />
              ) : null}
            </HorizontalGroup>
            {oneBox.symbol === 'custom' ? (
              <>
                <HorizontalGroup>
                  <Field label="Custom symbol url">
                    <Input
                      type="text"
                      onChange={(event) => {
                        oneBox.customSymbol = event.currentTarget.value;
                        onChange(options.boxes);
                      }}
                      value={oneBox.customSymbol}
                    />
                  </Field>
                </HorizontalGroup>
              </>
            ) : null}
            {oneBox.symbol !== '' ? (
              <>
                <HorizontalGroup>
                  <Field label="Symbol width">
                    <Input
                      type="number"
                      onChange={(event) => {
                        oneBox.symbolWidth = parseInt(event.currentTarget.value, 10) || 0;
                        onChange(options.boxes);
                      }}
                      value={oneBox.symbolWidth}
                    />
                  </Field>
                  <Field label="Symbol height">
                    <Input
                      type="number"
                      onChange={(event) => {
                        oneBox.symbolHeight = parseInt(event.currentTarget.value, 10) || 0;
                        onChange(options.boxes);
                      }}
                      value={oneBox.symbolHeight}
                    />
                  </Field>
                </HorizontalGroup>
              </>
            ) : null}
            <HorizontalGroup>
              <div className="width-8">
                <Field label="Hide value">
                  <Switch
                    value={oneBox.symbolHideText}
                    checked={oneBox.symbolHideText}
                    onChange={(event) => {
                      oneBox.symbolHideText = event.currentTarget.checked;
                      onChange(options.boxes);
                    }}
                  />
                </Field>
              </div>
              <div className="width-8">
                <Field label="Colorize symbol">
                  <Switch
                    value={oneBox.colorSymbol}
                    checked={oneBox.colorSymbol}
                    onChange={(event) => {
                      oneBox.colorSymbol = event.currentTarget.checked;
                      onChange(options.boxes);
                    }}
                  />
                </Field>
              </div>
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Orb" isOpen={false}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <div className="width-5">
                <Field label="Show Orb">
                  <Switch
                    value={oneBox.hasOrb}
                    checked={oneBox.hasOrb}
                    onChange={(event) => {
                      oneBox.hasOrb = event.currentTarget.checked;
                      onChange(options.boxes);
                    }}
                  />
                </Field>
              </div>
              {oneBox.hasOrb ? (
                <>
                  <div className="width-6">
                    <Field label="Hide text">
                      <Switch
                        checked={oneBox.orbHideText}
                        onChange={(event) => {
                          oneBox.orbHideText = event.currentTarget.checked;
                          onChange(options.boxes);
                        }}
                      />
                    </Field>
                  </div>
                  {!oneBox.orbHideText ? (
                    <>
                      <div className="width-12">
                        <Field label="Orb Location">
                          <Select
                            options={orbLocations}
                            onChange={(v) => {
                              oneBox.orbLocation = v.value as OrbLocations;
                              onChange(options.boxes);
                            }}
                            value={oneBox.orbLocation}
                          />
                        </Field>
                      </div>
                    </>
                  ) : null}
                  <div>
                    <Field label="Orb Size">
                      <Input
                        type="number"
                        min={1}
                        value={oneBox.orbSize}
                        onChange={(event) => {
                          oneBox.orbSize = parseInt(event.currentTarget.value, 10) || 0;
                          onChange(options.boxes);
                        }}
                      />
                    </Field>
                  </div>
                </>
              ) : null}
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Font, decimal, thresholds, background" isOpen={false}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <Field label="Decimal">
                <Input
                  type="number"
                  min={0}
                  onChange={(event) => {
                    oneBox.decimal = parseInt(event.currentTarget.value, 10) || 0;
                    onChange(options.boxes);
                  }}
                  value={oneBox.decimal}
                />
              </Field>
              <Field label="Font-size">
                <Input
                  type="number"
                  min={0}
                  onChange={(event) => {
                    oneBox.fontSize = parseInt(event.currentTarget.value, 10) || 0;
                    onChange(options.boxes);
                  }}
                  value={oneBox.fontSize}
                />
              </Field>
            </HorizontalGroup>

            <HorizontalGroup>
              <Field label="Use Thresholds">
                <Switch
                  onChange={(event) => {
                    oneBox.isUsingThresholds = event.currentTarget.checked;
                    onChange(options.boxes);
                  }}
                  value={oneBox.isUsingThresholds}
                />
              </Field>
              {oneBox.isUsingThresholds ? (
                <>
                  <Tooltip
                    content={
                      <p>
                        Enter 2 comma-separated numbers. 20,60 will produce: <code>value &lt;= 20</code> -&gt; green{' '}
                        <br />
                        <code>value between 20 and 60</code> -&gt; yellow <br />
                        <code>value &gt;= 60</code> -&gt; red{' '}
                      </p>
                    }
                  >
                    <Icon name="info-circle" />
                  </Tooltip>
                  <Field label="Thresholds">
                    <Input
                      type="text"
                      onChange={(event) => {
                        oneBox.thresholds = event.currentTarget.value;
                        onChange(options.boxes);
                      }}
                      value={oneBox.thresholds}
                    />
                  </Field>
                  <HorizontalGroup>
                    <ColorPicker
                      color={oneBox.colorLow}
                      onChange={(color) => {
                        oneBox.colorLow = color;
                        onChange(options.boxes);
                      }}
                    />

                    <ColorPicker
                      color={oneBox.colorMedium}
                      onChange={(color) => {
                        oneBox.colorMedium = color;
                        onChange(options.boxes);
                      }}
                    />
                    <ColorPicker
                      color={oneBox.colorHigh}
                      onChange={(color) => {
                        oneBox.colorHigh = color;
                        onChange(options.boxes);
                      }}
                    />
                  </HorizontalGroup>
                </>
              ) : (
                <Field label="Color">
                  <ColorPicker
                    color={oneBox.color}
                    onChange={(color) => {
                      oneBox.color = color;
                      onChange(options.boxes);
                    }}
                  />
                </Field>
              )}
            </HorizontalGroup>
            {oneBox.isUsingThresholds ? (
              <HorizontalGroup>
                <Field label="Blink if low">
                  <Switch
                    onChange={(event) => {
                      oneBox.blinkLow = event.currentTarget.checked;
                      onChange(options.boxes);
                    }}
                    value={oneBox.blinkLow}
                  />
                </Field>
                <Field label="Blink if high">
                  <Switch
                    onChange={(event) => {
                      oneBox.blinkHigh = event.currentTarget.checked;
                      onChange(options.boxes);
                    }}
                    value={oneBox.blinkHigh}
                  />
                </Field>
              </HorizontalGroup>
            ) : null}
            <HorizontalGroup>
              <Field label="Show the background">
                <Switch
                  onChange={(event) => {
                    oneBox.hasBackground = event.currentTarget.checked;
                    onChange(options.boxes);
                  }}
                  value={oneBox.hasBackground}
                />
              </Field>
              {oneBox.hasBackground ? (
                <HorizontalGroup>
                  <Field label="Color">
                    <ColorPicker
                      color={oneBox.backgroundColor}
                      onChange={(color) => {
                        oneBox.backgroundColor = color;
                        onChange(options.boxes);
                      }}
                    />
                  </Field>
                </HorizontalGroup>
              ) : null}
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <CollapsableSection label="Border" isOpen={false}>
          <div className="section gf-form-group">
            <HorizontalGroup>
              <div className="width-16">
                <Field label="Show border" description="Add a border around your box">
                  <Switch
                    value={oneBox.hasBorder}
                    checked={oneBox.hasBorder}
                    onChange={(event) => {
                      oneBox.hasBorder = event.currentTarget.checked;
                      onChange(options.boxes);
                    }}
                  />
                </Field>
              </div>
              {oneBox.hasBorder ? (
                <>
                  <VerticalGroup>
                    <Field label="Border width" description="Width of the border in px">
                      <Input
                        type="number"
                        value={oneBox.borderWidth}
                        min={0}
                        onChange={(event) => {
                          oneBox.borderWidth = parseInt(event.currentTarget.value, 10) || 0;
                          onChange(options.boxes);
                        }}
                      />
                    </Field>
                    <Field label="Color">
                      <ColorPicker
                        color={oneBox.borderColor}
                        onChange={(color) => {
                          oneBox.borderColor = color;
                          onChange(options.boxes);
                        }}
                      />
                    </Field>
                  </VerticalGroup>
                </>
              ) : null}
            </HorizontalGroup>
          </div>
        </CollapsableSection>
        <hr />
      </div>
    );
  };

  return (
    <div className="section gf-form-group">
      {selectedBoxIndex !== -1 ? (
        <>
          <h4 className="section-heading">Selected Box:</h4>
          {oneBoxEditor(options.boxes[selectedBoxIndex], selectedBoxIndex)}
          <hr />
          <h4 className="section-heading">All defined boxes:</h4>
        </>
      ) : null}
      {options.boxes.map((oneBox, index) => oneBoxEditor(oneBox, index))}
      <Button variant="primary" size="md" icon="plus" onClick={onAddBoxBtnClicked}>
        Add a box
      </Button>
    </div>
  );
};
