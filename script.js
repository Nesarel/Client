// const api = "https://curious-fox-flannel-nightgown.cyclic.app"
const api = "http://localhost:3000/1"

let BDD = []

// async function getAPI(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     BDD = data;
//     console.log(res);
//     console.log(data);
//     console.log(BDD);
//     return BDD;
// }


fetch(api)
.then(res => res.json())
.then(code => document.body.innerHTML = code[0].code)

// document.body.innerHTML = code[0].code

// getAPI(api)