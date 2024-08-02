import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private shared: SharedService){}

  ngOnInit(): void {


  }

}