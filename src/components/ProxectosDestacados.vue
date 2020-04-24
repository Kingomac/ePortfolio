<template>
  <div>
    <h2>
      Proxectos destacados:
    </h2>
    <v-card class="my-3">
      <v-card-title>
        Anime Quiz
      </v-card-title>
      <v-card-text>
        <v-row justify="center">
          <v-col sm="12" md="6">
            <p class="text-justify">
              Esta app, feita con MIT App Inventor, consiste nun xogo de
              preguntas no que tes que adiviñar a canción que está a soar. Hai
              certa variedade nas preguntas, pero todas xiran arredor do mesmo,
              as cancións dos animes (series de animación xaponesas) preguntando
              a que serie pertence, o nome dalgún personaxe ou o grupo que as
              canta.
            </p>
            <p class="text-justify">
              A app está composta por catro pantallas, a principal, a de
              descarga das cancións, a da puntuación e tres para os niveles. A
              pantalla principal serve para seleccionar o nivel ao que queres
              xogar e ao iniciar a pantalla comproba se as cancións están
              descargadas e no caso de que non estén descargadas abre a pantalla
              de descarga de cancións.
            </p>
            <p class="text-justify">
              Todos os niveis están compostos por 10 preguntas nas que
              escoitando unha canción tes que identificar o anime e nos niveis
              medio e difícil as preguntas poden ir máis alá e que te pidan
              identificar o grupo que as canta, o título da canción ou o nome
              dalgún dos personaxes.
            </p>
            <p class="text-justify">
              A última é a pantalla de puntuación na que se mostra a puntuación
              que obtivo o xogador independientemente do nivel ao que xogara.
              Lee o valor da puntuación que se gardara no nivel, multiplícase
              por 10<sup>6</sup> e redondease para que quede un valor bonito.
              Tamén aparece unha imaxe dependendo da puntuación obtida dun
              personaxe de anime felicitandote ou chorando. En canto a botóns,
              hai un para volver ao menú principal e outro para compartir o
              resultado, no que se inclúe a puntuación e o nivel, en calquera
              rede social que esté instalada no dispositivo.
            </p>
          </v-col>
          <v-col sm="12" md="6">
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F1.webp?alt=media&token=4e216bcd-4526-4c79-a8bf-df9f1526000a"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text to="/proxectos/animequiz">
          Ver proxecto completo
        </v-btn>
        <v-btn
          color="primary"
          text
          target="_blank"
          href="http://ai2.appinventor.mit.edu/?galleryId=6031644886171648"
        >
          Descargar app
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="my-3">
      <v-card-title>
        Páxina feita con Wix
      </v-card-title>
      <v-card-text>
        <p>
          A páxina principal consta dunha presentación que busca instigarte a
          comprar poñendo a palabra "comprar" tres veces nun texto de 18
          palabras e ten de fondo un gif cunhas portas coma se estiveses
          cambiando de vida. Debaixo explico as diferentes vidas que podes
          mercar e poño unha imaxe do rey, que é unha das vidas que podes
          comprar que fai un efecto Parallax (desprazamento da imaxe coa
          páxina). Despois están as categorías e ofertas e logo unha pequena
          explicación sobre as vidas, que ten no texto un enlace a un libro
          sobre física cuántica que é un pdf almacenado como un arquivo
          estático. Finalmente hai un formulario de contacto para suxerir novas
          vidas e un formulario para subscribirse á newsletter.
        </p>
        <p>
          Na páxina de comprar podes ver todas as vidas e no menú tamén podes
          acceder ás vidas clasificadas polas seguintes categorías: millonario,
          youtuber, político e personaxe de anime.
        </p>
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/PaginaWix%2Fprincipal1.webp?alt=media&token=8839ba31-ca32-4dd5-8051-c6074de37697"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text to="/proxectos/paxina-con-wix">
          Ver proxecto completo
        </v-btn>
        <v-btn
          text
          color="primary"
          target="_blank"
          href="https://vcmario3.wixsite.com/tienda-vidas"
        >
          Ver a páxina
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {};
</script>
