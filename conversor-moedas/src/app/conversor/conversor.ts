import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css'
})
export class ConversorComponent {
  // Variáveis para armazenar os dados do formulário
  valor: number = 1;
  moedaDe: string = 'USD';
  moedaPara: string = 'BRL';

  // Variável para armazenar o resultado da conversão
  resultado: number = 0;
}