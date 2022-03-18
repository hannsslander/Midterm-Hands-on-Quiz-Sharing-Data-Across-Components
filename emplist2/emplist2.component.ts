import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  empFetch!: any[];

  constructor( private serviceservice: ServiceService) { }

  ngOnInit(): void {
    this.empFetch = this.serviceservice.empList();
  }
}