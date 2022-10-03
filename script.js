const api = "https://curious-fox-flannel-nightgown.cyclic.app"

async function getAPI(url) {
    const res = await fetch(url);
    const data = await res.json()
    return data;
}


// fetch(api)
// .then(res => res.json())
// .then(code => document.body.innerHTML = code[0].code)

// document.body.innerHTML = code[0].code

console.log(getAPI(api));