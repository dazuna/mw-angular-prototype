import { Routes, RouterModule } from '@angular/router';


// Sin login
import { IndexComponent } from './Index/index.component';
import { PoliticasdeprivacidadComponent } from './usuario-s-l/politicasdeprivacidad/politicasdeprivacidad.component';
import { PreguntasfrecuentesComponent } from './usuario-s-l/preguntasfrecuentes/preguntasfrecuentes.component';
import { QuienessomosComponent } from './usuario-s-l/quienessomos/quienessomos.component';
import { TerminosycondicionesComponent } from './usuario-s-l/terminosycondiciones/terminosycondiciones.component';
import { RUsuarioComponent } from './usuario-s-l/r-usuario/r-usuario.component';
import { REmpresaComponent } from './usuario-s-l/r-empresa/r-empresa.component';

//Empresa
import { CandidatosComponent } from './empresa/candidatos/candidatos.component';
import { FacturacionComponent } from './empresa/facturacion/facturacion.component';
import { IndexEmpComponent } from './empresa/index-emp/index-emp.component';
import { PublicarofertaComponent } from './empresa/publicaroferta/publicaroferta.component';
import { PerfilempresaComponent } from './empresa/perfilempresa/perfilempresa.component';
import { WalletComponent } from './empresa/wallet/wallet.component';
import { EEditarPerfilComponent } from './empresa/e-editar-perfil/e-editar-perfil.component';
import { NoticiasEmpresaComponent } from './empresa/noticias-empresa/noticias-empresa.component';
import { AyudaEmpresaComponent } from './empresa/ayuda-empresa/ayuda-empresa.component';
import { ConfiguracionEmpresaComponent } from './empresa/configuracion-empresa/configuracion-empresa.component';
import { OfertasEmpresaComponent } from './empresa/ofertas-empresa/ofertas-empresa.component';
import { OfertasPrivadasComponent } from './empresa/ofertas-privadas/ofertas-privadas.component';
import { ReporteEmpresaComponent } from './empresa/reporte-empresa/reporte-empresa.component';
import { VisualizarOfertaComponent } from './empresa/visualizar-oferta/visualizar-oferta.component';
import { MenuEmpresaResponsivoComponent } from './empresa/shared/menu-empresa-responsivo/menu-empresa-responsivo.component';

// Usuarios
import { BuscadorComponent } from './Usuarios/shared/buscador/buscador.component';
import { DiversidadInclusionComponent } from './Usuarios/shared/diversidad-inclusion/diversidad-inclusion.component';
import { PloticasPrivacidadComponent } from './Usuarios/shared/ploticas-privacidad/ploticas-privacidad.component';
import { QuienesSomosUserComponent } from './Usuarios/shared/quienes-somos-user/quienes-somos-user.component';
import { TerminosCondicionesUserComponent } from './Usuarios/shared/terminos-condiciones-user/terminos-condiciones-user.component';
import { UsuarioComponent } from './Usuarios/usuario/usuario.component';
import { PerfilUsuarioComponent } from './Usuarios/perfil-usuario/perfil-usuario.component';
import { OfertasGuardadasComponent } from './Usuarios/ofertas-guardadas/ofertas-guardadas.component';
import { OfertasUsuariosComponent } from './Usuarios/ofertas-usuarios/ofertas-usuarios.component';
import { DiversidadeincursionComponent } from './usuario-s-l/diversidadeincursion/diversidadeincursion.component';
import { MisHitchsComponent } from './Usuarios/mis-hitchs/mis-hitchs.component';
import { ContactosComponent } from './Usuarios/contactos/contactos.component';
import { NoticiasComponent } from './Usuarios/noticias/noticias.component';
import { NotificacionesComponent } from './Usuarios/notificaciones/notificaciones.component';
import { EstadisticasempresaComponent } from './empresa/estadisticasempresa/estadisticasempresa.component';
import { EditarPerfilComponent } from './Usuarios/editar-perfil/editar-perfil.component';
import { EstadisticasUsuariosComponent } from './Usuarios/estadisticas-usuarios/estadisticas-usuarios.component';
import { ReporteComponent } from './Usuarios/reporte/reporte.component';
import { AyudaUsuarioComponent } from './Usuarios/ayuda-usuario/ayuda-usuario.component';
import { MenuUsuarioResponsivoComponent } from './Usuarios/menu-usuario-responsivo/menu-usuario-responsivo.component';

const app_routes:Routes =[

  // Sin login
  { path : 'home' , component: IndexComponent },
  { path : 'politicas-de-privacidad' , component: PoliticasdeprivacidadComponent },
  { path : 'preguntas-frecuentes' , component: PreguntasfrecuentesComponent },
  { path : 'quienes-somos' , component: QuienessomosComponent },
  { path : 'terminos-condiciones' , component: TerminosycondicionesComponent },
  { path : 'registro-usuario' , component: RUsuarioComponent },
  { path : 'registro-empresa' , component: REmpresaComponent },

  // Empresas
  { path : 'crear-perfil-empresa' , component: IndexEmpComponent },
  { path : 'candidatos' , component: CandidatosComponent },
  { path : 'facturacion' , component: FacturacionComponent },
  { path : 'publicar-oferta-empresa' , component: PublicarofertaComponent },
  { path : 'perfil-empresa' , component:  PerfilempresaComponent },
  { path : 'wallet' , component:  WalletComponent },
  { path : 'editar-perfil-empresa' , component:  EEditarPerfilComponent },
  { path : 'noticias-empresa' , component: NoticiasEmpresaComponent},
  { path : 'ayuda-empresa' , component: AyudaEmpresaComponent},
  { path : 'administrador-empresa' , component: ConfiguracionEmpresaComponent},
  { path : 'ofertas-empresa' , component: OfertasEmpresaComponent},
  { path : 'ofertas-privadas' , component: OfertasPrivadasComponent},
  { path : 'contactanos-empresa' , component: ReporteEmpresaComponent},
  { path : 'visualizar-oferta' , component: VisualizarOfertaComponent},
  { path : 'menu-empresa-responsivo' , component: MenuEmpresaResponsivoComponent},

  // Usuarios
  { path : 'editar-usuario' , component: UsuarioComponent },
  { path : 'perfil-usuario' , component: PerfilUsuarioComponent },
  { path : 'ofertas-guardadas' , component: OfertasGuardadasComponent },
  { path : 'ofertas-trabajo' , component: OfertasUsuariosComponent },
  { path : 'diversidad-e-incursion' , component: DiversidadeincursionComponent },
  { path : 'mis-hitchs' , component:  MisHitchsComponent },
  { path : 'contactos' , component:  ContactosComponent },
  { path : 'noticias' , component:  NoticiasComponent },
  { path : 'notificaciones' , component:  NotificacionesComponent },
  { path : 'buscador' , component:  BuscadorComponent },
  { path : 'estadisticas-empresa' , component:  EstadisticasempresaComponent },
  { path : 'editar-perfil' , component:  EditarPerfilComponent },
  { path : 'estadisticas-usuarios' , component:  EstadisticasUsuariosComponent },
  { path : 'contactanos' , component: ReporteComponent },
  { path : 'preguntas-frecuentes-usuario' , component: AyudaUsuarioComponent},
  { path : 'diversidad-inclusion' , component: DiversidadInclusionComponent },
  { path : 'politicas-privacidad-u' , component: PloticasPrivacidadComponent },
  { path : 'quienes-somos-u' , component: QuienesSomosUserComponent },
  { path : 'terminos-condiciones-u' , component: TerminosCondicionesUserComponent },
  { path : 'menu-responsivo' , component: MenuUsuarioResponsivoComponent },

  { path : '**' , pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
