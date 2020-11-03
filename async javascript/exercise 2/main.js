var mainElement = document.querySelector('div#app');

var list = document.createElement('ul');

var liElement;

function adicionar() {

  var input = document.querySelector('div#app input');

axios.get('https://api.github.com/users/' + input.value + '/repos')
  .then(function(response) {

    for(let index = 0; index < response.data.length; index++) {
      liElement = document.createElement('li');
      var text = document.createTextNode(response.data[index].name);
      liElement.appendChild(text);
      list.appendChild(liElement);
    }

    mainElement.appendChild(list);
    console.log(response.data.length);

  })
  .catch(function(error) {
    console.warn(error);
  });
}

