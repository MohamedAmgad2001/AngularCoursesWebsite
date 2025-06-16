import { Component, inject } from '@angular/core';
import { AiServService } from '../../services/ai-serv.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css'
})
export class AiComponent {

prompt: string = '';
  response: string = '';
  loading: boolean = false;

  constructor(private geminiService: AiServService) {}

  async sendPrompt() {
    if (!this.prompt.trim()) return;
    this.loading = true;
    try {
      const special = `As a course manager, please answer this question: ${this.prompt} only answer any thing related to web courses`
      this.response = await this.geminiService.generateText(special);
    } catch (error) {
      console.error('Error generating text:', error);
      this.response = 'Error generating response.';
    } finally {
      this.loading = false;
    }
  }

  clear() {
    this.prompt = '';
    this.response = '';
    this.geminiService.resetChat();
  }








// constructor(){}

//   prompt: string = '';
//   messages: { from: 'user' | 'ai', text: string }[] = [
//     { from: 'ai', text: 'Hello! How can I assist you today?' }
//   ];

//   geminiService: AiServService = inject(AiServService);

//   async sendData() {
//     const userInput = this.prompt.trim();
//     if (!userInput) return;

//     this.messages.push({ from: 'user', text: userInput });
//     this.prompt = '';

//     const aiResponse = await this.geminiService.generateText(userInput);
//     this.messages.push({ from: 'ai', text: aiResponse});
// }



}
