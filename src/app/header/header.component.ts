import { Component, OnInit } from '@angular/core';
import { LoadService } from "../load.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loading = 'none';
  constructor(private load: LoadService) { }

  ngOnInit() {
    this.load.currentState.subscribe(state => this.loading = state)
  }

  verifyLoadState(){
    console.log("ok")
  }

}