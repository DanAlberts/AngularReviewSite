import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.scss']
})
export class PostingsComponent implements OnInit {
  job = 'Front End Developer'
  constructor() { }

  ngOnInit(): void {
  }

}
