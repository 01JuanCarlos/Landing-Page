import { Component } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-popular-recipes',
  standalone: true,
  imports: [],
  templateUrl: './popular-recipes.component.html',
  styleUrl: './popular-recipes.component.css'
})
export class PopularRecipesComponent {
  ngAfterViewInit(): void {
    new Swiper('.swiper-container', {
      slidesPerView: 5, // Valor por defecto para pantallas grandes
      spaceBetween: 10, // Espacio entre las slides
      freeMode: true,   // Habilitar el modo de desplazamiento libre
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: true,  // Habilitar desplazamiento con la rueda del ratón
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      breakpoints: {
        100: {
          slidesPerView: 1, // Mostrar 1 slide en pantallas más pequeñas
        },
        320: {
          slidesPerView: 1.2, // Mostrar 1.2 slides
        },
        440: {
          slidesPerView: 1.6, // Mostrar 1.6 slides
        },
        500: {
          slidesPerView: 2, // Mostrar 2.2 slides
        },
        850:{
          slidesPerView: 3, // Mostrar 2.2 slides
        },
        991: {
          slidesPerView: 3.3, // Mostrar 3.3 slides
        },
        1000: {
          slidesPerView: 4, // Mostrar 4 slides
        },
        1042: {
          slidesPerView: 5, // Mostrar 4 slides
        }
      }
    });
  }
}
