<template>
  <div>
    <v-row justify="center">
      <div class="display-3">Anime Quiz</div>
    </v-row>
    <v-row justify="center">
      <v-col>
        <p class="text-justify">
          <a
            href="http://ai2.appinventor.mit.edu/?galleryId=6031644886171648"
            target="_blank"
            >Descargar App</a
          >
          Esta app, feita con MIT App Inventor, consiste nun xogo de preguntas
          no que tes que adiviñar a canción que está a soar. Hai certa variedade
          nas preguntas, pero todas xiran arredor do mesmo, as cancións dos
          animes (series de animación xaponesas) preguntando a que serie
          pertence, o nome dalgún personaxe ou o grupo que as canta.
        </p>
        <p class="text-justify">
          A app está composta por catro pantallas, a principal, a de descarga
          das cancións, a da puntuación e tres para os niveles. A pantalla
          principal serve para seleccionar o nivel ao que queres xogar e ao
          iniciar a pantalla comproba se as cancións están descargadas e no caso
          de que non estén descargadas abre a pantalla de descarga de cancións.
        </p>
        <p class="text-justify">
          Na pantalla de descargas se configura un compoñente web para gardar as
          respostas das páxinas web a un arquivo e cun bucle recorrése unha
          lista coas identificacións e cos enlaces de descarga das cancións para
          iniciar todas as descargas á vez e asignando a ruta onde se van
          descargar nun TinyDB. As cancións están subidas á nube de Firebase (se
          queres saber máis abre a sección de
          <router-link to="/sobre-este-eportfolio"
            >Sobre este eportfolio</router-link
          >). Decidín iniciar todas as descargas á vez porque é máis rápido que
          si o fas cando termina cada descarga e descargar unicamente un arquivo
          á vez, ademais de que dá unha sensación diferente xa que en vez de ir
          lento a unha velocidade constante vai lento ao principio cando a
          velocidade de descarga se divide entre os arquivos totais e segundo
          van terminando, os que quedan van máis rápido.
        </p>
      </v-col>
      <v-col>
        <v-carousel cycle height="700px">
          <v-carousel-item v-for="i in imagenes" v-bind:key="i">
            <v-row justify="center">
              <v-img :src="i" max-width="450px" height="700px"> </v-img>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col>
        <p class="text-justify">
          Todos os niveis están compostos por 10 preguntas nas que escoitando
          unha canción tes que identificar o anime e nos niveis medio e difícil
          as preguntas poden ir máis alá e que te pidan identificar o grupo que
          as canta, o título da canción ou o nome dalgún dos personaxes.
        </p>
        <p class="text-justify">
          No nivel fácil tes que escoller entre tres opcións e para que sexa
          sinxelo a pregunta é constante, só tes que identificar a que anime
          pertence cada canción. En canto a bloques, para facer as preguntas
          usando só unha pantalla, porque MIT App Inventor ten un límite de 10
          pantallas, usei varias listas e variables, unha lista cos
          identificadores das cancións que obteñen a ruta da canción descargada
          no teléfono que está almacenada nun TinyDB e a reproduce ao comezo e
          ao cambiar de pregunta, unha lista de listas coas respostas posibles
          que aparecen nos botóns, unha lista coas opcións correctas e unha
          variable que vai almacenando en que pregunta estás xa que as listas
          están coordinadas segundo a posición dos elementos para que todo
          coincida ben. As cores dos botóns son aleatorias e cambian con cada
          pregunta para evitar que a interfaz sexa monónotona e se fallas a
          pregunta vibra.
        </p>
        <p class="text-justify">
          No nivel medio tamén tes tres opcións e para aumentar a dificultade
          van cambiando as preguntas e as respostas posibles van a pillar. Ao
          igual que o nivel anterior os botóns cambian as cores e vibra cando
          fallas. Nos bloques o único diferente é que cambian as preguntas.
        </p>
        <p class="text-justify">
          No nivel difícil é distinto xa que tes que escribir a resposta que é
          pasada a minúsculas para que sexa correcta sen importar como se
          escriba e ademais, as preguntas fanse evitando que nas respostas haxa
          tildes para non complicalo aínda máis.
        </p>
      </v-col>
    </v-row>
    <v-container>
      <p class="text-justify">
        A última é a pantalla de puntuación na que se mostra a puntuación que
        obtivo o xogador independientemente do nivel ao que xogara. Lee o valor
        da puntuación que se gardara no nivel, multiplícase por 10<sup>6</sup> e
        redondease para que quede un valor bonito. Tamén aparece unha imaxe
        dependendo da puntuación obtida dun personaxe de anime felicitandote ou
        chorando. En canto a botóns, hai un para volver ao menú principal e
        outro para compartir o resultado, no que se inclúe a puntuación e o
        nivel, en calquera rede social que esté instalada no dispositivo.
      </p>
      <p class="text-justify">
        A puntuación nos niveis fácil e medio calcúlase aplicando a función f(x)
        = 1/x aos milisegundos que se tardaron en responder e iso fai que haxa
        un pequeno erro. O erro consiste en que se poden obter puntuacións
        altísimas pulsando as respostas moi rápido sen ler e obter grandes
        puntuacións incluso acertando só unha das preguntas. Para solucionalo
        habería que cambiar a función por unha como f(x) = 1/10x ou f(x) =
        1/ln(x) para que os valores sexan menores ou sumar unha certa cantidade
        de milisegundos para que non sexa posible obter milisegundos en
        intervalos da funcións nos que haxa máis curvatura e as puntuacións non
        varíen tanto cos milisegundos que se tarda en responder.
      </p>
    </v-container>
    <v-row class="mt-3" justify="center">
      <div class="display-2 mt-2">Bloques</div>
      <v-carousel class="mt-5" cycle height="1000px">
        <v-carousel-item v-for="b in bloques" v-bind:key="b">
          <v-img :src="b" max-height="1000px"></v-img>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagenes: [
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F1.webp?alt=media&token=4e216bcd-4526-4c79-a8bf-df9f1526000a",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F2.webp?alt=media&token=7328e9b4-0751-4bde-abf7-f0d777de8161",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F3.webp?alt=media&token=7d3785c9-e21b-4b4b-a4e8-3f602164beef",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F4.webp?alt=media&token=fa202a5e-fe5d-4554-bd49-95a3ca93f1eb",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F5.webp?alt=media&token=aa93f1d5-5413-4ebc-820b-576abd1f0afb",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F6.webp?alt=media&token=f14414a3-2d96-4b01-82f1-8e7de7e78e12",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F7.webp?alt=media&token=26cc2ffe-ebc7-4270-935f-49b6981c7bf5",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F8.webp?alt=media&token=831cb727-90c6-4ee6-b25c-8e44beaba068",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F9.webp?alt=media&token=8fe77d01-9b80-4787-95f5-56abac9f5135",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F10.webp?alt=media&token=fd9dd50b-70ad-4c75-8cc1-7a478468cc92",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2F12.webp?alt=media&token=ed6d0ac4-274c-464e-bca0-3c809f014272",
      ],
      bloques: [
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2Fbloques%2F1.webp?alt=media&token=404f6c61-e16a-49c3-bec3-e2cbcbf9c849",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2Fbloques%2F2.webp?alt=media&token=4247ce60-9ad9-44ca-9f7a-056f43561cd3",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2Fbloques%2F3.webp?alt=media&token=d75bb380-f2c0-486f-8d62-76b44bfdfba0",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2Fbloques%2F4.webp?alt=media&token=86dcefbb-43a9-4cba-b8c8-851b695870ea",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2Fbloques%2F5.webp?alt=media&token=f81ff25a-7320-4ceb-ab38-90bd221c4434",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/App%2Fbloques%2F6.webp?alt=media&token=65bf2e68-96f6-43ff-a86c-aa54258432ba",
      ],
    };
  },
};
</script>
