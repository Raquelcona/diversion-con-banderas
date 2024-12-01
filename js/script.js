const listaPaises = document.getElementById('countries-list');

const Banderas = async ()=> {
  try {
    const response = await fetch('https://restcountries.com/v3/all');
    const data = await response.json();

    const listaPaises = document.getElementById('lista');

    // orden alfabeticamente
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));

    data.forEach (pais => {
      const listItem = document.createElement('li');
      const imagen = pais.flags[0] //obtiene imagen 0 svg - 1 png
     
      listItem.innerHTML= `
      <img id='imgBandera' src='${imagen}'/>
      <p>${pais.name.common}</p>`  //no,bre del pais

      listItem.addEventListener('click', () => {
        ventanaEmergente(pais);
      });

      listaPaises.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}


Banderas(); //llamar a la funcion