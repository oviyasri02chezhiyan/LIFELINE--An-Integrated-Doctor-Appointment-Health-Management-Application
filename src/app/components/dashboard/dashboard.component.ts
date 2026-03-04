import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  name: string;
  icon: string;
  link: string;
  color: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  readonly services: ServiceItem[] = [
    { name: 'AI Symptoms Checker', icon: '🤖', link: '/ai-checker', color: '#43e97b' },
    { name: 'Doctor Booking', icon: '👨‍⚕️', link: '/appointment', color: '#4facfe' },
    { name: 'Digital Prescription', icon: '📄', link: '/prescription', color: '#f093fb' },
    { name: 'Emergency Quick Button', icon: '🚨', link: '/emergency', color: '#fa709a' },
    { name: 'Health Reminder', icon: '⏰', link: '/reminders', color: '#f6d365' }
  ];

}