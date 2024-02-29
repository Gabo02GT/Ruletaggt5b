import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ruleta-ggt5b';
  numeroElegido: number | null = null;
  numeroRuleta: number | null = null;
  colorElegido: string | null = null;
  colorRuleta: string | null = null;
  mensajeResultado: string = '';
  mensajeNumeroRuleta: string = '';
  mensajeColorRuleta: string = '';

  @ViewChild('ruleta') ruleta!: ElementRef;

  guardarNumero(numero: number) {
    this.numeroElegido = numero;
    console.log(`Número elegido: ${this.numeroElegido}`);
  }

  guardarColor(color: string) {
    this.colorElegido = color;
    console.log(`Color elegido: ${this.colorElegido}`);
  }

  quitarNumero() {
    this.numeroElegido = null;
    console.log('Número eliminado');
  }

  quitarColor() {
    this.colorElegido = null;
    console.log('Color eliminado');
  }

  girarRuleta() {
    this.ruleta.nativeElement.className = 'ruleta spin8';
    const terminarAnimacion = () => {
      this.ruleta.nativeElement.className = 'ruleta';
      this.numeroRuleta = Math.floor(Math.random() * 38);
      this.mensajeNumeroRuleta = `El número de la ruleta es: ${this.numeroRuleta}`;
      console.log(this.mensajeNumeroRuleta);
      const colores = ['rojo', 'negro', 'verde'];
      this.colorRuleta = colores[Math.floor(Math.random() * colores.length)];
      this.mensajeColorRuleta = `El color de la ruleta es: ${this.colorRuleta}`;
      console.log(this.mensajeColorRuleta);
      if (this.numeroElegido !== null && this.numeroElegido === this.numeroRuleta) {
        this.mensajeResultado = '¡Felicidadess! Has ganado con el número.';
      } else if (this.colorElegido !== null && this.colorElegido === this.colorRuleta) {
        this.mensajeResultado = '¡Felicidades! Has ganado con el color.';
      } else {
        this.mensajeResultado = 'Lo siento, no has ganado. Intenta de nuevo.';
      }
      console.log(this.mensajeResultado);
      this.ruleta.nativeElement.removeEventListener('animationend', terminarAnimacion);
    };
    this.ruleta.nativeElement.removeEventListener('animationend', terminarAnimacion);
    this.ruleta.nativeElement.addEventListener('animationend', terminarAnimacion);
  }
}
