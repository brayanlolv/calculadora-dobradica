const select = document.querySelector("#select")
const sizeInput = document.querySelector("#sizeinput")
const resultado = document.querySelector("#resultado")

const button = document.querySelector("button")
button.addEventListener("click",()=>{
    modal.style.display = "block";
    const result = calculate()
    console.log("calculando...")
    let s = []
   
    resultado.innerHTML = `<p>distancia entre dobradicas ${result.distancia_entre_dobradicas} </p> <br> <p> distancia da ponta =<br> ${result.medidas_da_ponta.join("<br>")} </p> `

})

function calculate(){

  const qtdDobradicas = parseInt(select.options[select.selectedIndex].value)
  const doorSize = parseFloat(sizeInput.value)  

  console.log([doorSize,qtdDobradicas])

  const distancia_entre_dobradicas = (doorSize - 20) / (qtdDobradicas - 1)
  const medidas_da_ponta = [10]
  const repeticoes =  qtdDobradicas%2 == 0 ? qtdDobradicas / 2 - 1: Math.floor(qtdDobradicas/2)
  console.log(repeticoes)
  for(i = 0;i < repeticoes ; i++){
    medidas_da_ponta[i+1] = medidas_da_ponta[i] +  distancia_entre_dobradicas
  }  
 
  return{
        distancia_entre_dobradicas:distancia_entre_dobradicas,
        medidas_da_ponta: medidas_da_ponta
  }
  

}

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
//   }


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  