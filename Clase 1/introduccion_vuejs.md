# Introducción a **Vue.js** 2
**Vue.js** es un marco de JavaScript progresivo y flexible para construir interfaces de usuario, especialmente conocido por su simplicidad y facilidad de integración. **Vue.js** 2 permite desarrollar aplicaciones interactivas basadas en componentes, donde cada componente es una parte autónoma de la interfaz (como un botón, formulario o sección de la página). Gracias a su curva de aprendizaje suave y su adaptabilidad, Vue se ha convertido en una opción popular tanto para aplicaciones de una sola página (SPA) como para aplicaciones complejas.

## ¿Por qué usar **Vue.js** 2?
### **Vue.js** 2 proporciona características robustas como:

Reactividad: Vue mantiene el estado de los datos sincronizado automáticamente con la interfaz.
Componentes: Vue promueve la modularidad a través de componentes reutilizables.
Directivas: Facilita el manejo de comportamientos comunes como mostrar u ocultar elementos, realizar bucles o escuchar eventos.
Integración: Puede usarse tanto en aplicaciones existentes como en proyectos completos desde cero.
Uso básico de **Vue.js** 2 mediante CDN
Para empezar a trabajar con **Vue.js** 2 sin necesidad de una configuración de desarrollo compleja, podemos usar el CDN de Vue. Esto permite incluir Vue en tu aplicación directamente desde un enlace sin instalar ningún paquete adicional.

### Como incluir **Vue.js** desde un CDN
Agrega el siguiente script en el <head> o al final del <body> de tu archivo HTML para incluir **Vue.js** desde el CDN:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplicación **Vue.js** 2</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>

  <div id="app">
    <!-- Aquí Vue manipulará el `DOM` -->
    <p>{{ mensaje }}</p>
    <button @click="invertirMensaje">Invertir mensaje</button>
  </div>

  <script>
    // Paso 2: Crear una instancia de Vue
    var app = new Vue({
      el: '#app', // Elemento `DOM` que Vue controlará
      data: {
        mensaje: '¡Hola desde Vue!'
      },
      methods: {
        invertirMensaje: function () {
          this.mensaje = this.mensaje.split('').reverse().join('')
        }
      }
    });
  </script>

</body>
</html>
```

### Explicación del código
Incluir Vue: Usamos el CDN de **Vue.js** para cargar la librería sin necesidad de descargar nada adicional.

Instancia de Vue: Creamos una instancia de Vue asociada al elemento #app, que es el contenedor de nuestra aplicación. Esto indica que Vue "controlará" el contenido dentro de este elemento.

- **el**: Punto de Montaje - Define el elemento del `DOM` en el que Vue "montará" la aplicación. En este caso, el: `#app` indica que Vue controlará el contenido del elemento con id="app".
- **Data**: Declaramos data, un objeto que contiene las propiedades de datos que queremos usar en el `DOM`, en este caso mensaje. Vue hace que este dato sea reactivo; cualquier cambio se reflejará automáticamente en el HTML.
- **Methods**: Definimos un método invertirMensaje que invierte el valor del mensaje al hacer clic en el botón. Este método es llamado mediante la directiva `@click`, que escucha eventos de clic en el botón.

### Esrtuctura Vue

```html
  <script>
    new Vue({
      // 1. el - Punto de Montaje
      el: '#app',

      // 2. data - Datos Reactivos
      data: {
        titulo: 'Ejemplo Completo de **Vue.js** 2',
        mensaje: '¡Hola! Bienvenido a **Vue.js** 2.',
        visible: true,
        lista: ['Elemento 1', 'Elemento 2', 'Elemento 3'],
        nuevoItem: ''
      },

      // 3. computed - Propiedades Computadas
      computed: {
        mensajeConFecha() {
          return `${this.mensaje} Hoy es ${new Date().toLocaleDateString()}`;
        }
      },

      // 4. methods - Métodos de la Instancia
      methods: {
        toggleVisible() {
          this.visible = !this.visible;
        },
        agregarItem() {
          if (this.nuevoItem.trim() !== '') {
            this.lista.push(this.nuevoItem);
            this.nuevoItem = ''; // Limpia el campo de entrada
          }
        }
      },

      // 5. watch - Observadores de Cambio
      watch: {
        nuevoItem(nuevoValor) {
          console.log('Nuevo valor de "nuevoItem":', nuevoValor);
        }
      },

      // 6. lifecycle hooks - Ciclo de Vida de la Instancia
      created() {
        console.log('La instancia de Vue ha sido creada');
      },
      mounted() {
        console.log('El componente ha sido montado en el `DOM`');
      },
      updated() {
        console.log('El `DOM` ha sido actualizado');
      },
      destroyed() {
        console.log('La instancia de Vue ha sido destruida');
      }
    });
  </script>
```
### Explicación de cada sección

#### el - Punto de Montaje
Define el elemento del DOM en el que Vue "montará" la aplicación. En este caso, el: '#app' indica que Vue controlará el contenido del elemento con id="app".

#### data - Datos Reactivos
Contiene las propiedades de datos que estarán disponibles en el componente. Los datos definidos aquí se vuelven "reactivos", lo que significa que cualquier cambio en estos datos se refleja automáticamente en la interfaz.
- Ejemplo:
    - **titulo**: un texto que se muestra como título.
    - **mensaje**: el mensaje principal.
    - **visible**: un booleano que controla la visibilidad de un párrafo.
    - **lista**: una lista de elementos que se renderiza en el HTML.
    - **nuevoItem**: una propiedad vinculada a un campo de entrada para agregar nuevos elementos a la lista.

#### computed - Propiedades Computadas
Son funciones que devuelven un valor basado en propiedades de data y otras propiedades de computed. Vue las almacena en caché, es decir, solo se recalculan si alguna de sus dependencias cambia.
- Ejemplo:
    - **mensajeConFecha**: una propiedad computada que concatena el mensaje con la fecha actual.

#### methods - Métodos de la Instancia
Define las funciones que pueden ejecutar acciones o manipular los datos de la instancia. Se pueden usar en el HTML o llamar desde otros métodos.
- Ejemplo:
    - **toggleVisible**: invierte el valor de visible para mostrar u ocultar el párrafo.
    - **agregarItem**: añade un nuevo elemento a lista a partir del valor de nuevoItem.

#### watch - Observadores de Cambio
Se utilizan para observar y reaccionar a cambios en propiedades específicas. Los observadores son útiles cuando se necesita ejecutar alguna acción adicional en respuesta a una modificación en los datos.
- Ejemplo:
    - **nuevoItem**: cada vez que el usuario escribe en el campo de entrada, el valor de nuevoItem cambia, y el observador registra este cambio en la consola.

#### Lifecycle Hooks - Ciclo de Vida de la Instancia
Vue proporciona varios "ganchos" o "hooks" que se ejecutan en diferentes etapas del ciclo de vida de una instancia. Estos se pueden utilizar para ejecutar código en momentos específicos del ciclo de vida del componente.
- Ejemplo:
    - **created()**: se ejecuta cuando la instancia de Vue se crea, pero aún no está montada en el `DOM`.
    - **mounted()**: se ejecuta después de que el componente se monta en el `DOM`.
    - **updated()**: se ejecuta cada vez que el `DOM` se actualiza.
    - **destroyed()**: se ejecuta cuando la instancia de Vue es destruida.