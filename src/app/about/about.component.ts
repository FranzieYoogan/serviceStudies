import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  constructor(private shared: SharedService){}

  data:any
  api:any
  ngOnInit(): void {
    this.shared.getData().subscribe(
      response => {
        this.data = response;
        console.log(this.data); // Verify the data structure here
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
