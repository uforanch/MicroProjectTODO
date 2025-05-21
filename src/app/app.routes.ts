import { Routes } from '@angular/router';
import { ManageComponent} from './components/manage/manage.component';
import { DeleteComponent } from './components/delete/delete.component';
export const routes: Routes = [
{path:"manage", component:ManageComponent},
{path:"delete", component:DeleteComponent}
];
