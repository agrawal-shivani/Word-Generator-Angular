import { Component } from '@angular/core';
import arrayWords from '../utility/words' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;
  handleSliderChange(newLimit: number): void {
    this.limit = newLimit;
  }
  generator(): void {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}
