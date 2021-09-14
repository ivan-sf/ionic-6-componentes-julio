import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  items:any[] = Array(20);
  @ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;
  constructor() { }

  ngOnInit() {
  }

  loadData(){
    // console.log(event)
    if(this.items.length>50){
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    const nuevoArray = Array(20);
    this.items.push(...nuevoArray);
    this.infiniteScroll.complete()
    // event.target.complete();
  }

}
