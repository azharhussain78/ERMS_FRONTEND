import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-today-check-in-and-checkout',
  standalone: true,
  imports: [MatCardModule,MatCardModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule],
  templateUrl: './today-check-in-and-checkout.component.html',
  styleUrl: './today-check-in-and-checkout.component.css'
})
export class  CheckInCheckOutElement{
  date:any;
  constructor(){
    this.date = new Date();
}
}
