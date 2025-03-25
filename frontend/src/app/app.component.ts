import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './presentation/home/home.component';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./presentation/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    HomeComponent,
    ButtonModule,
    ToolbarModule,
    CommonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PostApp';
  currentView : string = 'home';


  changeView(view: string){
    this.currentView = view;
  }
}
