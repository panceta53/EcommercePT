import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoriasPipe } from './pipes/categorias.pipe';
import { ImagenPipe } from './pipes/imagen.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarritoComponent,
    CategoriasPipe,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
