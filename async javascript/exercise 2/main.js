function adicionar() {
  var input = document.querySelector('div#app input');
  var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users/'+ input.value + '/repos');
      xhr.send(null);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject('Erro na requisição');
          }
        }
      }
    });
  }

var mainElement = document.querySelector('div#app');

var list = document.createElement('ul');

var liElement;

minhaPromise()
  .then(function(response) {
    for(let index = 0; index < response.length; index++) {
      liElement = document.createElement('li');
      var text = document.createTextNode(response[index].name);
      liElement.appendChild(text);
      list.appendChild(liElement);
    }
    mainElement.appendChild(list);
    console.log(response.length);
  })
  .catch(function(error) {
    console.warn(error);
  });

}



//fazer um onclick no botao que recupera o valor do input e faz a pesquisa
//diretamente na api do github utilizando ajax.













// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/dortoo/repos');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// }