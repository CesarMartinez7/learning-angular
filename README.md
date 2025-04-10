
# Aprendiendo Angular 19
 
Para empezar es necesario tener instalado la version de node especifica segun el proyecto que quieras iniciar tmb me recomendaron la version 16 de angular porque suele ser muy estable.

Primer paso es tener ng instalado, si no esta instalado se tiene que instalar con el siguiente comando de forma global

```bash
npm install -g @angular/cli 
```

Para ejecutar el servidor de angular se ejecuta el siguiente comando, este comando compila y lanza un puerto que servira al proyecto en modo desarrollo

```bash
    ng serve && npm start
```

## Conceptos de Angular

*`Que es un pipe:`* Los pipes son funciones que se ejecutan antes de mostrarse en la vista, mejor dicho son  funciones que se transforman antes de mostrarse en la vista del usuario y se utilizan junto a la __interpolacion__ y se utilizan con el operador `|`



*`Servicios`* :  Los servicios podriamos decir que son los llamados customHooks de react que nos permiten llevar la logica de un componente para que puedan ser reautilizados, o simplemente llevarlos fueras de componente principal, La verdadera 
`Definicion` es que son simplemente clases que nos permiten encapsular logica reutilizable y permite la comunicacion entre un componente

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
## Templates 

 En angular los templates son pedazos de codigo HTML que nos permite y nos sirve para escribir algunas caracteristicas de angular y no es necesario incluir etiquetas como `<body>` `<base>` `<html>` y se ignora la etiqueta `<script>` por seguridad, y esta definidos solo para definir la interfaz o diretris

 ##  Binding Syntax

 El encuadernamiento de datos nos permite personalizar el HTML especificando valores con atributos de cadena desde el HTML , lo q nos propociona el encuadernamiento de datos es simplemente inicializar esta parte, como por dicho desde el __JS__ o __Angular__ en vez del HTML, es decir que funcionan desde el doom:

 Ejemplos de personlizacion de los atributos de cadena desde javascript

### Los cuatro tipos de Biding syntax son

#### Interpolation - Interpolacion

`app.component.html`
``` html
<p>{{ name }}</p>
```
`app.component.ts`

```ts
export default class AppComponent {
    name: string = "Soy angulativo"
}
```

#### Property Binding 

`app.component.html`
```html
<input [value]="message" />
```
`app.component.ts`
```ts
export default class AppComponent {
    message = "Hello soy el valor de un input 😂"
}
```

#### Event Binding 

`app.component.html`
```html
<button (click)="funcionARealizar()" >Presioname</button>
```
`app.component.html`


#### Two-Way biding



## Renderizado de clases condicional

Angular tiene su propia directiva llamada `ngClass` que nos permite darle estilos condicionales a una etiqueta de html y hay diferentes formas de hacerlo, en un `string`, `array` y en un `objeto`, le pasamos nuestro argumento, algo sencillo como un ternario estaria bien y despues nuestras clases para que se ejecuten dependiendo de la funcion


### Sintaxis
```html
<button [ngClass]="<expresion_si_si> ? ´clase_si_Si´ : ´clase_si_No´ " >Presioname</button>
```

## Signals

Los signals son una nuevo manejo de estado hecho por angular similares a los estados de `react`, tienen un effect y asi como señales, cuando algo cambia este verifica si cambia algo en la ui y lo actualiza, la diferencia de las señales con los estados de react es que los señales estan hecos para una mejor optimizacion, ademas que tiene diferentes metods que podrian ayudarnos y no solo un `setteador`.

### Sintaxis

```ts

const contador = signals(0);

handleChangeContador (){
    this.contador.set(this.contador() + 1)
}

```


## Tipos de Pipes

Pipes de string 

```ts
{{"hola mundo" | uppercase }}
{{"hola mundo" | lowercase }}
```

Pipes de fecha `fecha`
```ts
{{fecha | date:"dd/MM/yyyy"}}

```
Pipes de formato de moneda o `currency`
```ts
{{fecha | date:"dd/MM/yyyy"}}
```

Pipes de `json`
 
```ts
{{data | json}}
```

> [!NOTE]
> Se pueden crear Pipes personalizables .

En resumen los pipes son funciones que se transforman antes de mostrarse en la vista y se utilizan con el operador | en las plantillas de Angular y nos permiten hacer cosas simples para la vista del usuario

## Comandos Angular Cli

```sh
ng generate component
```

```bash
ng generate module
```

```bash
ng generate service
```

```bash
ng generate directive
```

# Decoradores en Angular 


    @Component: se utiliza para definir un componente en Angular. Se utiliza para especificar la plantilla, estilos y metadatos asociados con el componente.
    @Directive: se utiliza para definir una directiva personalizada en Angular. Las directivas se utilizan para agregar comportamientos específicos a elementos de la interfaz de usuario.
    @NgModule: se utiliza para definir un módulo en Angular. Los módulos se utilizan para agrupar componentes, directivas, servicios y otros objetos relacionados entre sí.
    @Pipe: se utiliza para definir una tubería en Angular. Las tuberías se utilizan para transformar datos en tiempo real en una plantilla.
    @Injectable: se utiliza para definir un servicio en Angular. Los servicios son una forma de compartir datos y funcionalidades entre componentes.
    @Input: se utiliza para definir una propiedad de entrada en un componente. Las propiedades de entrada se utilizan para pasar datos a un componente desde un componente padre.
    @Output: se utiliza para definir un evento en un componente. Los eventos se utilizan para enviar datos desde un componente hijo a un componente padre.
    @HostBinding: se utiliza para enlazar una propiedad de un componente a una propiedad del elemento DOM que lo contiene.
    @HostListener: se utiliza para escuchar eventos del elemento DOM que contiene el componente.
    @ContentChild: se utiliza para obtener una referencia al primer elemento secundario coincidente de un componente.
    @ContentChildren: se utiliza para obtener una referencia a todos los elementos secundarios coincidentes de un componente.
    @ViewChild: se utiliza para obtener una referencia al primer elemento hijo coincidente de un componente.
    @ViewChildren: se utiliza para obtener una referencia a todos los elementos hijos coincidentes de un componente.
    @Attribute: se utiliza para obtener el valor de un atributo en un elemento DOM.
    @Self: se utiliza para indicar que una inyección de dependencia debe ser resuelta solo en el propio componente.
    @Optional: se utiliza para indicar que una inyección de dependencia es opcional y no causará un error si no se puede resolver.
    @SkipSelf: se utiliza para indicar que una inyección de dependencia debe ser resuelta por un componente superior en la jerarquía de componentes.
    @Inject: se utiliza para especificar un proveedor de inyección de dependencia personalizado en un componente.


# Cosas a tener en cuenta

Me llevo 5 minutos arreglar una interfaz y fue simplemente porque la interfaz que puse se encontraba debajo del decorador `@Component` algo que sin escusa tiene sentido ya q este espera si o si un componente en clase, pero es algo a tener en cuenta sin duda.


# Pensamientos propios

Creo que ya voy entendiendo el sistema de modulos y el standalone al menos lo que creo, el standalone lo que nos permite es tener los mismos importes como si fuera en un @ngModule o algo asi, ya se me olvido


# Importacion De Componentes En Angular

La importacion de componentes en angular al menos en la ultima version permite importarlo en ponerlo en componentes padres, solo hace falta importar ese componente en los imports de la metadata del componente padre

```ts
@Component({
    selector: "app-padre",
    imports: [ ComponenteHijo ]
    standalone: true
})
```