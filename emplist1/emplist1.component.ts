import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {

  empFetch!: any[];

  constructor( private serviceservice: ServiceService) { }

  ngOnInit(): void {
    this.empFetch = this.serviceservice.empList();
  }
}