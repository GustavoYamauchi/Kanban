
let vet_fazer = [], vet_fazendo = [], vet_feito = [], vet_editar = [];



document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#FazerAdicionar").addEventListener("click", function () {
        const tarefa_fazer = document.querySelector("#tarefa_fazer").value;
        adicionarFazer(tarefa_fazer);
        fazer();

    });
    document.querySelector("#FazendoAdicionar").addEventListener("click", function () {
        const tarefa_fazendo = document.querySelector("#tarefa_fazendo").value;
        adicionarFazendo(tarefa_fazendo);
        fazendo();
    });
    document.querySelector("#FeitoAdicionar").addEventListener("click", function () {
        const tarefa_feito = document.querySelector("#tarefa_feito").value;
        adicionarFeito(tarefa_feito);
        feito();
    });


});

/*começo fazer*/
function adicionarFazer(titulo) {
    vet_fazer.push(titulo);
    tarefa_fazer.value = " ";
}

function fazer() {

    var fazer = document.querySelectorAll(".fazeres");

    for (let i = 0; i < fazer.length; i++) {
        if (fazer[i].id != "base-fazer") {
            fazer[i].remove();
        }
    }

    for (let i = 0; i < vet_fazer.length; i++) {
        const cloneItem = document.querySelector("#base-fazer").cloneNode(true);
        const parent = document.querySelector("#fazer");
        parent.appendChild(cloneItem);
        cloneItem.classList.remove("oculto");
        cloneItem.id = 'fazer-' + i;
        cloneItem.classList.add("aparecer");
        cloneItem.querySelector(".titulo").textContent = vet_fazer[i];
        cloneItem.querySelector(".rem").addEventListener("click", remover_fazer);
        cloneItem.querySelector(".rem").id = "rem" + i;
        cloneItem.querySelector(".mover-fazendo").addEventListener("click", mover_fazendo);
        cloneItem.querySelector(".mover-fazendo").id = "mov_fazendo" + i;
        cloneItem.querySelector(".mover-fazendo").classList.add("1");
        cloneItem.querySelector(".mover-feito").addEventListener("click", mover_feito);
        cloneItem.querySelector(".mover-feito").id = "mov_feito" + i;
        cloneItem.querySelector(".mover-feito").classList.add("1");

        cloneItem.querySelector(".edit").id = "edit" + i;
        cloneItem.querySelector(".edit").classList.add("1");
        cloneItem.querySelector(".collapse").id = "editarfazer" + i;
        cloneItem.querySelector(".collapse").classList.add("1");
        cloneItem.querySelector(".edit").setAttribute('data-target', "#editarfazer" + i);

        cloneItem.querySelector(".confirmacao-novo").addEventListener("click", editar);
        cloneItem.querySelector(".confirmacao-novo").id = "confirmacao" + i;
        cloneItem.querySelector(".confirmacao-novo").classList.add("1");

        cloneItem.querySelector(".novo-texto").id = "novofazer" + i;
        cloneItem.querySelector(".novo-texto").classList.add("1");

    }

}



function remover_fazer(e) {
    const idFazer = parseInt(e.target.id.substring(3));
    vet_fazer.splice(idFazer, 1);
    fazer();
}




/*fim fazer*/


/*começo fazendo*/
function adicionarFazendo(titulo) {
    vet_fazendo.push(titulo);
    tarefa_fazendo.value = "";
}

function fazendo() {

    const fazendo = document.querySelectorAll(".fazendo");

    for (let i = 0; i < fazendo.length; i++) {
        if (fazendo[i].id != "base-fazendo") {
            fazendo[i].remove();
        }
    }

    for (let i = 0; i < vet_fazendo.length; i++) {
        const cloneItem = document.querySelector("#base-fazendo").cloneNode(true);
        const parent = document.querySelector("#fazendo");
        parent.appendChild(cloneItem);
        cloneItem.classList.remove("oculto");
        cloneItem.id = 'fazendo-' + i;
        cloneItem.classList.add("aparecer");
        cloneItem.querySelector(".titulo").textContent = vet_fazendo[i];

        cloneItem.querySelector(".rem").addEventListener("click", remover_fazendo);
        cloneItem.querySelector(".rem").id = "rem" + i;
        cloneItem.querySelector(".mover-fazer").addEventListener("click", mover_fazer);
        cloneItem.querySelector(".mover-fazer").id = "mov_fazer" + i;
        cloneItem.querySelector(".mover-fazer").classList.add("2");
        cloneItem.querySelector(".mover-feito").addEventListener("click", mover_feito);
        cloneItem.querySelector(".mover-feito").id = "mov_feito" + i;
        cloneItem.querySelector(".mover-feito").classList.add("2");

        cloneItem.querySelector(".edit").id = "edit" + i;
        cloneItem.querySelector(".edit").classList.add("2");
        cloneItem.querySelector(".collapse").id = "editarfazendo" + i;
        cloneItem.querySelector(".collapse").classList.add("2");
        cloneItem.querySelector(".edit").setAttribute('data-target', "#editarfazendo" + i);

        cloneItem.querySelector(".confirmacao-novo").addEventListener("click", editar);
        cloneItem.querySelector(".confirmacao-novo").id = "confirmacao" + i;
        cloneItem.querySelector(".confirmacao-novo").classList.add("2");

        cloneItem.querySelector(".novo-texto").id = "novofazendo" + i;
        cloneItem.querySelector(".novo-texto").classList.add("2");


    }

}

function remover_fazendo(e) {
    const idFazendo = parseInt(e.target.id.substring(3));
    vet_fazendo.splice(idFazendo, 1);
    fazendo();
}
/*fim fazendo */


/*começo feito*/
function adicionarFeito(titulo) {
    vet_feito.push(titulo);
    tarefa_feito.value = "";
}

function feito() {

    const feito = document.querySelectorAll(".feito");

    for (let i = 0; i < feito.length; i++) {
        if (feito[i].id != "base-feito") {
            feito[i].remove();
        }
    }

    for (let i = 0; i < vet_feito.length; i++) {
        const cloneItem = document.querySelector("#base-feito").cloneNode(true);
        const parent = document.querySelector("#feito");
        parent.appendChild(cloneItem);
        cloneItem.classList.remove("oculto");
        cloneItem.id = 'feito-' + i;
        cloneItem.classList.add("aparecer");
        cloneItem.querySelector(".titulo").textContent = vet_feito[i];

        cloneItem.querySelector(".rem").addEventListener("click", remover_feito);
        cloneItem.querySelector(".rem").id = "rem" + i;
        cloneItem.querySelector(".mover-fazer").addEventListener("click", mover_fazer);
        cloneItem.querySelector(".mover-fazer").id = "mov_fazer" + i;
        cloneItem.querySelector(".mover-fazer").classList.add("3");
        cloneItem.querySelector(".mover-fazendo").addEventListener("click", mover_fazendo);
        cloneItem.querySelector(".mover-fazendo").id = "mov_fazendo" + i;
        cloneItem.querySelector(".mover-fazendo").classList.add("3");
        cloneItem.querySelector(".edit").id = "edit" + i;
        cloneItem.querySelector(".edit").classList.add("3");
        cloneItem.querySelector(".collapse").id = "editarfeito" + i;
        cloneItem.querySelector(".collapse").classList.add("3");
        cloneItem.querySelector(".edit").setAttribute('data-target', "#editarfeito" + i);

        cloneItem.querySelector(".confirmacao-novo").addEventListener("click", editar);
        cloneItem.querySelector(".confirmacao-novo").id = "confirmacao" + i;
        cloneItem.querySelector(".confirmacao-novo").classList.add("3");

        cloneItem.querySelector(".novo-texto").id = "novofeito" + i;
        cloneItem.querySelector(".novo-texto").classList.add("3");
    }

}

function remover_feito(e) {
    const idFeito = parseInt(e.target.id.substring(3));
    vet_feito.splice(idFeito, 1);
    feito();
}
/*fim feito */

/* função para o mover dos blocos para "fazendo" */
function mover_fazendo(e) {
    const idFazer = parseInt(e.target.id.substring(11));
    const idFeito = parseInt(e.target.id.substring(11));
    const classe = e.target.classList;
    if (classe == "btn-group-sm btn-outline-info mover-fazendo 1") {
        let valor = vet_fazer[idFazer];
        vet_fazer.splice(idFazer, 1);
        vet_fazendo.push(valor);
        fazer();
    }
    else {

        let valor = vet_feito[idFeito];
        vet_feito.splice(idFeito, 1);
        vet_fazendo.push(valor);
        feito();

    }
    fazendo();
}




/* função para o mover dos blocos para "feito" */
function mover_feito(e) {
    const idFazer = parseInt(e.target.id.substring(9));
    const idFazendo = parseInt(e.target.id.substring(9));
    const classe = e.target.classList;
    if (classe == "btn-group-sm btn-outline-info mover-feito 1") {
        let valor = vet_fazer[idFazer];
        vet_fazer.splice(idFazer, 1);
        vet_feito.push(valor);
        fazer();
    }
    else {
        let valor = vet_fazendo[idFazendo];
        vet_fazendo.splice(idFazendo, 1);
        vet_feito.push(valor);
        fazendo();
    }
    feito();
}


/*fim da função */

/* função para o mover dos blocos para "fazendo" */
function mover_fazer(e) {
    const idFazendo = parseInt(e.target.id.substring(9));
    const idFeito = parseInt(e.target.id.substring(9));
    const classe = e.target.classList;
    if (classe == "btn-group-sm btn-outline-info mover-fazer 2") {
        let valor = vet_fazendo[idFazendo];
        vet_fazendo.splice(idFazendo, 1);
        vet_fazer.push(valor);
        fazendo();
    }
    else {
        let valor = vet_feito[idFeito];
        vet_feito.splice(idFeito, 1);
        vet_fazer.push(valor);
        feito();

    }
    fazer();
}
/* função de editar o conteudo da div */

/*Função para editar */
function editar(e) {
    const idFazer = parseInt(e.target.id.substring(11));
    const idFazendo = parseInt(e.target.id.substring(11));
    const idFeito = parseInt(e.target.id.substring(11));

    const classe = e.target.classList;
    if (classe == "btn btn-outline-success confirmacao-novo 1") {
        const inputFazer = document.querySelector("#novofazer" + idFazer).value;
        vet_fazer[idFazer] = inputFazer;
        fazer();
    }
    else {
        if (classe == "btn btn-outline-success confirmacao-novo 2") {
            const inputFazendo = document.querySelector("#novofazendo" + idFazendo).value;
            vet_fazendo[idFazendo] = inputFazendo;
            fazendo();
        }
        else {
            const inputFeito = document.querySelector("#novofeito" + idFeito).value;
            vet_feito[idFeito] = inputFeito;
            feito();
        }
    }
}

/*fim da função */