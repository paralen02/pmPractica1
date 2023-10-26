import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisoryComponent } from './components/advisory/advisory.component';
import { CreaeditaAdvisoryComponent } from './components/advisory/creaedita-advisory/creaedita-advisory.component';

const routes: Routes = [
  {
    path: 'advisory', component: AdvisoryComponent, children: [
      { path: 'nuevo', component: CreaeditaAdvisoryComponent },
      { path: 'ediciones/:id', component:CreaeditaAdvisoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
