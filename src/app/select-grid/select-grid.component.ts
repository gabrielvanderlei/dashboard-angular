import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-select-grid',
  templateUrl: './select-grid.component.html',
  styleUrls: ['./select-grid.component.css']
})

export class SelectGridComponent implements OnInit {

  atual = {
    category: 0,
    product: 0,
    brand: 0
  }

  categoryData = {}
  productData = {}
  brandData = {}

  atualEndpoint = ""

  loaded:Boolean = false

  constructor(private _options: OptionsService) {}

  load(){
    this._options.getOptions().subscribe(res => {
      this.categoryData = res;
      this.productData = res[this.atual.category].data;
      this.brandData = res[this.atual.category].data[this.atual.product].data;
      this.atualEndpoint = res[this.atual.category].data[this.atual.product].data[this.atual.brand].endpoint;
      this.loaded = true
      console.log(this.atualEndpoint)
    })
  }

  changeCategory(e){
    this.atual.category = this.categoryData.findIndex(i => i.value == e.value)
    this.atual.product = 0
    this.atual.brand = 0
    this.load()
  }

  changeProduct(e){
    this.atual.product = this.productData.findIndex(i => i.value == e.value)
    this.atual.brand = 0
    this.load()
  }

  changeBrand(e){
    this.atual.brand = this.brandData.findIndex(i => i.value == e.value)
    this.load()
  }

  ngOnInit() {
    this.load()
  }

}