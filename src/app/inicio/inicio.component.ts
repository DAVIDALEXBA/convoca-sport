import { Component } from '@angular/core';

@Component({
  selector: 'slides-example',
  template: `
    <ion-content fullscreen class="ion-padding" scroll-y="false">
      <ion-slides>
        <ion-slide>
          <div class="slide">
            <img
              src="https://www.agueru.com/wp-content/uploads/2018/06/Deportes.png"
            />
            <h2>Bienvenido</h2>
            <p>
              <b>Convoca Sport</b> es una aplicación que te permitirá encontrar convocatorias de diversos deportes 
            </p>
          </div>
        </ion-slide>

        <ion-slide>
          <img
            src="https://i.pinimg.com/originals/ff/fc/d6/fffcd600ff8883b975409b2204fdb59e.jpg"
          />
          <h2>¿Qué es Convoca Sport?</h2>
          <p>
            <b>Convoca Sport</b> te permitirá explorar los mejores eventos deportivos en tu ciudad, y te permitirá obtener toda la información para no perderte de nada
          </p>
        </ion-slide>

        <ion-slide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/982/337/non_2x/young-people-wearing-medical-masks-running-avatars-characters-vector.jpg"
          />
          <h2>¿Te gustan los deportes?</h2>
          <p>
            <b>Si eres amante de los deportes</b> entonces esta es tu aplicación, no te pierdas de ningún evento en tu ciudad.
          </p>
        </ion-slide>

        <ion-slide>
          <img
            src="https://userscontent2.emaze.com/images/55d05c40-7f1c-444b-8bb2-cd7f034ca728/713e037d0734fa8d691f936a2539722d.png"
          />
          <h2>¡ Empezemos !</h2>
          <ion-button fill="clear" href="/menu/Inicio">Continuar <ion-icon slot="end" name="arrow-forward"></ion-icon></ion-button>
        </ion-slide>
      </ion-slides>
    </ion-content>
    <style>
      ion-slides {
        height: 100%;
      }

      .swiper-slide {
        display: block;
      }

      .swiper-slide h2 {
        margin-top: 2.8rem;
      }

      .swiper-slide img {
        max-height: 50%;
        max-width: 80%;
        margin: 60px 0 40px;
        pointer-events: none;
      }

      b {
        font-weight: 500;
      }

      p {
        padding: 0 40px;
        font-size: 14px;
        line-height: 1.5;
        color: var(--ion-color-step-600, #60646b);
      }

      p b {
        color: var(--ion-text-color, #000000);
      }
    </style>
  `,
})
export class InicioComponent {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  constructor() {}
}
