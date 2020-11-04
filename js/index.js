/* Events start here and are delegated to the document.*/

document.addEventListener("click", (e) => {
  /* this if  create a new div in advantage whit other div that have a new paragraph whit add advantage  */
  if (e.target.matches("#btn-ventajas")) {
    const $btn_father = document.querySelector(".ventajas-text");

    if ($btn_father.hasChildNodes()) {
      while ($btn_father.childNodes.length >= 1) {
        $btn_father.removeChild($btn_father.firstChild);
      }
    }

    const $newTitleAdvantage = document.createElement("h2");
    $newTitleAdvantage.appendChild(
      document.createTextNode("Todas las ventajas")
    );

    const $newParagraphAdvantage = document.createElement("p");
    $newParagraphAdvantage.appendChild(
      document.createTextNode(
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Iste aliquid commodi, id molestias dolores provident dicta sed dignissimos ipsam sapiente.`
      )
    );
    const $newParagraphAdvantage1 = document.createElement("p");
    $newParagraphAdvantage1.appendChild(
      document.createTextNode(
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Iste aliquid commodi, id molestias dolores provident dicta sed dignissimos ipsam sapiente.`
      )
    );

    const $newButtonAdvantage = document.createElement("button");
    $newButtonAdvantage.appendChild(document.createTextNode("regresar"));
    $newButtonAdvantage.id = "ventajas-regresar";
    $newButtonAdvantage.dataset.aos = "flip-right";
    $newButtonAdvantage.dataset.aosDuration = "1100";

    $btn_father.appendChild($newTitleAdvantage);
    $btn_father.appendChild($newParagraphAdvantage);
    $btn_father.appendChild($newParagraphAdvantage1);
    $btn_father.appendChild($newButtonAdvantage);
    $btn_father.className = "ventajas-text ventajas-new";
  }

  if (e.target.matches("#ventajas-regresar")) {
    console.log("hola 1");
    const $btn_father = document.querySelector(".ventajas-text");

    if ($btn_father.hasChildNodes()) {
      while ($btn_father.childNodes.length >= 1) {
        $btn_father.removeChild($btn_father.firstChild);
      }
    }

    const $h2 = document.createElement("h2");
    $h2.appendChild(document.createTextNode("Ventajas de BOOK-EZ"));

    const $pBack = document.createElement("p");
    $pBack.appendChild(
      document.createTextNode(`Book-ez esta libre de intervercion de terceros y la informacion
    recopilada no sera compartida en ningun momento, los desarrolladores
    tienen muy claro la importancia de la seguridad y la privacidad por
    eso mismo los servidores son privados y estan diseñados
    especificamente para el colegio .`)
    );
    const $boton = document.createElement("button");
    $boton.appendChild(document.createTextNode("conocer mas."));
    $boton.id = "btn-ventajas";
    $boton.dataset.aos = "fade-down-right";
    $boton.dataset.aosDuration = "1100";

    $btn_father.appendChild($h2);
    $btn_father.appendChild($pBack);
    $btn_father.appendChild($boton);

    $btn_father.className = "ventajas-text";
  }
});

/* this  block code  make the effect of the header  */
let positionPrincipal = window.pageYOffset; 
window.addEventListener("scroll", function () {
  let displacementCurrent = window.pageYOffset;
  if (positionPrincipal >= displacementCurrent) {
    document.querySelector("header").style.top = "0px";
  } else {
    document.querySelector("header").style.top = "-100px";
  }
  positionPrincipal = displacementCurrent;
});
/*  End block code  effect of the header  */
