import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Prescription {
  id: string;
  date: string;
  patientName: string;
  age: number | null;
  diagnosis: string;
  medicines: string[];
  doctor: string;
}

@Component({
  selector: 'app-prescription',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {

  // Form state
  patientName = signal('');
  age = signal<number | null>(null);
  diagnosis = signal('');
  medicinesInput = signal('');

  // Generated prescription
  prescriptionData = signal<Prescription | null>(null);

  generatePrescription() {

    if (!this.patientName().trim() || !this.medicinesInput().trim()) {
      alert('Please fill Patient Name and Medicines');
      return;
    }

    const prescription: Prescription = {
      id: `PRE-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString(),
      patientName: this.patientName(),
      age: this.age(),
      diagnosis: this.diagnosis(),
      medicines: this.medicinesInput()
        .split(',')
        .map(med => med.trim()),
      doctor: 'Dr. Rahul, MBBS (General Physician)'
    };

    this.prescriptionData.set(prescription);
  }

  printPrescription() {
    window.print();
  }

  resetForm() {
    this.prescriptionData.set(null);
    this.patientName.set('');
    this.age.set(null);
    this.diagnosis.set('');
    this.medicinesInput.set('');
  }
}