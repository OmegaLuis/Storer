import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();

  constructor(){ }
  onClick(): void{
    // console.log("click",this.product);
    this.addToCartClick.emit(this.product);

  }

  ngOnInit(): void {
    
  }

}
