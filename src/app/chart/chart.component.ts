import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  loaded = false;

  chart = []; // This will hold our chart info

  options = {
      legend: {
        display: false
      },
      
      scales: {
          xAxes: [{
              ticks:{beginAtZero:true}
          }]
      }
  };

  constructor(private _products: ProductsService) {}
  
  private _endpoint = ""

  @Input()
  set endpoint(endpoint: string) {
    console.log(endpoint)

    this._endpoint = endpoint;

    if(this.endpoint){
      this._products.getData(this.endpoint)
        .subscribe(res => {

              let labels = res == undefined ? [] : this.Capitalize(Object.keys(res));
              let values = res == undefined ? [] : (Object.values(res));
              
              this.loaded = true;
              this.chart.data.labels = labels;
              this.chart.data.datasets[0].data = values;
              this.chart.update();
          })
    }
    
  }

  get endpoint(): string {
    // transform value for display
    return this._endpoint;
  }

  ngOnInit() {
    this.chart = new Chart('canvas', {
          "type":"bar",
          "data":{
            "labels": [],
            "datasets":[{
              "label":"Sales By Month for (Selected Filters)","data":[],
              "fill":false,
              "backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],
              "borderColor":["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],
              "borderWidth":1
            }]
          },"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}, "legend":"false"}]}}
        });
  }

  Capitalize(strArray){
    let words = []
    for( var str in strArray){
      words.push(strArray[str].toUpperCase())
    }
    return words;
  }
}