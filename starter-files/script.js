// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 *
 *
 *
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const respuesta = document.getElementById('input');
const enviarlo = document.getElementById('');
const boton = document.getElementById('button');

boton.addEventListener('click', fetchAnswer);

function fetchAnswer() {
    fetch('https://yesno.wtf/api')
        .then(enviarlo => enviarlo.json())
        .then(datos => {
            inputDiv.innerText = datos.input;
            inputDiv.label.add(datos.enviarlo);
        });
}
