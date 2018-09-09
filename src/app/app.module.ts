import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './employees/components/add/add.component';
import { EditComponent } from './employees/components/edit/edit.component';
import { ListComponent } from './employees/components/list/list.component';
import { ViewComponent } from './employees/components/view/view.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:ListComponent
      },{
        path:'list',
        component:ListComponent
      },
      {
        path:'add',
        component:AddComponent
      },{
        path:'edit/:id',
        component:EditComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
