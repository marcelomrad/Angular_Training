import { Component } from '@angular/core';

interface Pessoa {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  
  name : string = 'Angular';
  
  urlImagem : string = 'http://lorempixel.com/400/200/nature/';
  descricaoImagem : string = 'Descrição da imagem';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: Pessoa = {
    nome: 'Celim',
    idade: 25
  }

  nomeCurso : string = 'Angular';

  novoValor : number = 0;

  onClick(){
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  onKeyUpEnter(evento: Event){
    this.valorSalvo = ((<HTMLInputElement>evento.target).value)
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any ){
    this.novoValor = evento.novoValor;
  }

  getValor (){
    return 1;
  }


}
