import { RouterModule, Routes } from '@angular/router';
import { ContinentListComponent } from './continent/continent-list/continent-list.component';
import { ContinentFormComponent } from './continent/continent-form/continent-form.component';

export const routes: Routes = [
    { 
        path: '',
        component: ContinentListComponent,
    },
    { 
        path: 'add',
        component: ContinentFormComponent,
    },
    { 
        path: 'edit/:id',
        component: ContinentFormComponent,
    },
];
