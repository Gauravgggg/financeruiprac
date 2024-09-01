import { Component, OnInit } from '@angular/core';
import { FinancerModule } from '../financer/financer.module';
import { FinancerService } from '../financer.service';
import { header } from '../financer.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
work :header []= []

constructor(private workcard: FinancerService) {}

ngOnInit(): void {
  this.work = this.workcard.about;
}


}
