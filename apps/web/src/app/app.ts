import { Component } from '@angular/core';
import { MainLayout } from '@gestyx/shared-ui';
import { APP_MENU } from './app-menu';
import { AppTopbar } from './app-topbar/app-topbar';


@Component({
  imports: [MainLayout, AppTopbar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly menu = APP_MENU;
}