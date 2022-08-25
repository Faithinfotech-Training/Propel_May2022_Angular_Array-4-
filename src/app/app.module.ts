import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsterMimsComponent } from './aster-mims/aster-mims.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { AuthenticationGuard } from './shared/authentication.guard';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';

@NgModule({
  declarations: [
    AppComponent,
    AsterMimsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }

    )
  ],
  providers: [/*AuthenticationGuard*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
