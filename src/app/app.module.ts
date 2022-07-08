import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { IdeasViewComponent } from './views/ideas-view/ideas-view.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { GoalChipsComponent } from './components/goal-chips/goal-chips.component';
import { GoalChipComponent } from './components/goal-chip/goal-chip.component';
import { HttpClientModule } from '@angular/common/http';
import { IdeaListComponent } from './components/idea-list/idea-list.component';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import { LeftNavFabComponent } from './components/left-nav-fab/left-nav-fab.component';
import { AddViewComponent } from './views/add-view/add-view.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    IdeasViewComponent,
    ProfilePictureComponent,
    GoalChipsComponent,
    GoalChipComponent,
    IdeaListComponent,
    IdeaCardComponent,
    LeftNavFabComponent,
    AddViewComponent,
    StopPropagationDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
    LayoutModule,
    MatRippleModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
