// Passo 1: Pegar todos os pets da página

const pets = document.querySelectorAll(".pet");

//Passo 2: Pegamos os elementos do card principal

const nome = document.getElementById("nomeDoPet");
const descricao = document.getElementById("descricaoDoPet");
const fotografia = document.getElementById("fotoDoPetGrande");

//Passo 3: Colocar um "ouvido" em cada pet
//Laços de repetição, Vamos usar o FOR

// i - Indice

//Laço de repetição(for) (Variavel -nome = 0; pega a variavel (i)
//se for menor que "pets" , você vai pegar o indice e somais 1 valor (++)
// Comece no pet 0, depois vá para o pet 1, depois para o pet 2, depois para o pet 3, e por último o pet 4, onde finaliza a quantidade dos elementos que tem na variavel const pet.

//let i = 0
//Enquanto a variável i for menor que a quantidade da lista/extenção de pets, você vai pegar o i e adicionar mais 1.
for (let i = 0; i < pets.length; i++) {
  //Pegamos o pet atual

  const pet = pets[i];

  //Dentro dele, pegamos a imagem pequena(miniatura)
  //Dentro do pet vamos pegar a sua própria imagem

  const miniatura = pet.querySelector("img");

  //-------------------
  //Passo 4: Quando clicarem na miniatura(imagem)

  //Pega as informações e coloca no cars principal quando a miniatura fa imagem for clicada

  miniatura.addEventListener("click", () => {
    //Troca o nome grande, pelo nome do pet clicado.
    nome.textContent = pet.querySelector("h2").textContent; // Pegando pela tag

    //Troca a descrição
    descricao.textContent = pet.querySelector("p").textContent;

    //Troca a fot grande pela imagem clicada
    fotoDoPetGrande.src = miniatura.src;
  });
}
