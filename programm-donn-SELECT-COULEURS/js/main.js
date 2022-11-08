const PRIMARY_SELECT = document.querySelector(".primary")
const SECONDARY_SELECT = document.querySelector(".secondary")
let params = ""

const xhr = new XMLHttpRequest()
xhr.open("GET", `http://localhost/cours1/programm-donn-SELECT-COULEURS/test_ajax.php`)
xhr.send(null)

xhr.onreadystatechange= function (){
  switch (xhr.readyState) {
    case xhr.DONE:
      switch (xhr.status) {
        case 200:
          let data = JSON.parse(xhr.response)
          addIntoSelect(data)
          break;
      
        default:
          break;
      }
      
      break;
  
    default:
      break;
  }
}

function addIntoSelect(data){
  const DEFAULT_OPTION = document.createElement("option")
  DEFAULT_OPTION.value = "please choice"
  DEFAULT_OPTION.textContent = "please choice"
  DEFAULT_OPTION.setAttribute("disabled", true)
  DEFAULT_OPTION.setAttribute("selected", true)
  PRIMARY_SELECT.appendChild(DEFAULT_OPTION)
 data.forEach(element => {
  const OPTION = document.createElement("option")
  OPTION.value = element
  OPTION.textContent = element
  PRIMARY_SELECT.appendChild(OPTION)
 });
}

PRIMARY_SELECT.addEventListener("change",function (){
  params = `?type=${PRIMARY_SELECT.value}`
  xhr.open("GET", `http://localhost/cours1/programm-donn-SELECT-COULEURS/test_ajax.php${params}`)
xhr.send(null)

xhr.onreadystatechange= function (){
  switch (xhr.readyState) {
    case xhr.DONE:
      switch (xhr.status) {
        case 200:
          let data = JSON.parse(xhr.response)
          SECONDARY_SELECT.innerHTML =""
          const DEFAULT_OPTION = document.createElement("option")
  DEFAULT_OPTION.value = "please choice"
  DEFAULT_OPTION.textContent = "please choice"
  SECONDARY_SELECT.appendChild(DEFAULT_OPTION)
          data.forEach((element) =>{
            const OPTION = document.createElement("option")
  OPTION.value = element
  OPTION.textContent = element
  SECONDARY_SELECT.appendChild(OPTION)
          })
          break;
      
        default:
          break;
      }
      
      break;
  
    default:
      break;
  }
}
})