import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { RootRoutingModule } from './app-routing.module';
import { LoggerService } from './core/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AddReaderComponent,
    AddBookComponent,
    EditBookComponent,
    EditReaderComponent
  ],
  imports: [
    BrowserModule,
    RootRoutingModule
  ],
  providers: [{provide:LoggerService , useClass:LoggerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
