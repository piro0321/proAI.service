import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadDataComponent } from './components/upload-data/upload-data.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'datalist', component: DatalistComponent},
  { path: 'upload-data', component: UploadDataComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  
];

// canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
