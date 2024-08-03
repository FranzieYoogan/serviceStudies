import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private shared: SharedService){}

  data:any
  ngOnInit(): void {

    this.shared.getData().subscribe(config => {

      console.log(config)
      this.data = config

    });

  }

}