import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'todo-list';

  snowflakes: Array<{
    left: number;
    size: number;
    fallDuration: number;
    swayDuration: number;
    delay: number;
  }> = [];

  ngOnInit() {
    this.generateSnowflakes(20);
  }

  generateSnowflakes(count: number) {
    this.snowflakes = [];
      for (let i = 0; i < count; i++) {
        const fallDuration = 10 + Math.random() * 20;
        this.snowflakes.push({
          left: Math.random() * 100,
          size: 14 + Math.random() * 10,
          fallDuration,
          delay: -Math.random() * fallDuration,
          swayDuration: 0
        });
      }
  }
}
