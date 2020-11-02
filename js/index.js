/* this part of  code crate a new block in the html from div.ventajas>text and change its content   */

const $bnt_ventajas = document.getElementById("btn-ventajas");

const changeAdvantage = function (e) {
  const $btn_father = document.querySelector(".ventajas-text");

  if ($btn_father.hasChildNodes()) {
    while ($btn_father.childNodes.length >= 1) {
      $btn_father.removeChild($btn_father.firstChild);
    }
  }

  const $newTitleAdvantage = document.createElement("h2");
  $newTitleAdvantage.appendChild(document.createTextNode("Todas las ventajas"));

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

  $newButtonAdvantage.addEventListener("click", regresar);

  function regresar() {
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
    $boton.dataset.aos = "fade-down-right";
    $boton.dataset.aosDuration = "1100";
    $boton.addEventListener("click", changeAdvantage);

    $btn_father.appendChild($h2);
    $btn_father.appendChild($pBack);
    $btn_father.appendChild($boton);

    $btn_father.className = "ventajas-text";
  }
};

$bnt_ventajas.addEventListener("click", changeAdvantage);

/* here end  the code  of  html that create the new content in the label div advantage -text   */
