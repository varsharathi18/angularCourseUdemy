import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counts = [];
  showLine = false;
  onDisplay(){
    this.showLine = !this.showLine;
    this.counts.push(this.counts.length + 1);
    // this.counts.push(new Date());
  }
}
