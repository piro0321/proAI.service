import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestpipePipe } from './pipe/testpipe.pipe';
import { UploadDataComponent } from './components/upload-data/upload-data.component';
// import { NgBusyModule } from 'ng-busy';
import { MatSortModule } from '@angular/material/sort'; //ソート用
import { AuthGuard } from './guard/auth.guard';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { DatalistComponent } from './components/datalist/datalist.component';
// import { FormsModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TestpipePipe,
    HomeComponent,
    UploadDataComponent,
    HeaderComponent,
    DatalistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgBusyModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeJa, 'ja-JP');