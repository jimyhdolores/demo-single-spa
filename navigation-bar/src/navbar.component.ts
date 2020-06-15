import styles from "./navbar.component.scss";

import { appendStyles } from "./utils/append-styles.util";



export class NavBar extends HTMLElement {

    public connectedCallback() {


        const shadow = this.attachShadow({ mode: 'closed' });
        appendStyles(shadow, styles);


        const ul = document.createElement('ul');
        const liReact = document.createElement('li');
        const liAngular9 = document.createElement('li');
        const liVue = document.createElement('li');
        const liEnviarMensaje = document.createElement('li');
        const input = document.createElement('input');

        const labelMensajeRespuesta = document.createElement('label');
        labelMensajeRespuesta.className = 'link';
        window.addEventListener("respuesta", (evt: CustomEvent) => {
            console.log("respuesta--------- ", evt.detail.respuesta);
            labelMensajeRespuesta.innerText = evt.detail.respuesta;
        });

        liReact.innerText = 'React';
        liReact.className = 'link';
        liAngular9.innerText = 'Angular 9';
        liAngular9.className = 'link';
        liVue.innerText = 'VueJS';
        liVue.className = 'link';
        liEnviarMensaje.innerText = 'Enviar Mensaje';
        liEnviarMensaje.className = 'link';

        // liAngular7.addEventListener('click', () => {
        //     NavBar.navegar('/angular-siete');
        // });

        liEnviarMensaje.addEventListener('click', () => {
            const mensaje = input.value;
            var evento = new CustomEvent('mensaje', { detail: { saludo: mensaje } });
            window.dispatchEvent(evento);
        });

        liReact.addEventListener('click', () => {
            NavBar.navegar('/react-hook');
        });
        liAngular9.addEventListener('click', () => {
            NavBar.navegar('/angular-nueve');
        });
        liVue.addEventListener('click', () => {
            NavBar.navegar('/vue');
        });
        ul.appendChild(liReact);
        ul.appendChild(liAngular9);
        ul.appendChild(liVue);
        ul.appendChild(input);
        ul.appendChild(liEnviarMensaje);
        ul.appendChild(labelMensajeRespuesta);
        ul.className = 'ul-container';


        const divContainer = document.createElement('div');
        divContainer.className = "navbar-container";
        divContainer.appendChild(ul);

        shadow.appendChild(divContainer);
    }

    private static navegar(ruta) {
        history.pushState(null, null, ruta);
    }
}
