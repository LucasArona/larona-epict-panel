"use strict";

System.register(["app/plugins/sdk", "app/core/time_series2", "lodash", "d3"], function (_export, _context) {
  "use strict";

  var MetricsPanelCtrl, TimeSeries, _, scaleQuantize, panelDefaults, EpictCtrl;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      panelDefaults = {
        bgColor: null,
        boxes: []
      };

      _export("EpictCtrl", EpictCtrl =
      /*#__PURE__*/
      function (_MetricsPanelCtrl) {
        _inherits(EpictCtrl, _MetricsPanelCtrl);

        function EpictCtrl($scope, $injector) {
          var _this;

          _classCallCheck(this, EpictCtrl);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(EpictCtrl).call(this, $scope, $injector));

          _.defaultsDeep(_this.panel, panelDefaults);

          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_assertThisInitialized(_this)));

          _this.events.on('panel-teardown', _this.onPanelTeardown.bind(_assertThisInitialized(_this)));

          _this.events.on('data-received', _this.onDataReceived.bind(_assertThisInitialized(_this)));

          _this.events.on('data-snapshot-load', _this.onDataSnapshotLoad.bind(_assertThisInitialized(_this)));

          _this.events.on('panel-initialized', _this.render.bind(_assertThisInitialized(_this)));

          _this.events.on('render', _this.render.bind(_assertThisInitialized(_this)));

          _this.boxesRawValues = [];
          _this.boxesTexts = [];
          return _this;
        }

        _createClass(EpictCtrl, [{
          key: "onInitEditMode",
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/larona-epict-panel/editor.html', 2);
          }
        }, {
          key: "onPanelTeardown",
          value: function onPanelTeardown() {}
        }, {
          key: "render",
          value: function render() {
            this.processedBgURL = this.templateSrv.replace(this.panel.bgURL, this.panel.scopedVars);
            var self = this;
            var numberOfBoxes = this.scope.ctrl.panel.boxes.length;

            for (var i = 0; i < numberOfBoxes; i++) {
              var box = this.scope.ctrl.panel.boxes[i];

              if (box.URL) {
                box.processedURL = self.templateSrv.replace(box.URL, self.panel.scopedVars);
              }

              if (box.usingThresholds == true) {
                if (this.boxesRawValues[i] <= parseInt(box.thresholds.split(',')[0])) {
                  box.color = box.colorLow;

                  if (box.blinkLow) {
                    box.isBlinking = true;
                  } else {
                    box.isBlinking = false;
                  }
                } else if (this.boxesRawValues[i] >= parseInt(box.thresholds.split(',')[1])) {
                  box.color = box.colorHigh;

                  if (box.blinkHigh) {
                    box.isBlinking = true;
                  } else {
                    box.isBlinking = false;
                  }
                } else {
                  box.color = box.colorMedium;
                  box.isBlinking = false;
                } //alert(box.rawValue);

              } else {
                box.isBlinking = false;
              }
            }
            /*this.scope.ctrl.panel.boxes.forEach(function(box){
            	if(box.URL){
            		box.processedURL=self.templateSrv.replace(box.URL, self.panel.scopedVars)
            	}
            	if(box.usingThresholds==true){
                   		if(box.rawValue <=parseInt(box.thresholds.split(',')[0])){
            			box.color=box.colorLow;
            			if(box.blinkLow){
            				box.isBlinking=true
            			}else{
            				box.isBlinking=false;
            			}
            		}else if(box.rawValue >=parseInt(box.thresholds.split(',')[1])){
            			box.color=box.colorHigh;
            			if(box.blinkHigh){
            				box.isBlinking=true
            			}else{
            				box.isBlinking=false;
            			}
            		}else{
            			box.color=box.colorMedium
            			box.isBlinking=false;
            		}
            		//alert(box.rawValue);
            	}else{
            		box.isBlinking=false;
            	}
            });*/

          }
        }, {
          key: "onDataReceived",
          value: function onDataReceived(panelData) {
            // console.log(panelData);
            this.series = panelData.map(this.seriesHandler.bind(this)); // console.log(this.series);

            this.boxesRawValues = []; //Store values in this array instead of boxes, otherwise the values will be persisted in grafana db and trigger an "unsaved changes warning" everytime
            //Assigner valeur

            /*    this.panel.boxes.forEach(box => {
                 var wantedSerie = this.series.filter(function (oneSerie) {
                    return oneSerie.alias == box.serie;
                  });
                  
                  if(wantedSerie != null && wantedSerie[0]!=null && wantedSerie[0].datapoints.length!=0)
                  {
            	if(wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]!=null){
            		var nf = new Intl.NumberFormat();
                    	var numberBeforeFormatting=wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0].toFixed(box.decimal);
                    	
            		this.boxesRawValues.push(wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]); //Used to determine the color if the Threshold is enabled
            	
            		box.rawValue=wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]  //Used to determine the color if the Threshold is enabled
            		var formattedNumber = nf.format(numberBeforeFormatting);
                    	box.text = formattedNumber;
            	}else{
            		box.text="-";
            	}
                  }else{
                    box.text="N/A";
                  } 
                  // console.log(wantedSerie);
                  // alert(wantedSerie[0].datapoints[wantedSerie.length-1]);
                }); 
              */

            var size = this.panel.boxes.length;
            this.boxesTexts = [];

            for (var i = 0; i < size; i++) {
              var box = this.panel.boxes[i];
              var wantedSerie = this.series.filter(function (oneSerie) {
                return oneSerie.alias == box.serie;
              });

              if (wantedSerie != null && wantedSerie[0] != null && wantedSerie[0].datapoints.length != 0) {
                if (wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0] != null) {
                  var nf = new Intl.NumberFormat();
                  var numberBeforeFormatting = wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0].toFixed(box.decimal);
                  this.boxesRawValues.push(wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]); //Used to determine the color if the Threshold is enabled
                  //box.rawValue=wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]  //Used to determine the color if the Threshold is enabled

                  var formattedNumber = nf.format(numberBeforeFormatting); //box.text = formattedNumber;

                  this.boxesTexts.push(formattedNumber);
                } else {
                  this.boxesRawValues.push(null);
                  this.boxesTexts.push("-"); //box.text="-";
                }
              } else {
                //box.text="N/A";
                this.boxesRawValues.push(null);
                this.boxesTexts.push("N/A");
              } // console.log(wantedSerie);
              // alert(wantedSerie[0].datapoints[wantedSerie.length-1]);

            }

            console.log(this.boxesRawValues);
            console.log(this.boxesTexts);
            this.render();
          }
        }, {
          key: "onDataSnapshotLoad",
          value: function onDataSnapshotLoad(snapshotData) {
            this.onDataReceived(snapshotData);
          }
        }, {
          key: "seriesHandler",
          value: function seriesHandler(seriesData) {
            var series = new TimeSeries({
              datapoints: seriesData.datapoints || [],
              alias: seriesData.target
            });
            series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
            return series;
          }
        }, {
          key: "addBox",
          value: function addBox() {
            this.panel.boxes.push({
              serie: "A-series",
              text: "N/A",
              xpos: 0,
              ypos: 0,
              fontsize: 12,
              prefixSize: 10,
              suffixSize: 10,
              color: "#000",
              decimal: 1,
              usingThresholds: false,
              thresholds: '20,60',
              colorLow: "#0f0",
              colorMedium: "#fa1",
              colorHigh: "#f00",
              hasOrb: false,
              orbSize: "10",
              orbHideText: false,
              orbLocation: "Left"
            });
            console.log(this.panel.boxes);
          }
        }, {
          key: "cloneBox",
          value: function cloneBox($index) {
            this.panel.boxes.push(Object.assign({}, this.panel.boxes[$index]));
          }
        }, {
          key: "deleteBox",
          value: function deleteBox($index) {
            this.panel.boxes.splice($index, 1);
            this.refresh();
          }
        }, {
          key: "clicktest",
          value: function clicktest(e) {
            if (e.ctrlKey) {
              alert("X:" + e.offsetX + " Y:" + e.offsetY);
            }
          }
        }, {
          key: "link",
          value: function link(scope, elem) {
            var _this2 = this;

            this.events.on('render', function () {
              var $panelContainer = elem.find('.panel-container');

              if (_this2.panel.bgColor) {
                $panelContainer.css('background-color', _this2.panel.bgColor);
              } else {
                $panelContainer.css('background-color', '');
              }
            });
          }
        }]);

        return EpictCtrl;
      }(MetricsPanelCtrl));

      EpictCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=epict_ctrl.js.map
