let gradient = 'Hazel'
let font = 'Nunito'
let background = '#fff'

const getColors = name =>
  gradients
    .filter(g => g.name.replace(/ /g, '') == name)
    .map(g => g.colors.join(', '))[0]

const getGradient = name => `linear-gradient(to right, ${getColors(name)})`

const getFont = name =>
  `<link href="https://fonts.googleapis.com/css?family=${font}" rel="stylesheet">`

const change = event => {
  gradient = document.getElementById('gradient').value || gradient
  font = document.getElementById('font').value || font
  background = document.getElementById('background').value || background

  if (!getColors(gradient)) {
    alert('Thats not a gradient!')
    return
  }
  render()
}

const render = () => {
  document.getElementsByTagName('body')[0].style.background = background
  document.getElementById('text').style.backgroundImage = getGradient(gradient)
  document.getElementById('text').style.fontFamily = font
  document.head.insertAdjacentHTML('beforeend', getFont(font))
}

window.onload = render
