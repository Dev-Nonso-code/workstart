import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {

}
