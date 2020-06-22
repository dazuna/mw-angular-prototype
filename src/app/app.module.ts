import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {
  ReactiveFormsModule,
  FormsModule,
  // FormControl,
  // Validators
        } from '@angular/forms';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ShareModule } from '@ngx-share/core';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { Ng2OdometerModule } from 'ng2-odometer';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NgxCroppieModule } from 'ngx-croppie';
import { CroppieModule } from 'angular-croppie-module';

//rutas
import { HttpModule } from "@angular/http";
import { APP_ROUTING } from './app.routes';

//modulos
import { AppComponent } from './app.component';
import { IndexComponent } from './Index/index.component';
import { UEditarPerfilComponent } from './Usuarios/u-editar-perfil/u-editar-perfil.component';

import { UsuarioComponent } from './Usuarios/usuario/usuario.component';
import { FooterComponent } from './Usuarios/shared/footer/footer.component';
import { HeaderComponent } from './Usuarios/shared/header/header.component';
import { TarjetasComponent } from './Usuarios/shared/tarjetas/tarjetas.component';
import { FooterEmpComponent } from './empresa/shared/footer-emp/footer-emp.component';
import { HeaderEmpComponent } from './empresa/shared/header-emp/header-emp.component';
import { TarjetasEmpComponent } from './empresa/shared/tarjetas-emp/tarjetas-emp.component';
import { IndexEmpComponent } from './empresa/index-emp/index-emp.component';
import { HeaderSLComponent } from './usuario-s-l/shared/header-s-l/header-s-l.component';
import { TerminosycondicionesComponent } from './usuario-s-l/terminosycondiciones/terminosycondiciones.component';
import { PoliticasdeprivacidadComponent } from './usuario-s-l/politicasdeprivacidad/politicasdeprivacidad.component';
import { QuienessomosComponent } from './usuario-s-l/quienessomos/quienessomos.component';
import { PreguntasfrecuentesComponent } from './usuario-s-l/preguntasfrecuentes/preguntasfrecuentes.component';
import { IndexSLComponent } from './usuario-s-l/index-s-l/index-s-l.component';
import { PerfilUsuarioComponent } from './Usuarios/perfil-usuario/perfil-usuario.component';
import { FooterSLComponent } from './usuario-s-l/shared/footer-s-l/footer-s-l.component';
import { OfertasGuardadasComponent } from './Usuarios/ofertas-guardadas/ofertas-guardadas.component';
import { OfertasUsuariosComponent } from './Usuarios/ofertas-usuarios/ofertas-usuarios.component';
import { DiversidadeincursionComponent } from './usuario-s-l/diversidadeincursion/diversidadeincursion.component';
import { PublicarofertaComponent } from './empresa/publicaroferta/publicaroferta.component';
import { MisHitchsComponent } from './Usuarios/mis-hitchs/mis-hitchs.component';
import { ContactosComponent } from './Usuarios/contactos/contactos.component';
import { NoticiasComponent } from './Usuarios/noticias/noticias.component';
import { NotificacionesComponent } from './Usuarios/notificaciones/notificaciones.component';
import { PerfilempresaComponent } from './empresa/perfilempresa/perfilempresa.component';
import { BuscadorComponent } from './Usuarios/shared/buscador/buscador.component';
import { WalletComponent } from './empresa/wallet/wallet.component';
import { EstadisticasempresaComponent } from './empresa/estadisticasempresa/estadisticasempresa.component';
import { EditarPerfilComponent } from './Usuarios/editar-perfil/editar-perfil.component';
import { EstadisticasUsuariosComponent } from './Usuarios/estadisticas-usuarios/estadisticas-usuarios.component';
import { EEditarPerfilComponent } from './empresa/e-editar-perfil/e-editar-perfil.component';
import { ReporteComponent } from './Usuarios/reporte/reporte.component';
import { AyudaUsuarioComponent } from './Usuarios/ayuda-usuario/ayuda-usuario.component';
import { NoticiasEmpresaComponent } from './empresa/noticias-empresa/noticias-empresa.component';
import { AyudaEmpresaComponent } from './empresa/ayuda-empresa/ayuda-empresa.component';
import { ConfiguracionEmpresaComponent } from './empresa/configuracion-empresa/configuracion-empresa.component';
import { ReporteEmpresaComponent } from './empresa/reporte-empresa/reporte-empresa.component';
import { OfertasEmpresaComponent } from './empresa/ofertas-empresa/ofertas-empresa.component';
import { DiversidadInclusionComponent } from './Usuarios/shared/diversidad-inclusion/diversidad-inclusion.component';
import { PloticasPrivacidadComponent } from './Usuarios/shared/ploticas-privacidad/ploticas-privacidad.component';
import { TerminosCondicionesUserComponent } from './Usuarios/shared/terminos-condiciones-user/terminos-condiciones-user.component';
import { QuienesSomosUserComponent } from './Usuarios/shared/quienes-somos-user/quienes-somos-user.component';
import { VisualizarOfertaComponent } from './empresa/visualizar-oferta/visualizar-oferta.component';
import { RUsuarioComponent } from './usuario-s-l/r-usuario/r-usuario.component';
import { REmpresaComponent } from './usuario-s-l/r-empresa/r-empresa.component';

// material Angular
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
} from '@angular/material';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { IdiomaComponent } from './idioma/idioma.component';
import { MenuUsuarioResponsivoComponent } from './Usuarios/menu-usuario-responsivo/menu-usuario-responsivo.component';
import { MenuEmpresaResponsivoComponent } from './empresa/shared/menu-empresa-responsivo/menu-empresa-responsivo.component';
import { CandidatosComponent } from './empresa/candidatos/candidatos.component';
import { FacturacionComponent } from './empresa/facturacion/facturacion.component';
import { OfertasPrivadasComponent } from './empresa/ofertas-privadas/ofertas-privadas.component';
import { RedesSocialesComponent } from './usuario-s-l/redes-sociales/redes-sociales.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UEditarPerfilComponent,
    UsuarioComponent,
    FooterComponent,
    HeaderComponent,
    TarjetasComponent,
    FooterEmpComponent,
    HeaderEmpComponent,
    TarjetasEmpComponent,
    IndexEmpComponent,
    HeaderSLComponent,
    TerminosycondicionesComponent,
    PoliticasdeprivacidadComponent,
    QuienessomosComponent,
    PreguntasfrecuentesComponent,
    IndexSLComponent,
    PerfilUsuarioComponent,
    FooterSLComponent,
    OfertasGuardadasComponent,
    OfertasUsuariosComponent,
    DiversidadeincursionComponent,
    PublicarofertaComponent,
    MisHitchsComponent,
    ContactosComponent,
    NoticiasComponent,
    NotificacionesComponent,
    PerfilempresaComponent,
    BuscadorComponent,
    WalletComponent,
    EstadisticasempresaComponent,
    EditarPerfilComponent,
    EstadisticasUsuariosComponent,
    EEditarPerfilComponent,
    ReporteComponent,
    AyudaUsuarioComponent,
    NoticiasEmpresaComponent,
    AyudaEmpresaComponent,
    ConfiguracionEmpresaComponent,
    ReporteEmpresaComponent,
    OfertasEmpresaComponent,
    DiversidadInclusionComponent,
    PloticasPrivacidadComponent,
    TerminosCondicionesUserComponent,
    QuienesSomosUserComponent,
    VisualizarOfertaComponent,
    RUsuarioComponent,
    REmpresaComponent,
    IdiomaComponent,
    MenuUsuarioResponsivoComponent,
    MenuEmpresaResponsivoComponent,
    CandidatosComponent,
    FacturacionComponent,
    OfertasPrivadasComponent,
    RedesSocialesComponent,
  ],

  imports: [
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    CroppieModule,
    NgxCroppieModule,
    AngularFontAwesomeModule,
    MatChipsModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    ChartsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatRadioModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    APP_ROUTING,
    Ng2OdometerModule.forRoot(),
       TranslateModule.forRoot({
           loader: {
               provide: TranslateLoader,
               useFactory: (createTranslateLoader),
               deps: [HttpClient]
           }
       })
    ],

    exports: [
      FormsModule,
      MatFormFieldModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
