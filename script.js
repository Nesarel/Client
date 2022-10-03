const api = "http://localhost:3000"

let bdd = []

async function getAPI(url) {
    const res = await fetch(url);
    const data = await res.json();
    bdd = data;
    displayData(bdd);
}

function displayData(tabData){
    console.log(tabData);
    document.body.innerHTML = tabData[0].code
}


// fetch(api)
// .then(res => res.json())
// .then(code => document.body.innerHTML = code[0].code)

getAPI(api)
