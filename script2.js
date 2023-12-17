// TASK 1
function createCards(name, color) {
  let div = document.createElement('div')
  div.classList.add('.cards')

  let h1 = document.createElement('h1')
  let p = document.createElement('p')

  h1.textContent = name;
  p.textContent = color;

  div.appendChild(h1)
  div.appendChild(p)

  document.querySelector('.name__color').appendChild(div)
}


fetch('https://reqres.in/api/unknown')
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    data.data.forEach((user) => {
      createCards(user.name, user.color)
    });
  })