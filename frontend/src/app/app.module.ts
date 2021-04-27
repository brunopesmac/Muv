import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreinosComponent } from './treinos/treinos.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContatoComponent } from './contato/contato.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { SidebarModule } from 'ng-sidebar';
import {MatCardModule} from '@angular/material/card';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { FlipCardComponent } from './treinos/flip-card/flip-card.component';
import { FlipCardFrontComponent } from './treinos/flip-card/flip-card-front';
import { FlipCardBackComponent} from './treinos/flip-card/flip-card-back';
import { DetalheExercicioComponent } from './exercicios/detalhe-exercicio/detalhe-exercicio.component';
/* import { FormsModule } from '@angular/forms'; */
import { ReactiveFormsModule } from '@angular/forms'

import { ExercicioService } from './exercicios/exercicio.service';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    TreinosComponent,
    WorkspaceComponent,
    CalculadoraComponent,
    ContatoComponent,
    ExerciciosComponent,
    DetalheExercicioComponent,
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    SidebarModule.forRoot(),
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbModule,
  ],
  providers: [ExercicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
