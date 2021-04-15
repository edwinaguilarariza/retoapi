//url de la api a consumir
const API = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=00";

//consumir API

const getData = (api) => { 
    return fetch(api) 
    .then((response)=> response.json())
    .then((json) => { 
        llenarDatos(json), paginacion(json.info); 
        })  
        .catch((error) = () =>{
            console.log("error : ", error) 
        });
    }
        




const llenarDatos = (data) => {
    let html = "";
    data.results.forEach((pj) => { 
        html +=  '<div class="col mt-5">'; 
        html +=  '<div class="card" style="width:10rem">'; 
       // html +=  `<img src="${pj.image}" class="card-img-top">`;
        html +=   '<div class="card-body">';
        html +=   `<h5 class="card-title">${pj.name}</h5>`;
       // html +=   `<p class="card-text">${pj.spacies}</p>`;
        html +=  '</div>'; 
        html +=  '</div>'; 
        html +=  '</div>'; 
    });
    document.getElementById("datosPersonajes").innerHTML = html;
}


     


//paginacion

const paginacion = (info) => {
   

    let html = ""; 
    html += `<li class="page-item ${info.prev ? "" : "disabled"}"> <a class="page-link" onclick="getData('${info.prev}')">prev</a> </li>`;
    html += `<li class="page-item ${info.next ? "" : "disabled"}"> <a class="page-link" onclick="getData('${info.next}')">next</a> </li>`;
    document.getElementById("paginacion").innerHTML = html;
}



getData(API);