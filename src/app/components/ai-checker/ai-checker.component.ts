import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Suggestion {
  doctor: string;
  message: string;
}

@Component({
  selector: 'app-ai-checker',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './ai-checker.component.html',
  styleUrls: ['./ai-checker.component.css']
})
export class AiCheckerComponent {

  userInput = signal('');
  suggestion = signal<Suggestion | null>(null);

  private knowledgeBase: Record<string, Suggestion> = {
    fever: { doctor: 'General Physician', message: 'Take rest and drink more water.' },
    cough: { doctor: 'General Physician', message: 'Wear mask and stay away from others.' },
    skin: { doctor: 'Dermatologist', message: 'May be a skin allergy. Avoid scratching.' },
    heart: { doctor: 'Cardiologist', message: 'Consult immediately if you have chest pain.' },
    tooth: { doctor: 'Dentist', message: 'Teeth pain or gum swelling – visit dentist.' },
    headache: { doctor: 'Neurologist', message: 'Continuous headache? Consult neurologist.' }
  };

  checkSymptoms() {
    const input = this.userInput().toLowerCase().trim();

    const match = Object.keys(this.knowledgeBase)
      .find(key => input.includes(key));

    if (match) {
      this.suggestion.set(this.knowledgeBase[match]);
    } else {
      this.suggestion.set({
        doctor: 'General Physician',
        message: 'No worries. Please consult a doctor for proper diagnosis.'
      });
    }
  }

  clear() {
    this.userInput.set('');
    this.suggestion.set(null);
  }

}