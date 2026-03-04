import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Reminder {
  id: number;
  patientName: string;
  medicineName: string;
  time: string;
}

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent {

  // Form state
  patientName = signal('');
  medicineName = signal('');
  reminderTime = signal('');

  // Active reminders list
  reminders = signal<Reminder[]>([]);

  addReminder() {

    if (
      !this.patientName().trim() ||
      !this.medicineName().trim() ||
      !this.reminderTime()
    ) {
      alert('Please fill all details');
      return;
    }

    const reminder: Reminder = {
      id: Date.now(),
      patientName: this.patientName().trim(),
      medicineName: this.medicineName().trim(),
      time: this.reminderTime()
    };

    this.reminders.update(list => [...list, reminder]);

    this.scheduleReminder(reminder);
    this.clearForm();
  }

  deleteReminder(id: number) {
    this.reminders.update(list =>
      list.filter(item => item.id !== id)
    );
  }

  private scheduleReminder(reminder: Reminder) {

    const [hours, minutes] = reminder.time.split(':').map(Number);

    const now = new Date();
    const target = new Date();
    target.setHours(hours, minutes, 0, 0);

    // If selected time already passed, schedule for next day
    if (target <= now) {
      target.setDate(target.getDate() + 1);
    }

    const delay = target.getTime() - now.getTime();

    setTimeout(() => {
      alert(`⏰ Reminder: ${reminder.patientName}, take ${reminder.medicineName}`);

      this.reminders.update(list =>
        list.filter(item => item.id !== reminder.id)
      );
    }, delay);
  }

  private clearForm() {
    this.patientName.set('');
    this.medicineName.set('');
    this.reminderTime.set('');
  }
}