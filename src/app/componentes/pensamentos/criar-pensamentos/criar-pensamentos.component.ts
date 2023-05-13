import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'Model0 1',
  };

  criarPensamento() {
    alert('Novo pensamento criado');
  }

  cancelar() {}
}
