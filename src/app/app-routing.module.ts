import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineAll } from 'rxjs/operators';
import { ChatComponent } from './pages/chat/chat.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventsComponent } from './pages/events/events.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'publicProfile', component: PublicProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'volunteers', component: VolunteersComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
