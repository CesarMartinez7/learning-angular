# Aprendiendo Angular 

Para empezar es necesario tener instalado la version de node especifica segun el proyecto que quieras iniciar tmb me recomendaron la version 16 de angular porque suele ser muy estable.

Primer paso es tener ng instalado, si no esta instalado se tiene que instalar con el siguiente comando de forma global

```
npm install -g @angular/cli
```

Para ejecutar el servidor de angular se ejecuta el siguiente comando, este comando compila y lanza un puerto que servira al proyecto en modo desarrollo
```
    ng serve
```

## Conceptos de Angular

*`Servicios`* :  Los servicios podriamos decir que son los llamados customHooks de react que nos permiten llevar la logica de un componente para que puedan ser reautilizados, o simplemente llevarlos fueras de componente principal, La verdadera `Definicion` es que son simplemente clases que nos permiten encapsular logica reutilizable y permite la comunicacion entre un componente

*`RxJS`*: React Extensiones para Javascript.

*`HttpClient`*: HttpClient es un servicio ya definido de angular que nos permite hacer peticiones en Angular por medio de servicios.

*`selector Props`* : Es el nombre que se le da en el documento html o la etiqueta.

*`templateUrl`* : Es la ruta de donde se encuentra el documente html del componente.

*`template`* : Puedes poner tu documento html aqui tambien, pero lo mejor seria separar la vista de la logica lo mas posible.

*`CommonModule`* : Son aquellos componentes que son dependientes de sus modulos

*`imports en @Component`* : Se utiliza para importar modulos o componentes que el componente necesita para funcionar. Por ejemmplo al utilizar standalone y querer utilizar el *ng necesitamos importar el CommonModule para que este traiga esas funcionalidades

` ngOnInit`: Se ejecuta despues que angular crea el componente perfecto para ejecutar llamadas apis y todo lo demas, mucho mas recomendable que el metodo constructor de Angular , para implementar algo de el se utiliza la herencia de __JS__ con el implements metodo de clase.


## Estructuras de Carpetas Sencilla

```
/nombre-del-proyecto
│── 📂 src
│   ├── 📂 app
│   │   ├── 📂 core        → Servicios globales, guards, interceptores  
│   │   ├── 📂 shared      → Componentes, pipes y directivas reutilizables  
│   │   ├── 📂 modules     → Módulos organizados por funcionalidad  
│   │   ├── 📂 pages       → Componentes específicos de cada página  
│   │   ├── 📂 components  → Componentes generales usados en varias partes  
│   │   ├── 📂 services    → Servicios específicos de cada módulo  
│   │   ├── app.module.ts  → Módulo principal  
│   │   ├── app.component.ts  → Componente raíz  
│   ├── 📂 assets         → Imágenes, fuentes, JSON, etc.  
│   ├── 📂 environments   → Configuración de entornos (`prod`, `dev`)  
│   ├── main.ts           → Punto de entrada de Angular  
│   ├── index.html        → Archivo principal HTML  
│── angular.json          → Configuración de Angular  
│── package.json          → Dependencias del proyecto  
│── tsconfig.json         → Configuración de TypeScript  
```

Angular para componentes grandes la mejor manera de escribir los componentes en features si son rutas o components carpeta por si es una carpeta, dentro de estos directorios debe ir el archivo __TS__ el archivo __CSS__ el archivo __HTML__ y opcional el de las rutas de ese componente para manejar esa ruta

## Rutas Angular v19
Para manejar las rutas de angular se necesita el archivo app.route.ts, funciona similar al outlet de javascript, mejor dicho en react para poner que queremos poner se envuelve ese componente dentro de ello

```ts
import { Routes } from "..."
import { NormalComponent } from "..."

export const routes: Routes = [
    { path: "" , component: NormalComponent }
];

```

Recibe una lista de objectos que contiene la ruta junto a al elemento, similar a la sintaxis de  `react-router-dom`

## Comandos Basicos

Los comandos son similares a los comandos de __Vite__ en React


Para ofuscar el codigo , optimizar el codigo y frontend para produccion.

``` bash
ng build
```
El comando crea el tipico directorio __dist__ que contiene todo el codigo para produccion.

Alternativa sencilla en el package.json a __ng serve__
``` bash
ng start 
```

Para todo lo que tiene que ver con testing esta el comando:
``` bash
ng test
```

# Inicio 

Aprendi cosas sencillas como el cambio de nombres en los templates y como funcionan las templates sencillas en angular para mandar bloques de codigo, tambien lo sencillo de como funcionan las rutas, como poner algunas carpetas y esctructurar los componentes y rutas y tambien algunas cosas para el funcionamiento detras de Angular


## Creacion de los componentes desde Angular CLI

```
ng generate component <name-component> --standalone --inline-template --skip-tests
```

El comando generara un directorio que tendra el componente de angular o ts y tambien los estilos de ese componente

```
| __ <name-component> 📁
|    |
    -- home.component.ts 
    -- home.component.css
```



<!-- ## A

..... -->


## Manejo de Eventos en Angular

En angular los eventos funcionan algo similar a react o la mayoria de framework o modulos javascript, su sintaxi es sencilla

```html
<button (click) = "mostrarAlgo()" >Presioname</button>
```

Donde `click` es el evento a hacer y __mostrarAlgo()__ es simplemente esa funcion o mejor dicho metodo que se hara cuando se dispare ese listener

Ahora la question seria donde esta la funcion que se ejecuta cuando se presiona el boton, sencillo en angular las funciones se definen en las mal llamadas `props` de un componente, es decir definen dentro del archivo `namecomponent.component.ts`

Tambien es importante saber que esas funciones son mejor dicho metodos porque no es necesario darle a entender que son funciones a javascript, porque son mas metodos por asi decirlo porque estan dentro de la importacion de la clase.

Ejemplo de esto

```ts
export default class ButtonPressed {
    mostrarAlgo(){
        window.alert("Hola Soy tu primer componente Reactivo y no Angulativo ⚛️👑")
    }
}
```

## Ejemplos de Eventos de Angular


Evento __click__
```ts
(click) = "nombreFuncion()"
```
Evento __change__
```ts
(change) = "nombreFuncion()"
```
Evento __input__
```ts
(input) = "nombreFuncion()"
```
Evento __submit__
```ts
(submit) = "nombreFuncion()"
```
