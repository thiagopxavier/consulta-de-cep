import Swal from 'sweetalert2'
import './style.css'

const cep = document.querySelector('#cep');

const showData = (data) => {
  for(const indexCEP in data) {
    if(document.querySelector(`#${indexCEP}`)){
      document.querySelector(`#${indexCEP}`).value = data[indexCEP]
    }
  }
}

cep.addEventListener('input', handleInput);

async function handleInput() {
  let search = cep.value.replace('-', '');

  try {
    const response = await fetch(`https://viacep.com.br/ws/${search}/json/`);
    const data = await response.json();

    showData(data)
  } catch (error) {
    // if(search.length = 9) {
    //   Swal.fire('Ops', error.message, 'error');
    // }
  }
}




