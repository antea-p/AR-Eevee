import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArSceneComponent } from './ar-scene/ar-scene.component';

const routes: Routes = [
  { path: '', component: ArSceneComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
