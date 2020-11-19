import React, { PureComponent } from 'react';
import { PanelEditorProps } from '@grafana/data';

import { SimpleOptions, Box } from './types';
import {
  Tooltip,
  Icon,
  Switch,
  HorizontalGroup,
  Input,
  Field,
  Select,
  IconButton,
  Button,
  ColorPicker,
} from '@grafana/ui';

export class EpictEditor extends PureComponent<PanelEditorProps<SimpleOptions>> {
  onDeleteBox = ({ target }: any, index: number) => {
    delete this.props.options.boxes[index];
    this.props.options.boxes.splice(index, 1);
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onCloneBox = ({ target }: any, box: Box) => {
    this.props.options.boxes.push(Object.create(box));
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxSerieUpdated = ({ target }: any, box: Box) => {
    box.serie = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxPrefixChanged = ({ target }: any, box: Box) => {
    box.prefix = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxPrefixFontSizeChanged = ({ target }: any, box: Box) => {
    box.prefixSize = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxSuffixChanged = ({ target }: any, box: Box) => {
    box.suffix = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxSuffixFontSizeChanged = ({ target }: any, box: Box) => {
    box.suffixSize = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxXposChanged = ({ target }: any, box: Box) => {
    box.xpos = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxYposChanged = ({ target }: any, box: Box) => {
    box.ypos = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxAngleChanged = ({ target }: any, box: Box) => {
    box.angle = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxUrlChanged = ({ target }: any, box: Box) => {
    box.url = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxDecimalChanged = ({ target }: any, box: Box) => {
    box.decimal = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxFontsizeChanged = ({ target }: any, box: Box) => {
    box.fontSize = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxOrbChanged = ({ target }: any, box: Box) => {
    box.hasOrb = target.checked;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxOrbHideTextChanged = ({ target }: any, box: Box) => {
    box.orbHideText = target.checked;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxOrbLocationChanged = (location: any, box: Box) => {
    box.orbLocation = location.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxUseThresholdsChanged = ({ target }: any, box: Box) => {
    box.isUsingThresholds = target.checked;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxThresholdsChanged = ({ target }: any, box: Box) => {
    box.thresholds = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxColorChanged = (color: string, box: Box) => {
    box.color = color;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxColorLowChanged = (color: string, box: Box) => {
    box.colorLow = color;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxColorMediumChanged = (color: string, box: Box) => {
    box.colorMedium = color;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxColorHighChanged = (color: string, box: Box) => {
    box.colorHigh = color;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxBlinkHighChanged = ({ target }: any, box: Box) => {
    box.blinkHigh = target.checked;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxBlinkLowChanged = ({ target }: any, box: Box) => {
    box.blinkLow = target.checked;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };
  onBoxOrbSizeChanged = ({ target }: any, box: Box) => {
    box.orbSize = target.value;
    this.props.onOptionsChange({
      ...this.props.options,
      boxes: this.props.options.boxes,
    });
  };

  onBgUrlChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, bgURL: target.value });
  };

  onAddBoxBtnClicked = ({ target }: any) => {
    if (this.props.options.boxes == null) {
      this.props.options.boxes = [];
    }
    this.props.options.boxes.push({
      angle: 0,
      color: '#fff',
      colorHigh: '#f00',
      colorLow: '#0f0',
      colorMedium: '#fa1',
      decimal: 0,
      fontSize: 12,
      hasOrb: false,
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
    });
    this.forceUpdate();
    // console.log(this.props.options.boxes);
    //this.props.onOptionsChange({ ...this.props.options, boxes: target.value });
  };

  render() {
    const { options } = this.props;
    //console.log(options.boxes);
    //  let boxes:JSX.Element;
    // let boxes;
    if (options.boxes == null) {
      options.boxes = [];
    }
    for (let index = 0; index < options.boxes.length; index++) {
      // const element = options.boxes[index];
      // boxes = <label>BOX</label>;
    }
    //   boxes = options.boxes.map(oneBox => <div className="gf-form-group">{oneBox.name}</div>);
    //   console.log(boxes);

    return (
      <div className="section gf-form-group">
        <div className="section gf-form-group">
          <h5 className="section-heading">Display</h5>
          <Field label="Background URL">
            <Input type="text" onChange={this.onBgUrlChanged} value={options.bgURL} width={48} />
          </Field>
        </div>
        <div className="section gf-form-group">
          <h4 className="section-heading">Boxes definitions</h4>
          {options.boxes.map((oneBox, index) => (
            <div>
              <h5>Box #{index}</h5>
              <div className="section gf-form-group">
                <HorizontalGroup>
                  <IconButton
                    name="trash-alt"
                    size="xl"
                    surface="panel"
                    onClick={event => this.onDeleteBox(event, index)}
                  />
                  <IconButton name="copy" size="xl" surface="panel" onClick={event => this.onCloneBox(event, oneBox)} />
                </HorizontalGroup>
              </div>
              <div className="section gf-form-group">
                <h5 className="section-heading">Metric</h5>

                <HorizontalGroup>
                  <Field label="Name">
                    <Input type="text" onChange={event => this.onBoxSerieUpdated(event, oneBox)} value={oneBox.serie} />
                  </Field>
                  <Field label="Prefix">
                    <Input
                      type="text"
                      onChange={event => this.onBoxPrefixChanged(event, oneBox)}
                      value={oneBox.prefix}
                    />
                  </Field>
                  <Field label="Suffix">
                    <Input
                      type="text"
                      onChange={event => this.onBoxSuffixChanged(event, oneBox)}
                      value={oneBox.suffix}
                    />
                  </Field>
                </HorizontalGroup>
                <HorizontalGroup>
                  {oneBox.prefix ? (
                    <>
                      <Field label="Prefix size">
                        <Input
                          type="text"
                          onChange={event => this.onBoxPrefixFontSizeChanged(event, oneBox)}
                          value={oneBox.prefixSize}
                        />
                      </Field>
                    </>
                  ) : null}
                  {oneBox.suffix ? (
                    <>
                      <Field label="Suffix size">
                        <Input
                          type="text"
                          onChange={event => this.onBoxSuffixFontSizeChanged(event, oneBox)}
                          value={oneBox.suffixSize}
                        />
                      </Field>
                    </>
                  ) : null}
                </HorizontalGroup>
              </div>
              <div className="section gf-form-group">
                <h5 className="section-heading">Position and Link</h5>
                <Tooltip
                  theme="info"
                  content={
                    <p>
                      You can easily find the coordinates if you <code>ctrl</code>+<code>left click</code>anywhere on
                      your image
                    </p>
                  }
                >
                  <Icon name="info-circle" />
                </Tooltip>
                <HorizontalGroup>
                  <Field label="X">
                    <Input type="text" onChange={event => this.onBoxXposChanged(event, oneBox)} value={oneBox.xpos} />
                  </Field>
                  <Field label="Y">
                    <Input type="text" onChange={event => this.onBoxYposChanged(event, oneBox)} value={oneBox.ypos} />
                  </Field>
                </HorizontalGroup>
                <HorizontalGroup>
                  <Field label="Angle">
                    <Input type="text" onChange={event => this.onBoxAngleChanged(event, oneBox)} value={oneBox.angle} />
                  </Field>
                  <Field label="Link">
                    <Input type="text" onChange={event => this.onBoxUrlChanged(event, oneBox)} value={oneBox.url} />
                  </Field>
                </HorizontalGroup>
              </div>
              <div className="section gf-form-group">
                <h5 className="section-heading">Appearance</h5>
                <HorizontalGroup>
                  <Field label="Decimal">
                    <Input
                      type="text"
                      onChange={event => this.onBoxDecimalChanged(event, oneBox)}
                      value={oneBox.decimal}
                    />
                  </Field>
                  <Field label="Font-size">
                    <Input
                      type="text"
                      onChange={event => this.onBoxFontsizeChanged(event, oneBox)}
                      value={oneBox.fontSize}
                    />
                  </Field>
                </HorizontalGroup>
                <HorizontalGroup>
                  <div className="width-5">
                    <Field label="Show Orb">
                      <Switch
                        value={oneBox.hasOrb}
                        checked={oneBox.hasOrb}
                        onChange={event => this.onBoxOrbChanged(event, oneBox)}
                      />
                    </Field>
                  </div>
                  {oneBox.hasOrb ? (
                    <>
                      <div className="width-6">
                        <Field label="Hide text">
                          <Switch
                            checked={oneBox.orbHideText}
                            onChange={event => this.onBoxOrbHideTextChanged(event, oneBox)}
                          />
                        </Field>
                      </div>
                      {!oneBox.orbHideText ? (
                        <>
                          <div className="width-12">
                            <Field label="Orb Location">
                              <Select
                                options={opts}
                                onChange={v => this.onBoxOrbLocationChanged(v, oneBox)}
                                value={oneBox.orbLocation}
                              />
                            </Field>
                          </div>
                        </>
                      ) : null}
                      <div>
                        <Field label="Orb Size">
                          <Input
                            type="text"
                            value={oneBox.orbSize}
                            onChange={event => this.onBoxOrbSizeChanged(event, oneBox)}
                          />
                        </Field>
                      </div>
                    </>
                  ) : null}
                </HorizontalGroup>
                <HorizontalGroup>
                  <Field label="Use Thresholds">
                    <Switch
                      onChange={event => this.onBoxUseThresholdsChanged(event, oneBox)}
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
                          onChange={event => this.onBoxThresholdsChanged(event, oneBox)}
                          value={oneBox.thresholds}
                        />
                      </Field>
                      <HorizontalGroup>
                        <ColorPicker
                          color={oneBox.colorLow}
                          onChange={color => this.onBoxColorLowChanged(color, oneBox)}
                        />

                        <ColorPicker
                          color={oneBox.colorMedium}
                          onChange={color => this.onBoxColorMediumChanged(color, oneBox)}
                        />

                        <ColorPicker
                          color={oneBox.colorHigh}
                          onChange={color => this.onBoxColorHighChanged(color, oneBox)}
                        />
                      </HorizontalGroup>
                    </>
                  ) : (
                    <Field label="Color">
                      <ColorPicker color={oneBox.color} onChange={color => this.onBoxColorChanged(color, oneBox)} />
                    </Field>
                  )}
                </HorizontalGroup>
                {oneBox.isUsingThresholds ? (
                  <HorizontalGroup>
                    <Field label="Blink if low">
                      <Switch onChange={event => this.onBoxBlinkLowChanged(event, oneBox)} value={oneBox.blinkLow} />
                    </Field>
                    <Field label="Blink if high">
                      <Switch onChange={event => this.onBoxBlinkHighChanged(event, oneBox)} value={oneBox.blinkHigh} />
                    </Field>
                  </HorizontalGroup>
                ) : null}
              </div>
              <hr />
            </div>
          ))}
          <Button variant="primary" size="md" icon="plus" onClick={this.onAddBoxBtnClicked}>
            Add a box
          </Button>
        </div>
      </div>
    );
  }
}
const opts = [
  { label: 'Top', value: 'Top' },
  { label: 'Bottom', value: 'Bottom' },
  { label: 'Left', value: 'Left' },
  { label: 'Right', value: 'Right' },
];
