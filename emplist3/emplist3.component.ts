import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  empFetch!: any[];

  constructor( private serviceservice: ServiceService) { }

  ngOnInit(): void {
    this.empFetch = this.serviceservice.empList();
  }
}