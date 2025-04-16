// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './pages/cliente/inicio/inicio.component';
import { CatalogoComponent } from './pages/cliente/catalogo/catalogo.component';
import { SobreNosotrosComponent } from './pages/cliente/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/cliente/contacto/contacto.component';
import { CarritoComponent } from './pages/cliente/carrito/carrito.component';
import { LoginComponent } from './pages/cliente/auth/login/login.component';
import { RegistroComponent } from './pages/cliente/auth/registro/registro.component';
import { ProductoDetalleComponent } from './pages/cliente/producto-detalle/producto-detalle.component';

export const routes: Routes = [
  // Cliente
  { path: '', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },

  // Admin (con guardia opcional)
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.routes').then((m) => m.adminRoutes)
  },

  // 404
  { path: '**', redirectTo: '' }
];
