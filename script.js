
const number = Math.round(Math.random() *(214-1)+1);

const randomCharacters = async () => {
    const response = await fetch(`http://ccdb.hemiola.com/characters/radicals/${number}`);
    const data = response.json();
    return data;
  }
  
  const Characters = async () => {
    const characters = await randomCharacters();
    const html = characters.map((character) => (
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${character.string}</h5>
        </div>
      </div>`
      ));
    const div = document.querySelector(".container");
    console.log(html);
    div.innerHTML = html.join('');
    console.log(html.join(''));
  }
  