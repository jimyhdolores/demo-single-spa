<img src="logo-single-spa.jpg" width="100" height="100"/>


#Demo Single-SPA

Esta demo consta de 5 proyectos.

## root-container
Este proyecto sera nuestro root.config, es quien registrara a nuestros micro frontend, y sera orquestado con SystemJS
https://single-spa.js.org/docs/configuration

## navigation-bar

Este proyecto es una aplicación que solo usa HTML y Javascript (Web components), creamos un Navar extendiendo HTMLElement, Single-SPA puede trabajar incluso con html y javascript Nativo.

El componente lo usaremos para mostrar las otras aplicaciones y tambien servira como un Chat, para intercambiar mensajes con otra aplicación en esta caso con el proyecto "react-hook"
https://single-spa.js.org/docs/ecosystem-html-web-components

## Vue

Este proyecto es una aplicación sencilla con VueJS
https://single-spa.js.org/docs/ecosystem-vue

## react-hook

Este proyecto es una aplicación sencilla con React, usaremos este proyecto para que se pueda comunicar con el proyecto  "navigation-bar" a traves de CustomEvent. 
https://single-spa.js.org/docs/ecosystem-react

## angular-nueve

Este proyecto es una aplicación sencilla con Angular, en este caso la version 9 
https://single-spa.js.org/docs/ecosystem-angular


Deben de ingresar a cada carpeta del proyecto y correr el comando
**npm install**

Una vez que hayan terminado de realizar la instalación de los paquetes, por cada proyecto debe de correr el comando 
**npm run start**

luego ir a la dirección http://localhost:9000

Para más información del Framework vaya ha https://single-spa.js.org/
