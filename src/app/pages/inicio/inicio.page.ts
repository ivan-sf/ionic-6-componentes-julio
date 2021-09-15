import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[]=[
    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alerts',
      redirectTo:'/alert'
    },
    {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name:'Buttons',
      redirectTo:'/buttons'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/cards'
    },
    {
      icon:'checkmark-circle-outline',
      name:'Checkbox',
      redirectTo:'/checkbox'
    },
    {
      icon:'calendar-outline',
      name:'Date-time',
      redirectTo:'/datetime'
    },
    {
      icon:'airplane-outline',
      name:'Fab',
      redirectTo:'/fab'
    },
    {
      icon:'grid-outline',
      name:'Grid',
      redirectTo:'/grid'
    },
    {
      icon:'infinite-outline',
      name:'Infinite Scroll',
      redirectTo:'/infinite-scroll'
    },
    {
      icon:'cog-outline',
      name:'Tabs',
      redirectTo:'/tab'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
