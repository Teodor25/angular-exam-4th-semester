import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Material.io 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; 

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { EventsComponent } from './pages/events/events.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ChatComponent } from './pages/chat/chat.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PublicProfileComponent,
    EventsComponent,
    PostsComponent,
    CollectionsComponent,
    ChatComponent,
    VolunteersComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
