import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AiCheckerComponent } from './components/ai-checker/ai-checker.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { EmergencybuttonComponent } from './components/emergencybutton/emergencybutton.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'ai-checker',
    component: AiCheckerComponent
  },
  {
    path: 'reminders',
    component: RemindersComponent
  },
  {
    path: 'prescription',
    component: PrescriptionComponent
  },
  {
    path: 'emergency',
    component: EmergencybuttonComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

export type { Routes };
