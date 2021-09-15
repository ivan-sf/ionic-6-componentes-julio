import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsPageModule } from '../cards/cards.module';
import { FabPageModule } from '../fab/fab.module';
import { InfiniteScrollPageModule } from '../infinite-scroll/infinite-scroll.module';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'cards',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabPage,
    children:[
      {
        path:'cards',
        loadChildren:()=>import('../cards/cards.module').then(m=>CardsPageModule)
      },
      {
        path:'fab',
        loadChildren:()=>import('../fab/fab.module').then(m=>FabPageModule)
      },
      {
        path:'infinite',
        loadChildren:()=>import('../infinite-scroll/infinite-scroll.module').then(m=>InfiniteScrollPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
