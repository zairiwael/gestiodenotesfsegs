import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GestiondeNoteFsegsSharedModule } from 'app/shared/shared.module';
import { GestiondeNoteFsegsCoreModule } from 'app/core/core.module';
import { GestiondeNoteFsegsAppRoutingModule } from './app-routing.module';
import { GestiondeNoteFsegsHomeModule } from './home/home.module';
import { GestiondeNoteFsegsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GestiondeNoteFsegsSharedModule,
    GestiondeNoteFsegsCoreModule,
    GestiondeNoteFsegsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GestiondeNoteFsegsEntityModule,
    GestiondeNoteFsegsAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class GestiondeNoteFsegsAppModule {}
