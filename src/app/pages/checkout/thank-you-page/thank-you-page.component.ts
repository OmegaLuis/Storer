import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
  <div class="container">
    <h1 class="title">Thank You!</h1>
    <p class="content">Your Order is on the way!</p>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse dignissimos assumenda voluptatem laudantium blanditiis optio voluptas. Eos illum unde, eius ducimus eveniet aliquid hic earum animi dolore, eligendi molestias.</span>

</div>
  `,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
