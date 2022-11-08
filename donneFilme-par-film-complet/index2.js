const SHOW_MOVIES_BTN = document.getElementById("show-movies");
const FILMS = document.querySelector("#films");

FILMS.classList.add("hide");

SHOW_MOVIES_BTN.addEventListener("click", () => {
  FILMS.classList.remove("hide");
  // SHOW_MOVIES_BTN.classList.add("hide");
  SHOW_MOVIES_BTN.setAttribute("disabled", true);

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/cours1/donneFilmPret-progcomplet/ajax.php");
  xhr.send(null);

  xhr.onreadystatechange = function() {
    switch (xhr.readyState) {
      case xhr.DONE:
        switch (xhr.status) {
          case 200:
            let films = JSON.parse(xhr.response);
            traitement_film(films);
            break;
        }
        break;
    }
  };

  function traitement_film(films) {
    films.forEach(film => {
      const TABLE_FILMS = document.querySelector("#films tbody");
      const INFO_BUTTON = document.createElement("button");
      INFO_BUTTON.innerText = `${film.titre} info`;
      const TR = document.createElement("tr");
      TR.innerHTML = `<td>${film.titre} </td> <td>${film.duree}</td>`;
      INFO_BUTTON.addEventListener("click", () => {
        console.log(`you selected ${film.titre} and duration is ${film.duree}`);
      });
      TR.appendChild(INFO_BUTTON);
      TABLE_FILMS.appendChild(TR);
    });
  }
});

// const VALIDATE_BTN = document.getElementById("valider");

// VALIDATE_BTN.addEventListener("click", () => {
//   const INPUT_TITLE = document.getElementById("titre");
//   const INPUT_DURATION = document.getElementById("duree");
//   const PARAMS = `?titre=${encodeURIComponent(
//     INPUT_TITLE.value
//   )}&duree=${encodeURIComponent(INPUT_DURATION.value)}`;

//   let url = `http://localhost:8888/ajax2/ajax.php${PARAMS}`;
//   ajax_films(url);
// });

// function ajax_films(url) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.send(null);

//   xhr.onreadystatechange = () => {
//     switch (xhr.readyState) {
//       case xhr.DONE:
//         switch (xhr.status) {
//           case 200:
//             let film = JSON.parse(xhr.response);
//             traitement_film(film);
//             break;
//           default:
//             break;
//         }
//         break;

//       default:
//         break;
//     }
//   };
// }

// function traitement_film(film) {
//   const TABLE_FILMS = document.querySelector("#films tbody");
//   const TR = document.createElement("tr");
//   TR.innerHTML = `<td>${film.titre} </td> <td>${film.duree}</td>`;
//   TABLE_FILMS.appendChild(TR);
// }
