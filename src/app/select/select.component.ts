import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
  
  @Input() title: String;
  @Input() options: Object;
  @Input() atual;
  @Output() changeSel = new EventEmitter();

  counter = 0

  constructor() { }
  
  getValue(){
    return this.options[this.atual].value;
  }

  isAtual(){
    if(this.counter > this.atual)
      this.counter++;
    else if(this.counter == this.atual)
      return true
    return false
  }

  callChange(e){
    this.changeSel.emit({"value": e.value });
  }

  ngOnInit() {
    console.log(this.options)
  }

}