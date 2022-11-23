const result = []

function tarea() {
  const response = confirm('¿Quieres agregar un numero?')

  if (response) {
    let randomNumber = Math.floor(Math.random() * 101)
    const value = `${randomNumber}`
    // toString(radomNumber)

    if (value.indexOf('8') === -1) {
      result.push(randomNumber)
      console.log('Arreglo: ' + result)
    } else {
      console.log(`El numero ${randomNumber} no se agrego`)
    }
    tarea()
  } else {
    console.log('Okay, se termino el programa')
  }
}

tarea()