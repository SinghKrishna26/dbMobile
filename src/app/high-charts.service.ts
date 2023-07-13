import * as Highcharts from 'highcharts';
import { Injectable } from '@angular/core';

@Injectable(
)
export class HighchartsService {
    constructor() {
    }
    
    createChart(el: Highcharts.Options, cfg: Highcharts.ChartCallbackFunction | undefined) {
      Highcharts.chart(el, cfg);
    }
}