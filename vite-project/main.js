// function greet(name) {
//   const greetPromise = new Promise(function (resolve, reject) {
//     resolve(`Hello ${name}`);
//   });
//   return greetPromise;
// }
// const suzie = greet("suzie");
// console.log(suzie);

// suzie.then((result) => {
//   console.log(result);
// });

const URL = "https://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into a json we can use
    document.getElementById("api-response").textContent = data.content;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
