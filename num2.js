function lottery () {
    const input = prompt("Ingresa un rango de numeros:")
    const tickets = []
    while(tickets.length < input) {
      let randomNumber = Math.floor(Math.random() * input + 1)
      if(!tickets.includes(randomNumber) && randomNumber !== 0) {
        tickets.push(randomNumber)
      }
    }
    const groups = prompt("Ingresa cuantos grupos quieres definir: ")
    
    console.log(tickets)
  }
  lottery()