import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import{MatNativeDateModule} from '@angular/material/core'
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatMenuModule } from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AdvisoryComponent } from './components/advisory/advisory.component';
import { ListarAdvisoryComponent } from './components/advisory/listar-advisory/listar-advisory.component';
import { CreaeditaAdvisoryComponent } from './components/advisory/creaedita-advisory/creaedita-advisory.component';


@NgModule({
  declarations: [
    AppComponent,
    AdvisoryComponent,
    CreaeditaAdvisoryComponent,
    ListarAdvisoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
