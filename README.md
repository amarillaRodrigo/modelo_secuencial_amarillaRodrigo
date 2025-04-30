# Proyecto TensorFlow.js

Este proyecto de tensorflow.js crea y entrena un modelo secuencial basado en la fórmula lineal `y = 2x + 6`. El modelo se entrena utilizando 9 valores de muestra y permite a los usuarios ingresar un valor para `X` para predecir el valor correspondiente de `Y`.

## Estructura del Proyecto

```
├── src
│   ├── index.html
│   ├── index.js
├── package.json
└── README.md
```

### Requisitos Previos

Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

### Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

### Ejecutar la Aplicación

Para ejecutar la aplicación, abrir el archivo en un navegador

### Uso

Dentro de la pagina web, debe ingresar un valor numerico, para que el modelo se entrene, y muestre los resultados

### Detalles del Entrenamiento

El modelo se entrena con 9 valores de muestra comenzando desde -6, y el proceso de entrenamiento se ejecuta durante un mínimo de 350 épocas. Recibirás una notificación por la consola del navegador una vez que el entrenamiento haya finalizado.
