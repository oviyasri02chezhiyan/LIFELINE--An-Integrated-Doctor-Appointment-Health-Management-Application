import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface BookingDetails {
  name: string;
  age: number;
  doctor: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  patientName = '';
  patientAge: number | null = null;

  bookedDetails: BookingDetails | null = null;
  private bookingCount = 0;

  confirmBooking() {

    if (!this.patientName || !this.patientAge) {
      alert('Kindly fill the details!');
      return;
    }

    const baseHour = 9;
    const intervalMinutes = 15;

    const totalMinutes = this.bookingCount * intervalMinutes;
    const hour = baseHour + Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const formattedTime =
      `${hour}:${minutes.toString().padStart(2, '0')} AM`;

    this.bookedDetails = {
      name: this.patientName,
      age: this.patientAge,
      doctor: 'Dr. Rahul (General Physician)',
      time: formattedTime,
      status: 'Confirmed ✅'
    };

    this.bookingCount++;
  }

  resetForm() {
    this.patientName = '';
    this.patientAge = null;
    this.bookedDetails = null;
  }

}