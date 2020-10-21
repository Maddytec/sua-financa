import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
