import { Component, HostListener, OnInit } from '@angular/core';
import { FinancerService } from '../financer.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.scss'
})
export class Header2Component  implements OnInit {
list : any = []
  istop = true;
constructor( private financer: FinancerService ){}
ngOnInit(): void {
  this.checkscroll();
  this.list  = this.financer.about;
}

@HostListener ('window:scroll',[])
onwindowscroll(){
  this.checkscroll();
}

checkscroll(){
this.istop = window.pageYOffset === 0;
}

}
