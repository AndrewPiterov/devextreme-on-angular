import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component' ;
import { HomeComponent } from './components/home/home.component';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { CategoriesComponent } from './components/categories/categories.component';
import { Service } from './components/services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'categories', component: CategoriesComponent },
            { path: '**', redirectTo: 'home' }
    ]),
    DxButtonModule,
    DxDataGridModule
  ],
  providers: [ Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
