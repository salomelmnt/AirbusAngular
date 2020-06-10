import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { CreateComponent } from './pages/create/create.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { UpdateComponent } from './pages/update/update.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/consult/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'consult', component: ConsultComponent },
  { path: 'consult/{id}', component: DetailsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'update', component: UpdateComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ConsultComponent,
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
