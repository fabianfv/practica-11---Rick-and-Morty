

const BASE_URL = "https://rickandmortyapi.com/api/"

const END_POINT = "character/"

const OPTIONS = {crossDomain: true}

function show_character({ name, species, origin:{ name: origin_name } }) {
  document.write(
    `Hola mi nombre es ${name}, mi especie es ${species}, soy originario de ${origin_name}<br>`
  )
}

function get_character(id) {
  $.get(BASE_URL + END_POINT + id, OPTIONS, show_character)
}

function ask_for_id() {
  
  let id = null

  while (true) {
    id = prompt("Enter a character id (cancel to quit): ")

    if (!id) return

    id = Number(id)

    if (!Number.isInteger(id)) continue

    get_character(id)
  }
}

ask_for_id()




