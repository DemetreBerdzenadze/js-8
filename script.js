//TASK 2
function createCards(userName, image) {
  let div = document.createElement('div')
  div.classList.add('users')


  let h1 = document.createElement('h1')
  let img = document.createElement('img')


  h1.textContent = userName;
  img.src = image

  div.appendChild(h1)
  div.appendChild(img)


  document.querySelector('.user__info').appendChild(div);
}


let http = new XMLHttpRequest();
http.open('GET', 'https://reqres.in/api/users')
http.send()

http.addEventListener('load', (event) => {
  let eventArray = JSON.parse(event.target.response)


  eventArray.data.forEach((users) => {
    console.log(users);
    createCards(users.first_name + ' ' + users.last_name, users.avatar)

  });
})

