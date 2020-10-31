const userLeft = true;

const userWatchingCatMeme = false;

function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    if (idade >= 18) {
      setTimeout(() => resolve('Success!'), 2000);
  } else if ((idade < 18) && (idade >=1)) {
      setTimeout(() => reject('Failed!'), 2000);
  } else if (idade <= 0) {
      setTimeout(() => reject('Please type a valid age.'), 2000);
  }
  })
}

checaIdade(20)
  .then(function(message) {
    console.log("Maior que 18 - " + message);
  })
  .catch(function(message) {
    console.log("Menor que 18 - " + message);
  });




// watchTutorialPromise().then((message) => {
//     console.log('Success: ' + message);
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message);
// });



// const p = new Promise((resolve, reject) => {
//   let a = 1 + 2;

//   if (a === 2) {
//     resolve('Success');
//   } else {
//     reject('Failed');
//   }
// })


// p.then((message) => {
//   console.log('This is in the then ' + message)
// }).catch((message) => {
//   console.log('This is in the catch ' + message)
// })

//function checaIdade(idade) {
  // Retornar uma promise
// }





/*
axios.get('https://api.github.com/users/dortoo')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
*/