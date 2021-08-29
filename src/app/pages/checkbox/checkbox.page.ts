import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  data = [
    {
      name:'Primary',
      status:false,
    },
    {
      name:'Second',
      status:false,
    },
    {
      name:'Finish',
      status:true,
    }
  ]

  onClick(item:any){
    console.log(item)
  }

  verInfo(){
    console.log(this.data)
  }
}
