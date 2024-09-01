import { FinancerService } from './../financer.service';
import { Component, OnInit } from '@angular/core';
import { header } from '../financer.model';
import { Init } from 'v8';

@Component({
  selector: 'app-commonwork',
  templateUrl: './commonwork.component.html',
  styleUrl: './commonwork.component.scss'
})
export class CommonworkComponent implements OnInit {
 work: header [] = [];
 constructor(private commonwork: FinancerService) {

 }
 ngOnInit(): void {
 this.work =   this.commonwork.about;
 }


}
