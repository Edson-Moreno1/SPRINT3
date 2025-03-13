import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards-container',
  imports: [CommonModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  @Input() displayMode: 'list' | 'grid' = 'list';
  @Input() products: Product[]=[];


}
