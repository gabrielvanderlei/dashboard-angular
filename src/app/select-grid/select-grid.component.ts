import { Component, OnInit } from '@angular/core';
import { OptionsService } from '../options.service';

@Component({
  selector: 'app-select-grid',
  templateUrl: './select-grid.component.html',
  styleUrls: ['./select-grid.component.css']
})
export class SelectGridComponent implements OnInit {
  constructor(private _options: OptionsService) {}

  ngOnInit() {
    this._options.getOptions().subscribe(res => {
      console.log(res)
    })
  }

}