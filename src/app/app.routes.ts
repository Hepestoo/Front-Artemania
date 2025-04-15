// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: '' } // fallback
];
