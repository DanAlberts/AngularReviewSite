import { Component, OnInit } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.scss']
})
export class PostingsComponent implements OnInit {
  job: Job = {
    id: 1,
    title: 'Front End Developer',
    company: 'Kronos',
    level: 'Entry - Associate',
    description: 'Very nice company and former employees vouched for its wonderful working atmosphere. The recruiter Dan was very friendly and asked normal phone screen questions. He mentioned that this job would be working primarily in Angular, hence my effort to build this app to re-familiarize myself in preparation for a potential next interview.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
