import { RouterModule, Routes } from '@angular/router';
import { ContinentListComponent } from './continent/continent-list/continent-list.component';
import { ContinentFormComponent } from './continent/continent-form/continent-form.component';

export const routes: Routes = [
    { 
        path: '',
        component: ContinentListComponent,
        title: 'Continent List'
    },
    { 
        path: 'add',
        component: ContinentFormComponent,
        title: 'Add A New Continent'
    },
    { 
        path: 'edit/:id',
        component: ContinentFormComponent,
        title: 'Update An Existant Continent'
    },
];
