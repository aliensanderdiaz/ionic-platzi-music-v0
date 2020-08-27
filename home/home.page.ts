import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides: any[] = [
    {
      title: 'Escucha tu música',
      subTitle: 'EN CUALQUIER LUGAR',
      description: 'Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.',
      icon: 'play'
    },
    {
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'DE VIDEOS INCREIBLES',
      description: 'Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs increíbles de tu artista favorito.',
      icon: 'videocam'
    },
    {
      title: 'Accede al exclusivo',
      subTitle: 'MODO DEPORTE',
      description: `
      Crea una playlist basada en tu actividad física. <br />
      Ten reportes y acceso a lo que necesites, integrado con GPS!
      `,
      icon: 'bicycle'
    }
  ];

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  constructor() { }

}
