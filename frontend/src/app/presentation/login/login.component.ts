import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    PanelModule

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }



}
