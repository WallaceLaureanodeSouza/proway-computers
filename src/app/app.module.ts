import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import { ReactiveFormsModule } from '@angular/forms';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent,
    SegundaPaginaComponent,
    PaginaNaoEncontradaComponent,
    PaginaComParametrosComponent,
    PaginaProtegidaComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent,
    BarraPesquisaComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
