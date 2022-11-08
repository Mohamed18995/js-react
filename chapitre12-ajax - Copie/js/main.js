const BTN_VALIDER = document.getElementById('valider');
const SELECT_PAYS = document.getElementById('pays');

SELECT_PAYS.innerHTML = "";
const OPTION = document.createElement('option');
OPTION.value = '';
OPTION.textContent = "--Veuillez sélectioner un pays";
SELECT_PAYS.appendChild(OPTION);

for(let i = 1; i <= 5; i++){
  const OPTION = document.createElement('option');
  OPTION.value = 'choix' + i;
  OPTION.textContent = "Super choix" + i;

  SELECT_PAYS.appendChild(OPTION);

}

BTN_VALIDER.addEventListener('click', function (MouseEvent) {
  const INPUT_PAYS = document.getElementById('pays');
  const INPUT_TITRE = document.getElementById('titre');
  const INPUT_DUREE = document.getElementById('duree');
  const INPUT_DATE = document.getElementById('date');
  const URL = `http://localhost/cours1/exammmmmmn/chapitre12-ajax%20-%20Copie%20-%20Copie/test_ajax.php`;
  const PARAMS = `?pays=${encodeURIComponent(INPUT_PAYS.value)}&titre=${encodeURIComponent(INPUT_TITRE.value)}&duree=${encodeURIComponent(INPUT_DUREE.value)}&date=${encodeURIComponent(INPUT_DATE.value)}`;
  
  ajax_film(URL +PARAMS);
});
  
function ajax_film(URL){
  const xhr = new XMLHttpRequest();
  
  xhr.open(
    'GET',
     URL
  );
  
  xhr.send(null);
  
  xhr.onreadystatechange = function () {
    switch (xhr.readyState){
      case xhr.DONE:
        if(xhr.status === 200){
          traitement_film(JSON.parse(xhr.response));
    
        }
      break;
    }
  };
}
  function traitement_film(film){
    const P = document.querySelector('.error');
    if (film.titre && film.pays && film.duree && film.date){

      const TABLE_FILMS = document.querySelector('#films tbody');
      const TR = document.createElement('tr');
      TR.innerHTML = `<td>${film.pays}</td><td>${film.titre}</td><td>${film.duree}</td><td>${film.date}</td>`;
  
      TABLE_FILMS.appendChild(TR);
      P.innerText = ""
    } else {

      P.innerText = "Please entre all the field"
    }
   
  }

