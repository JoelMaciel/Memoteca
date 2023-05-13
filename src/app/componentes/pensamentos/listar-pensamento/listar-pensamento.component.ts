import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Angular Java',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Minha propiedade é decorada com @Input()',
      autoria: 'Angular Java',
      modelo: 'modelo3',
    },
    {
      conteudo:
        ' Um desenvolvedor Java Angular é um profissional que tem habilidades em ambas as áreas, Java e Angular. Java é uma linguagem de programação amplamente utilizada para desenvolvimento de aplicativos empresariais e sistemas distribuídos, enquanto o Angular é um framework JavaScript popular para o desenvolvimento de aplicativos web.Um desenvolvedor Java Angular é um profissional Um desenvolvedor Java Angular é um profissional Um desenvolvedor Java Angular é um profissional ',
      autoria: 'Angular Java',
      modelo: 'modelo3',
    },
  ];
}
