'use strict';

System.register(['app/plugins/sdk', 'app/core/time_series2', 'lodash', 'd3'], function (_export, _context) {
  "use strict";

  var MetricsPanelCtrl, TimeSeries, _, scaleQuantize, _createClass, panelDefaults, EpictCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }, function (_appCoreTime_series) {
      TimeSeries = _appCoreTime_series.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_d) {
      scaleQuantize = _d.scaleQuantize;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        bgColor: null,
        boxes: []
      };

      _export('EpictCtrl', EpictCtrl = function (_MetricsPanelCtrl) {
        _inherits(EpictCtrl, _MetricsPanelCtrl);

        function EpictCtrl($scope, $injector) {
          _classCallCheck(this, EpictCtrl);

          var _this = _possibleConstructorReturn(this, (EpictCtrl.__proto__ || Object.getPrototypeOf(EpictCtrl)).call(this, $scope, $injector));

          _.defaultsDeep(_this.panel, panelDefaults);

          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          _this.events.on('panel-teardown', _this.onPanelTeardown.bind(_this));
          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('data-snapshot-load', _this.onDataSnapshotLoad.bind(_this));
          _this.events.on('panel-initialized', _this.render.bind(_this));
          _this.events.on('render', _this.render.bind(_this));
          return _this;
        }

        _createClass(EpictCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/larona-epict-panel/editor.html', 2);
          }
        }, {
          key: 'onPanelTeardown',
          value: function onPanelTeardown() {}
        }, {
          key: 'render',
          value: function render() {
            this.scope.ctrl.panel.boxes.forEach(function (box) {
              if (box.usingThresholds == true) {
                if (box.rawValue <= parseInt(box.thresholds.split(',')[0])) {
                  box.color = box.colorLow;
                  if (box.blinkLow) {
                    box.isBlinking = true;
                  } else {
                    box.isBlinking = false;
                  }
                } else if (box.rawValue >= parseInt(box.thresholds.split(',')[1])) {
                  box.color = box.colorHigh;
                  if (box.blinkHigh) {
                    box.isBlinking = true;
                  } else {
                    box.isBlinking = false;
                  }
                } else {
                  box.color = box.colorMedium;
                  box.isBlinking = false;
                }
                //alert(box.rawValue);
              } else {
                box.isBlinking = false;
              }
            });

            //	alert("yes");
          }
        }, {
          key: 'onDataReceived',
          value: function onDataReceived(panelData) {
            var _this2 = this;

            // console.log(panelData);
            this.series = panelData.map(this.seriesHandler.bind(this));
            // console.log(this.series);
            //Assigner valeur
            this.panel.boxes.forEach(function (box) {
              var wantedSerie = _this2.series.filter(function (oneSerie) {
                return oneSerie.alias == box.serie;
              });
              if (wantedSerie != null && wantedSerie[0] != null && wantedSerie[0].datapoints.length != 0) {
                if (wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0] != null) {
                  var nf = new Intl.NumberFormat();
                  var numberBeforeFormatting = wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0].toFixed(box.decimal);
                  box.rawValue = wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]; //Used to determine the color if the Threshold is enabled
                  var formattedNumber = nf.format(numberBeforeFormatting);
                  box.text = formattedNumber;
                } else {
                  box.text = "-";
                }
              } else {
                box.text = "N/A";
              }
              // console.log(wantedSerie);
              // alert(wantedSerie[0].datapoints[wantedSerie.length-1]);
            });
            this.render();
          }
        }, {
          key: 'onDataSnapshotLoad',
          value: function onDataSnapshotLoad(snapshotData) {
            this.onDataReceived(snapshotData);
          }
        }, {
          key: 'seriesHandler',
          value: function seriesHandler(seriesData) {
            var series = new TimeSeries({
              datapoints: seriesData.datapoints || [],
              alias: seriesData.target
            });
            series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);

            return series;
          }
        }, {
          key: 'addBox',
          value: function addBox() {
            this.panel.boxes.push({ serie: "A-series", text: "N/A", xpos: 0, ypos: 0, fontsize: 12, prefixSize: 10, suffixSize: 10, color: "#000", decimal: 1, usingThresholds: false, thresholds: '20,60', colorLow: "#0f0", colorMedium: "#fa1", colorHigh: "#f00", hasOrb: false, orbSize: "10", orbHideText: false, orbLocation: "Left" });

            console.log(this.panel.boxes);
          }
        }, {
          key: 'deleteBox',
          value: function deleteBox($index) {
            this.panel.boxes.splice($index, 1);
          }
        }, {
          key: 'clicktest',
          value: function clicktest(e) {
            if (e.ctrlKey) {
              alert("X:" + e.offsetX + " Y:" + e.offsetY);
            }
          }
        }, {
          key: 'link',
          value: function link(scope, elem) {
            var _this3 = this;

            this.events.on('render', function () {
              var $panelContainer = elem.find('.panel-container');

              if (_this3.panel.bgColor) {
                $panelContainer.css('background-color', _this3.panel.bgColor);
              } else {
                $panelContainer.css('background-color', '');
              }
            });
          }
        }]);

        return EpictCtrl;
      }(MetricsPanelCtrl));

      _export('EpictCtrl', EpictCtrl);

      EpictCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=epict_ctrl.js.map
