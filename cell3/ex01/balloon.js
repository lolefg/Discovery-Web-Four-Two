let globo = document.getElementById('globo');
let tamaño = 200;
let colorIndex = 0;
let colors = ['red', 'green', 'blue'];

globo.addEventListener('click', () => {
  tamaño += 10;
  if (tamaño > 420) {
    tamaño = 200;
  }
  globo.style.width = `${tamaño}px`;
  globo.style.height = `${tamaño}px`;
  colorIndex = (colorIndex + 1) % colors.length;
  globo.style.backgroundColor = colors[colorIndex];
});

globo.addEventListener('mouseout', () => {
  tamaño -= 5;
  if (tamaño < 200) {
    tamaño = 200;
  }
  globo.style.width = `${tamaño}px`;
  globo.style.height = `${tamaño}px`;
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  globo.style.backgroundColor = colors[colorIndex];
});