<template>
  <v-container>
    <h1>Páxina feita cun editor WYSIWYG</h1>
    <p>
      Fixen unha tenda de carácter humorístico na que podes mercar vidas de
      personaxes famosos.
    </p>
    <v-row>
      <v-col md="6">
        <v-carousel dark cycle show-arrows-on-hover>
          <v-carousel-item
            v-for="(img, i) in imagenes"
            :key="i"
            :src="img"
            transition="fade-transition"
            reverse-transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col md="6">
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
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6">
        <p>
          Como entretementos considero os enlaces ás canles de Youtube dos
          youtubers e como extra ten un segredo oculto que che permite xogar ao
          dinosaurio de Google Chrome se pos
          <a
            href="https://vcmario3.wixsite.com/tienda-vidas/dino"
            target="_blank"
            >/dino</a
          >
          ao ao final da dirección raíz da páxina e usas Google Chrome.
        </p>
        <p>
          Como é unha páxina humorística ao abrir o carriño para finalizar as
          compras se che indica que é unha broma e obviamente a posibilidade de
          mercar algo está bloqueada.
        </p>
        <v-btn
          color="accent"
          block
          target="_blank"
          href="https://vcmario3.wixsite.com/tienda-vidas"
          >Visitar página</v-btn
        >
      </v-col>
      <v-col md="6">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/PaginaWix%2Fdino.webp?alt=media&token=2efc7e67-efe6-4101-a915-6f2d7aad3d55"
        ></v-img>
      </v-col>
    </v-row>
    <object
      v-if="mostrar"
      type="text/html"
      data="https://vcmario3.wixsite.com/tienda-vidas"
      width="1366px"
      height="768px"
      style="text-align:center;overflow:auto;"
    >
    </object>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      mostrar: false,
      imagenes: [
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/PaginaWix%2Fprincipal1.webp?alt=media&token=8839ba31-ca32-4dd5-8051-c6074de37697",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/PaginaWix%2Fprincipal2.webp?alt=media&token=35845809-aec2-4b5d-a707-113e916bdcb1",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/PaginaWix%2Fprincipal3.webp?alt=media&token=764e9e68-ae6f-4f5d-8caa-4b0247eba2d9",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/PaginaWix%2Fprincipal4.webp?alt=media&token=00aa33e9-c499-44bb-8ea2-fe6d4812b4a1",
        "https://firebasestorage.googleapis.com/v0/b/e-portfolio-2ffac.appspot.com/o/PaginaWix%2Fprincipal5.webp?alt=media&token=5306f22f-67f4-469e-b16f-c44e463d34dc"
      ]
    };
  }
};
</script>
