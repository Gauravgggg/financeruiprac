import { Injectable } from '@angular/core';
import { header } from './financer.model';
import { Statement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class FinancerService {

about:header []= [
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-01.jpg',
  },
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-02.jpg',
  },
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-03.jpg',
  },
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-04.jpg',
  },
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-05.jpg',
  },
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-06.jpg',
  },
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-07.jpg',
  },
  {
    name:'Lorem Ipsum Dolor hendrerit',
    statement: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.',
    image: 'l-thumb-08.jpg',
  }
]



  constructor(){ }
}
