import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ItemAppComponent } from './components/cont-apps/item-app/item-app.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'herramientas', component: ToolsComponent},
    { path: 'proyectos', component: ProjectsComponent},
    { path: 'cursos', component: CoursesComponent},
    { path: ':secction/:name-section', component: ItemAppComponent},
];
