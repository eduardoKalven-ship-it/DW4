const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const personType = document.getElementById('person-type')
const cpfContainer = document.getElementById('cpf-container')
const cnpjContainer = document.getElementById('cnpj-container')
const cpf = document.getElementById('CPF')
const cnpj = document.getElementById('CNPJ')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')


personType.addEventListener('change', () => {
  if (personType.value === 'pessoafisica') {
  cpfContainer.classList.remove('hidden')
  cnpjContainer.classList.add('hidden')
  cnpj.value = ''

  } else if (personType.value === 'pessoajuridica') {
  cnpjContainer.classList.remove('hidden')
  cpfContainer.classList.add('hidden')
  cpf.value = ''
  } else {
  cpfContainer.classList.add('hidden')
  cnpjContainer.classList.add('hidden')
  cpf.value = ''
  cnpj.value = ''
  
  }
})



// valida  campos
form.addEventListener('submit', e => {
  e.preventDefault()
  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const personTypeValue = personType.value
  const cpfValue = cpf.value.trim()
  const cnpjValue = cnpj.value.trim()
  const passwordValue = password.value.trim()
  const passwordConfirmationValue = passwordConfirmation.value.trim()

  // Nome de usuario obrigatorio
  if (usernameValue === '') {
    setForError(username, 'Campo obrigatório')
  } else {
    setForSuccess(username)
  }

  // Email obrigatorio
  if (emailValue === '') {
    setForError(email, 'Campo obrigatório')
  } else if (!checkEmail(emailValue)) {
    setForError(email, 'Email invalido')
  } else {
    setForSuccess(email)
  }

  // Tipo de pessoa obrigatorio
  if (personTypeValue === '') {
    setForError(personType, 'Selecione o tipo de pessoa')
  } else {
    setForSuccess(personType)
  }

  // validacao de tipo de pessoa
  if (personTypeValue === 'pessoafisica') {
    if (cpfValue === '') {
      setForError(cpf, 'CPF obrigatorio para Pessoa Física')
    } else {
      setForSuccess(cpf)
    }
  } else if (personTypeValue === 'pessoajuridica') {
    if (cnpjValue === '') {
    setForError(cnpj, 'CNPJ obrigatório para Pessoa Jurídica')
    } else {
    setForSuccess(cnpj)
    }
  }

  // senha obrigatorio
  if (passwordValue === '') {
  setForError(password, 'Campo obrigatório')
  } else {
  setForSuccess(password)
  }

  // Confirmacao da senha
  if (passwordConfirmationValue === '') {
  setForError(passwordConfirmation, 'Campo obrigatório')
  } else if (passwordConfirmationValue !== passwordValue) {
  setForError(passwordConfirmation, 'As senhas devem ser iguais')
  } else {
  setForSuccess(passwordConfirmation)
  }
}

function setForError(input, message) {
const formControl = input.parentElement
const small = formControl.querySelector('small')
small.innerText = message
formControl.classList.add('error')
formControl.classList.remove('success')
}

function setForSuccess(input) {
const formControl = input.parentElement
const small = formControl.querySelector('small')
small.innerText = ''
formControl.classList.add('success')
formControl.classList.remove('error')
}

function checkEmail(email) { 
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( email );
}