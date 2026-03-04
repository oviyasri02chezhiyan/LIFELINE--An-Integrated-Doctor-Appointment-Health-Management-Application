import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Doctor {
  name: string;
  dept: string;
  phone: string;
}

@Component({
  selector: 'app-emergency',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './emergencybutton.component.html',
  styleUrls: ['./emergencybutton.component.css']
})
export class EmergencybuttonComponent {

  isAlertActive = signal(false);
  assignedDoctor = signal<Doctor | null>(null);

  emergencyDoctors: Doctor[] = [
    { name: 'Dr. Vikram', dept: 'Trauma Care', phone: '9876543210' },
    { name: 'Dr. Sarah', dept: 'Critical Care', phone: '9876501234' },
    { name: 'Dr. Mani', dept: 'Cardiology', phone: '9000011122' }
  ];

  triggerEmergency() {
    this.isAlertActive.set(true);

    
    setTimeout(() => {
      const index = Math.floor(Math.random() * this.emergencyDoctors.length);
      this.assignedDoctor.set(this.emergencyDoctors[index]);
    }, 2000);
  }

  cancelEmergency() {
    this.isAlertActive.set(false);
    this.assignedDoctor.set(null);
  }
}