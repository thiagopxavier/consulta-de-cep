import './style.css'

const cep = document.querySelector('#cep');


const inputs = ['logradouro', 'bairro', 'localidade', 'uf']
const showData = (result) => {
  for(const data in result) {
    if(document.querySelector(`#${data}`)){
      document.querySelector(`#${data}`).value = result[data]
    }
  }
}

cep.addEventListener('input', (e) => {  // 'blur'
  let search = cep.value.replace('-', '');
  const option = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, option)
  .then(response => response.json())
  .then(result => showData(result))
  .catch(e => console.log('Deu erro' + e.message))

})
