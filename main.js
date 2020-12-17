const dataDog = document.querySelector('.data-dog')

const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

let count = 0;

btn.onclick = async () => {
    await axios
      .get(`https://dog.ceo/api/breed/${input.value}/images`)
      .then((res) => {
        createImage(res);
      })
      .catch((err) => {
        console.log(err);
      });
};

function createImage(res) {
  //pega texto do input
  let txt = document.createTextNode(`${input.value}`)

  //div para conter os elementos
  let div = document.createElement('div')
  div.setAttribute('class', 'dog-content')

  //nome da raça
  let nameDog = document.createElement('div')
  nameDog.setAttribute('class', 'name-dog')
  
  //imagem da raça
  let imgContainer = document.createElement('div')
  imgContainer.setAttribute('class', 'img-container')
  
  //criando h1 pro nome da raça
  let h1 = document.createElement('h1');
  h1.appendChild(txt);

  let img = document.createElement("img");

  //setando o src da imagem com o resulado da api
  img.setAttribute("src", res.data.message[0]);
  img.setAttribute("class", "img-dog");

  //setando nome da raça
  nameDog.appendChild(h1)
  imgContainer.appendChild(img);

  //colocando os elementos na div
  div.appendChild(nameDog);
  div.appendChild(imgContainer);

  //colocando a div na div container
  dataDog.appendChild(div)

  //limpando input
  input.value = ''
}

nameDog.innerHTML = ''
imgContainer.innerHTML = ''
