# Introducción a Javascript

[![Video de Ejemplo](https://i.ytimg.com/vi_webp/4Q_KWjUfPCU/maxresdefault.webp)](https://www.youtube.com/watch?v=4Q_KWjUfPCU&ab_channel=VictorRoblesWEB)
> Video resumen

## 1. ¿Qué es JavaScript?
JavaScript es un lenguaje de programación de alto nivel, dinámico y orientado a objetos. Es uno de los tres lenguajes fundamentales del desarrollo web, junto con HTML y CSS:

- **HTML** define la estructura de la página.
- **CSS** define el estilo y la apariencia visual.
- **JavaScript** añade interactividad y permite que la página responda a las acciones del usuario.

## 2. ¿Dónde se usa JavaScript?
JavaScript es un lenguaje muy versátil, y algunas de sus aplicaciones incluyen:

Front-end (lado del cliente): Se ejecuta directamente en el navegador, permitiendo manipular el DOM (Document Object Model) para hacer que una página sea interactiva.
Back-end (lado del servidor): Con la llegada de Node.js, JavaScript también se usa para programar el servidor, permitiendo construir aplicaciones completas con un solo lenguaje.
Desarrollo de aplicaciones móviles y de escritorio: Con frameworks como React Native y Electron, es posible crear aplicaciones móviles y de escritorio utilizando JavaScript.

## 3. Estructura básica de un programa en JavaScript
Aquí tienes un ejemplo de código JavaScript básico:

```javascript
// Esto es un comentario de una línea
/* Esto es un comentario de varias líneas */

// Declara una variable
let nombre = "Juan";
const edad = 25;

// Función simple
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Llamada a la función
console.log(saludar(nombre));  // Salida: Hola, Juan!
```
### Explicación del código:

`let` y `const` son palabras clave para declarar variables en JavaScript. `let` permite variables que pueden cambiar, mientras que `const` declara variables cuyo valor no puede ser reasignado.
La función saludar recibe un parámetro (nombre) y devuelve un saludo personalizado.
console.log() es una función que imprime un mensaje en la consola del navegador.

## 4. Estructuras de control, Variables y tipos de datos

### 4.1. Declaración de Variables

- `var`: Declara variables de alcance global o de función, pero es propenso a errores por su alcance no restringido.
- `let`: Declara variables de alcance de bloque (dentro de `{ }`). Es la forma recomendada cuando el valor puede cambiar.
- `const`: Declara constantes, es decir, variables cuyo valor no debe cambiar.

```javascript
var nombre = "Juan";
let edad = 25;
const pais = "México";`
```

### 4.2. Tipos de Datos

- Números: `let numero = 10;`
- Cadenas: `let texto = "Hola";`
- Booleanos: `let esVerdadero = true;`
- Arreglos: `let lista = [1, 2, 3];`
- Objetos: `let persona = { nombre: "Juan", edad: 25 };`
- `null` y `undefined`: Valores vacíos o sin definir.

### 4.3. Operadores Básicos

- Aritméticos: `+`, `-`, `*`, `/`, `%` (módulo)`.
- Asignación: =`, `+=`, `-=`, `\*=`, `/=`.
- Comparación: `==`(igualdad), `===` (igualdad estricta), `!=`, `!==`, `<`, `>`, `<=`, `>=`.
- Lógicos: `&&` (y), `||` (o), `!` (no).

### 4.4. Estructuras de Control

### Condicionales: Ejecutan bloques de código basados en una condición.

```javascript
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}
```

### Switch: Alternativa para múltiples condiciones basadas en el valor de una variable.

```javascript
let color = "rojo";
switch (color) {
  case "rojo":
    console.log("Es rojo");
    break;
  case "azul":
    console.log("Es azul");
    break;
  default:
    console.log("No es rojo ni azul");
}
```

### Bucles: Repiten acciones basadas en condiciones.

- `for`: Se usa cuando conocemos el número de iteraciones.

  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- `while`: Ejecuta el bloque mientras la condición sea `true`.

  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- `do...while`: Ejecuta el bloque al menos una vez antes de verificar la condición.
  ```javascript
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 5);
  ```

### 4.5. Funciones

- Declaración básica de funciones. Pueden recibir parámetros y retornar valores.

  ```javascript
  function suma(a, b) {
    return a + b;
  }
  let resultado = suma(3, 4); // 7
  ```

- Funciones de Flecha (Arrow Functions): Sintaxis moderna y más concisa.

  ```javascript
  const resta = (a, b) => a - b;
  let resultadoResta = resta(10, 5); // 5
  ```

### 4.6. Arreglos (Arrays)

- Declaración: `let frutas = ["manzana", "banana", "naranja"];`
- Métodos comunes:

  - `push()`: Agrega un elemento al final.
  - `pop()`: Elimina el último elemento.
  - `shift()`: Elimina el primer elemento.
  - `unshift()`: Agrega un elemento al inicio.
  - `forEach()`: Itera sobre cada elemento del array.
  - `map()`: Crea un nuevo array aplicando una función a cada elemento.

  ```javascript
  frutas.push("mango"); // ["manzana", "banana", "naranja", "mango"]
  frutas.forEach((fruta) => console.log(fruta));
  ```

7. Objetos

- Declaración: `let persona = { nombre: "Ana", edad: 30 };`
- Acceso a propiedades:

  ```javascript
  console.log(persona.nombre); // "Ana"
  persona.edad = 31; // Actualiza la propiedad 'edad'
  ```

### 4.8. Manejo del DOM (Document Object Model)

- Seleccionar elementos:

  - `document.getElementById("id")`
  - `document.querySelector(".clase")`
  - `document.querySelectorAll("etiqueta")`

- Modificar elementos:

  ```javascript
  let titulo = document.getElementById("titulo");
  titulo.textContent = "Nuevo título";
  titulo.style.color = "blue";
  ```

- Eventos: Permiten ejecutar funciones en respuesta a acciones del usuario.
  ```javascript
  let boton = document.getElementById("miBoton");
  boton.addEventListener("click", () => alert("¡Botón clickeado!"));
  ```

### 4.9. Promises (Promesas)

Son valores que estarán disponibles en el futuro. Útiles para manejar operaciones asíncronas.

```javascript
let promesa = new Promise((resolve, reject) => {
  let exito = true;
  if (exito) resolve("Operación exitosa");
  else reject("Operación fallida");
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));
```

### 4.10. JSON (JavaScript Object Notation)

- Formato de intercambio de datos entre aplicaciones.
- Convertir objeto a JSON: `JSON.stringify(objeto)`
- Convertir JSON a objeto: `JSON.parse(cadena)`

```javascript
let persona = { nombre: "Carlos", edad: 28 };
let json = JSON.stringify(persona);
let objeto = JSON.parse(json);
```


## Ejercicios de JavaScript
Familiarizarse con los conceptos clave de JavaScript como variables, funciones, arreglos, objetos, bucles y el manejo de promesas, que son fundamentales para el desarrollo de aplicaciones con Vue.js.



### Ejercicio 1: Variables y Tipos de Datos
- Descripción: Declarar diferentes tipos de variables en JavaScript y trabajar con ellas.
- Instrucciones:
  - Declara una variable nombre de tipo string y asígnale tu nombre.
  - Declara una variable edad de tipo number y asígnale tu edad.
  - Declara una variable esEstudiante de tipo boolean y asígnale un valor verdadero o falso.
  - Muestra en la consola los valores de las variables concatenando los mensajes (ej. “Mi nombre es …”).
- Concepto clave: Variables y tipos de datos.

Ejemplo:

``` javascript
const nombre = "Ana";
const edad = 25;
const esEstudiante = true;

console.log(`Mi nombre es ${nombre}, tengo ${edad} años y ${esEstudiante ? 'soy' : 'no soy'} estudiante.`);
```

### Ejercicio 2: Funciones
- Descripción: Crear funciones para reutilizar código.
- Instrucciones:
  - Define una función llamada suma que reciba dos parámetros numéricos y retorne su suma.
  - Define una función llamada saludar que reciba un nombre y devuelva un saludo personalizado, como “Hola, [nombre]!".
  - Llama a ambas funciones y muestra sus resultados en la consola.
- Concepto clave: Funciones y parámetros.

Ejemplo:
```javascript
function suma(a, b) {
    return a + b;
}

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(suma(5, 10)); // 15
console.log(saludar("Carlos")); // "Hola, Carlos!"
```

### Ejercicio 3: Arreglos y Bucles
- Descripción: Manipulación de arreglos y bucles.
- Instrucciones:
  - Crea un arreglo llamado frutas con al menos cinco nombres de frutas.
  - Usa un bucle for para recorrer el arreglo y mostrar en la consola cada fruta con su posición en el arreglo (ej. “0: Manzana”).
  - Agrega una nueva fruta al final del arreglo y muestra el arreglo actualizado en la consola.
- Concepto clave: Arreglos y bucles for.

Ejemplo:
```javascript
const frutas = ["Manzana", "Banana", "Naranja", "Mango", "Fresa"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i}: ${frutas[i]}`);
}

frutas.push("Sandía");
console.log(frutas);
```

### Ejercicio 4: Objetos
- Descripción: Trabajar con objetos y propiedades.
- Instrucciones:
  - Crea un objeto llamado persona con las propiedades nombre, edad, y ciudad.
  -Agrega un método presentarse que devuelva una frase como “Hola, soy [nombre] y tengo [edad] años, vivo en [ciudad].”
  - Llama al método presentarse y muestra el resultado en la consola.
- Concepto clave: Objetos y métodos.

Ejemplo:
```javascript
const persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",
    presentarse() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años, vivo en ${this.ciudad}.`;
    }
};

console.log(persona.presentarse());
```

### Ejercicio 5: Funciones de Orden Superior y Callbacks
- Descripción: Usar funciones como parámetros.
- Instrucciones:
  - Define una función llamada procesarArreglo que reciba un arreglo y una función de callback.
  - Dentro de procesarArreglo, usa un bucle para aplicar el callback a cada elemento del arreglo.
  -Crea un arreglo de números y llama a procesarArreglo, pasando una función que imprima el doble de cada número.
- Concepto clave: Funciones de orden superior y callbacks.

Ejemplo:
```javascript
function procesarArreglo(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

const numeros = [1, 2, 3, 4, 5];
procesarArreglo(numeros, (num) => console.log(num * 2));
```

### Ejercicio 6: Promesas y asincronía
- Descripción: Introducción a promesas y manejo asincrónico.
- Instrucciones:
  - Crea una función esperar que devuelva una promesa que se resuelva después de 2 segundos.
  - Usa then para mostrar un mensaje en la consola cuando la promesa se resuelva.
  - Usa async y await para llamar a esperar y mostrar el mensaje en la consola.
- Concepto clave: Promesas, asincronía, async y await.

Ejemplo:
```javascript
function esperar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tiempo de espera completado.");
        }, 2000);
    });
}

// Usando then
esperar().then((mensaje) => console.log(mensaje));

// Usando async/await
async function ejecutar() {
    const mensaje = await esperar();
    console.log(mensaje);
}

ejecutar();
```

### Ejercicio 7: Desestructuración y Operador Spread
- Descripción: Uso de desestructuración para simplificar el código.
- Instrucciones:
  - Declara un objeto curso con propiedades titulo, duracion, y profesor.
  - Usa desestructuración para extraer titulo y profesor, y muestra sus valores en la consola.
  - Usa el operador spread para combinar dos arreglos de números en uno solo y muestra el resultado.
- Concepto clave: Desestructuración y operador spread.

Ejemplo:
```javascript
const curso = {
    titulo: "JavaScript Avanzado",
    duracion: "3 meses",
    profesor: "Carlos"
};

const { titulo, profesor } = curso;
console.log(`Curso: ${titulo}, Profesor: ${profesor}`);

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numerosCombinados = [...numeros1, ...numeros2];
console.log(numerosCombinados);
```