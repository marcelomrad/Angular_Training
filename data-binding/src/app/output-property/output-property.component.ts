import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {
  @Input() valor : number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput! : ElementRef;

  incrementa() {
   
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
