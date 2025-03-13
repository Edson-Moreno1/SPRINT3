import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-grid',
  imports: [],
  templateUrl: './list-grid.component.html',
  styleUrl: './list-grid.component.css'
})
export class ListGridComponent {
  @Output() opcionSeleccionada = new EventEmitter<'list' | 'grid'>();

  seleccionar(opcion: 'list' | 'grid') {
    this.opcionSeleccionada.emit(opcion);
  }

}
