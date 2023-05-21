import { Component, OnInit } from '@angular/core';
import { Etheme } from './enums/ETheme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = Etheme.ICON_ESCURO;
  public textTheme: string = Etheme.TEXT_ESCURO;
  constructor() { }
  ngOnInit(): void {

  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = Etheme.TEXT_CLARO;
      return (this.icon = Etheme.ICON_CLARO);
    }
    this.textTheme = Etheme.TEXT_ESCURO;
    return (this.icon = Etheme.ICON_ESCURO);
  }
}
