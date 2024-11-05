## 1. Declaración de Variables

- `var`: Declara variables de alcance global o de función, pero es propenso a errores por su alcance no restringido.
- `let`: Declara variables de alcance de bloque (dentro de `{ }`). Es la forma recomendada cuando el valor puede cambiar.
- `const`: Declara constantes, es decir, variables cuyo valor no debe cambiar.

```javascript
var nombre = "Juan";
let edad = 25;
const pais = "México";`
```

## 2. Tipos de Datos

- Números: `let numero = 10;`
- Cadenas: `let texto = "Hola";`
- Booleanos: `let esVerdadero = true;`
- Arreglos: `let lista = [1, 2, 3];`
- Objetos: `let persona = { nombre: "Juan", edad: 25 };`
- `null` y `undefined`: Valores vacíos o sin definir.

## 3. Operadores Básicos

- Aritméticos: `+`, `-`, `*`, `/`, `%` (módulo)`.
- Asignación: =`, `+=`, `-=`, `\*=`, `/=`.
- Comparación: `==`(igualdad), `===` (igualdad estricta), `!=`, `!==`, `<`, `>`, `<=`, `>=`.
- Lógicos: `&&` (y), `||` (o), `!` (no).

## 4. Estructuras de Control

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

## 5. Funciones

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

## 6. Arreglos (Arrays)

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

## 8. Manejo del DOM (Document Object Model)

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

## 9. Promises (Promesas)

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

## 10. JSON (JavaScript Object Notation)

- Formato de intercambio de datos entre aplicaciones.
- Convertir objeto a JSON: `JSON.stringify(objeto)`
- Convertir JSON a objeto: `JSON.parse(cadena)`

```javascript
let persona = { nombre: "Carlos", edad: 28 };
let json = JSON.stringify(persona);
let objeto = JSON.parse(json);
```
