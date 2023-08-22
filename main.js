
const getUsers = async () => {
    try{
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await axios.get(url);
        console.log(response.data);

    }
    catch (error){
        console.error(error)
    }
}


const postUsers = async () => {
    try{
        const url = "https://jsonplaceholder.typicode.com/posts";
        const body = {
            id: 1,
            title: 'here i am ',
            body: 'my boy',
            userId: 1
          }
        const response = await axios.post(url,body);
        console.log(response);

    }
    catch (error){
        console.error(error)
    }
}


const container3Elements = document.querySelectorAll('.container3');
const container2 = document.querySelector('.container2');
const expandButton = document.querySelector('.container i');

let selectedContainer = null;
let isExpanded = false;
container2.htt

container3Elements.forEach(container => {
    container.addEventListener('click', () => {
        if (selectedContainer !== null && selectedContainer !== container) {
            selectedContainer.style.transform = 'translateX(0)';
            selectedContainer.style.backgroundColor = 'white';
        }

        container.style.transform = 'translateX(30px)';
        container.style.backgroundColor = 'green';
        selectedContainer = container;
    });
});

function expandContainer() {
    var container = document.querySelector('.container');
    container.classList.toggle('expanded');
    isExpanded = !isExpanded;

    if (isExpanded) {
        container2.style.alignItems = 'flex-start';
        expandButton.classList.remove('fa-bars');
        expandButton.classList.add('fa-times');
    } else {
        container2.style.alignItems = 'center';
        expandButton.classList.remove('fa-times');
        expandButton.classList.add('fa-bars');
    }

    const iconNames = document.querySelectorAll('.icon-name');
    iconNames.forEach(name => {
        name.style.display = isExpanded ? 'inline-block' : 'none';
    });
}

// const container3Elements = document.querySelectorAll('.container3');

// const container2 = document.querySelector('.container2');

// let selectedContainer = null;

// container3Elements.forEach(container => {
//     container.addEventListener('click', () => {
//         if (selectedContainer !== null && selectedContainer !== container) {
//             selectedContainer.style.transform = 'translateX(0)'; // Restablece la posición del contenedor previamente seleccionado
//             selectedContainer.style.backgroundColor = 'white'; // Restablece el color de fondo del contenedor previamente seleccionado
//         }

//         container.style.transform = 'translateX(30px)'; // Mueve el contenedor seleccionado hacia la derecha
//         container.style.backgroundColor = 'green'; // Cambia el color de fondo del contenedor seleccionado
//         selectedContainer = container;
//     });
// });

// function expandContainer() {
//     var container = document.querySelector('.container');
//     container.classList.toggle('expanded');
//      if (container.classList.contains('expanded')) {
//         container2.style.alignItems = 'flex-start'; // Alinea el contenido a la izquierda cuando se expande
//     } else {
//         container2.style.alignItems = 'center'; // Restaura el alineamiento original cuando se reduce
//     }
//     const iconNames = document.querySelectorAll('.icon-name');
//     iconNames.forEach(name => {
//         name.style.display = container.classList.contains('expanded') ? 'inline-block' : 'none';
//     });
// }