import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CheckInCheckOutElement } from '../today-check-in-and-checkout/today-check-in-and-checkout.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule,MatCardModule,CheckInCheckOutElement],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
