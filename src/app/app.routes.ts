import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GuideRightJobComponent } from './guide-right-job/guide-right-job.component';
import { GuideRightPersonComponent } from './guide-right-person/guide-right-person.component';
import { SignInRightJobComponent } from './sign-in-right-job/sign-in-right-job.component';
import { SignInRightPersonComponent } from './sign-in-right-person/sign-in-right-person.component';
import { SignUpRightJobComponent } from './sign-up-right-job/sign-up-right-job.component';
import { SignUpRightPersonComponent } from './sign-up-right-person/sign-up-right-person.component';
import { RightJobHomeComponent } from './right-job-home/right-job-home.component';
import { RightPersonHomeComponent } from './right-person-home/right-person-home.component';

export const routes: Routes = [  { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomePageComponent },
{ path: 'guide/RightJob', component: GuideRightJobComponent },
{ path: 'guide/RightPerson', component: GuideRightPersonComponent },
{ path: 'Sign_In/RightJob', component: SignInRightJobComponent },
{ path: 'Sign_In/RightPerson', component: SignInRightPersonComponent },
{ path: 'Sign_Up/RightJob', component: SignUpRightJobComponent },
{ path: 'Sign_Up/RightPerson', component: SignUpRightPersonComponent },
{ path: 'Home-RightJob', component: RightJobHomeComponent },
{ path: 'Home-RightPerson', component: RightPersonHomeComponent },
];
