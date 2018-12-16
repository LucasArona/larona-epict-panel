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

  }

  onInitEditMode() {
    this.addEditorTab('Options', 'public/plugins/larona-epict-panel/editor.html', 2);
  }

  onPanelTeardown() {
  }

  onDataReceived(panelData) {

    // console.log(panelData);
    this.series = panelData.map(this.seriesHandler.bind(this));
    // console.log(this.series);
    //Assigner valeur
    this.panel.boxes.forEach(box => {
     var wantedSerie = this.series.filter(function (oneSerie) {
        return oneSerie.alias == box.serie;
      });
      if(wantedSerie != null && wantedSerie[0]!=null)
      {
	var nf = new Intl.NumberFormat();
        var numberBeforeFormatting=wantedSerie[0].datapoints[wantedSerie[0].datapoints.length - 1][0].toFixed(box.decimal);
        var formattedNumber = nf.format(numberBeforeFormatting);
        box.text = formattedNumber;  
      }else{
        box.text="N/A";
      }
     
      // console.log(wantedSerie);
      // alert(wantedSerie[0].datapoints[wantedSerie.length-1]);
    }); 
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
    this.panel.boxes.push({serie:"A-series",text:"N/A",xpos:0,ypos:0,fontsize:12,color:"#000",decimal:1});
  }
  deleteBox($index){
     this.panel.boxes.splice($index,1);
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
