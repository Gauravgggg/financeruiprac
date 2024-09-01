import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements  OnInit{
istop = true;

ngOnInit(): void {
  this.checkscroll();
}

@HostListener ('window:scroll',[])
onwindowscroll(){
  this.checkscroll();
}

checkscroll(){
this.istop = window.pageYOffset === 0;
}

}
