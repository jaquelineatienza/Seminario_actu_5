# Sistema de Gestión de Usuarios

Este es un sistema de gestión de usuarios que permite agregar información de personas, incluyendo sus hijos y números de teléfono. Además, se pueden filtrar usuarios por su número de DNI.

El proyecto consta de dos versiones: una en **Python** y otra en **JavaScript**. Ambas versiones permiten realizar las mismas operaciones, pero en diferentes entornos de ejecución.

## Estructura del Proyecto

project-folder/ ├── python-version/ │ ├── app.py └── javascript-version/ ├── main.js

## Python Version

### Requisitos

Este script está escrito en Python. Asegúrate de tener Python instalado en tu máquina. Puedes verificar si tienes Python ejecutando:

`python `
Si no lo tienes, puedes descargarlo e instalarlo desde python.org.

Ejecuta el script con el siguiente comando:

`python  app.py`

JavaScript Version

Requisitos
Para ejecutar el script de JavaScript, necesitas tener Node.js instalado. Si no tienes Node.js, instálalo primero.

Dependencias
El script de JavaScript utiliza la librería prompt-sync para solicitar entradas por consola. Para instalar las dependencias, ejecuta el siguiente comando en la carpeta javascript-version:

En la carpeta javascript, instala las dependencias con:

`npm install`
Ejecuta el script con:

`node main.js`

Funcionalidades

1. Ingresar una nueva persona
   Permite agregar un nuevo usuario con su nombre, apellido, número de DNI, lista de hijos y números de teléfono.

2. Mostrar todos los datos
   Muestra la lista de todos los usuarios ingresados.

3. Filtrar por DNI
   Permite buscar un usuario específico mediante su número de DNI.

4. Salir del programa
   Finaliza la ejecución del programa.
