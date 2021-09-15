import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  onClickTab1(){
    console.log("tabButton1")
    var tabButton1 = document.getElementById('tab-button-fab');
    var tabButton2 = document.getElementById('tab-button-cards');
    var tabButton3 = document.getElementById('tab-button-infinite');
    tabButton1.classList.add('tab-active');
    tabButton2.classList.remove('tab-active');
    tabButton3.classList.remove('tab-active');
  }

  onClickTab2(){
    console.log("tabButton1")
    var tabButton1 = document.getElementById('tab-button-fab');
    var tabButton2 = document.getElementById('tab-button-cards');
    var tabButton3 = document.getElementById('tab-button-infinite');
    tabButton1.classList.remove('tab-active');
    tabButton2.classList.add('tab-active');
    tabButton3.classList.remove('tab-active');
  }

  onClickTab3(){
    console.log("tabButton1")
    var tabButton1 = document.getElementById('tab-button-fab');
    var tabButton2 = document.getElementById('tab-button-cards');
    var tabButton3 = document.getElementById('tab-button-infinite');
    tabButton1.classList.remove('tab-active');
    tabButton2.classList.remove('tab-active');
    tabButton3.classList.add('tab-active');
  }

}
