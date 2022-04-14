document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://wizard-world-api.herokuapp.com/Spells'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let x = Math.floor(Math.random() * 307)
        let name = data[x].name
        let effect = data[x].effect
        let incantation = data[x].incantation
        let light = data[x].light
        console.log(data[x])
        document.querySelector("#name").innerText = name
        document.querySelector("#effect").innerText = effect
        document.querySelector("#incantation").innerText = incantation
        document.querySelector("#light").innerText = light
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}