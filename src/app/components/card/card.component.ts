import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() products: Product[]=[];

}
