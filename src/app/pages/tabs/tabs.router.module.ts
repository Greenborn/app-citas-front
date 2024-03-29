import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chats',
        children: [
          {
            path: '',
            loadChildren: () => import('../chats/chats.module').then(m => m.ChatsPageModule)
          }
        ]
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: 'user-description',
        children: [
          {
            path: '',
            loadChildren: () => import('../user-description/user-description.module').then(m => m.UserDescriptionPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'chats',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
