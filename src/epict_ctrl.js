import {MetricsPanelCtrl} from 'app/plugins/sdk';
import TimeSeries from 'app/core/time_series2';
import _ from 'lodash';
import { scaleQuantize } from 'd3';

const panelDefaults = {
  bgColor: null,
  boxes: []
};

export class EpictCtrl extends MetricsPanelCtrl {
  
  constructor($scope, $injector) {
    super($scope, $injector);
    _.defaultsDeep(this.panel, panelDefaults);

   
    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('data-snapshot-load', this.onDataSnapshotLoad.bind(this));
    this.events.on('panel-initialized', this.render.bind(this));
    this.events.on('render',this.render.bind(this));
    this.boxesRawValues=[];
    this.boxesTexts=[];
  }

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/larona-epict-panel/editor.html', 2);
  }

  onPanelTeardown() {
  }

  render(){
	  this.processedBgURL=this.templateSrv.replace(this.panel.bgURL, this.panel.scopedVars);
    var self=this;
    var numberOfBoxes=this.scope.ctrl.panel.boxes.length;
    for(var i=0; i<numberOfBoxes;i++){
      var box=this.scope.ctrl.panel.boxes[i];
      if(box.URL){
        box.processedURL=self.templateSrv.replace(box.URL, self.panel.scopedVars)
      }
      if(box.usingThresholds==true){
        if(this.boxesRawValues[i] <=parseInt(box.thresholds.split(',')[0])){
          box.color=box.colorLow;
          if(box.blinkLow){
            box.isBlinking=true
          }else{
            box.isBlinking=false;
          }
        }else if(this.boxesRawValues[i] >=parseInt(box.thresholds.split(',')[1])){
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
      }else{
        box.isBlinking=false;
      }
    }
  }

  onDataReceived(panelData) {
    var self=this;
    // console.log(panelData);
    this.series = panelData.map(this.seriesHandler.bind(this));
    // console.log(this.series);
    this.boxesRawValues=[]; //Store values in this array instead of boxes, otherwise the values will be persisted in grafana db and trigger an "unsaved changes warning" everytime

    var size=this.panel.boxes.length;
    this.boxesTexts=[];
    for(var i=0; i<size; i++){
      var box=this.panel.boxes[i];
      var wantedSerie = this.series.filter(function (oneSerie) {
        return oneSerie.alias == self.templateSrv.replace(box.serie, self.panel.scopedVars);
      });
      if(wantedSerie != null && wantedSerie[0]!=null && wantedSerie[0].datapoints.length!=0)
      {
        if(wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]!=null){
          var nf = new Intl.NumberFormat();
          var numberBeforeFormatting=wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0].toFixed(box.decimal);
          this.boxesRawValues.push(wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0]); //Used to determine the color if the Threshold is enabled
          var formattedNumber = nf.format(numberBeforeFormatting);
          this.boxesTexts.push(formattedNumber);
        }else{
          this.boxesRawValues.push(null);
          this.boxesTexts.push("-")
        }
      }else{
        this.boxesRawValues.push(null);
        this.boxesTexts.push("N/A")
      }
    }
    console.log(this.boxesRawValues);
    console.log(this.boxesTexts);
    this.render();
  }

  onDataSnapshotLoad(snapshotData) {
    this.onDataReceived(snapshotData);
  }

  seriesHandler(seriesData) {
    const series = new TimeSeries({
      datapoints: seriesData.datapoints || [],
      alias: seriesData.target,
    });
    series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);
    
    return series;
  }

  addBox(){
    this.panel.boxes.push({serie:"A-series",text:"N/A",xpos:0,ypos:0,angle:0,fontsize:12,prefixSize:10,suffixSize:10,color:"#000",decimal:1,usingThresholds:false,thresholds:'20,60',colorLow:"#0f0",colorMedium:"#fa1",colorHigh:"#f00", hasOrb:false, orbSize:"10", orbHideText:false, orbLocation: "Left"});
    
    console.log(this.panel.boxes);
  }
  cloneBox($index){
    this.panel.boxes.push(Object.assign({}, this.panel.boxes[$index]));
  }
  deleteBox($index){
     this.panel.boxes.splice($index,1);
     this.refresh();
  }
clicktest(e){
  if(e.ctrlKey){
    alert("X:"+e.offsetX+" Y:"+e.offsetY);
  }
}

  link(scope, elem) {
    this.events.on('render', () => {
      const $panelContainer = elem.find('.panel-container');

      if (this.panel.bgColor) {
        $panelContainer.css('background-color', this.panel.bgColor);
      } else {
        $panelContainer.css('background-color', '');
      }
    });
  }
}

EpictCtrl.templateUrl = 'module.html';
