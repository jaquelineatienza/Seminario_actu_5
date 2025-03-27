# Sistema de Gestión de Usuarios

Este es un sistema de gestión de usuarios que permite agregar información de personas, incluyendo sus hijos y números de teléfono. Además, se pueden filtrar usuarios por su número de DNI.

El proyecto consta de dos versiones: una en **Python** y otra en **JavaScript**. Ambas versiones permiten realizar las mismas operaciones, pero en diferentes entornos de ejecución.

## Estructura del Proyecto

project-folder/
├── python/
├── app.py
└── javascript-version/
├── main.js
└── README.md

## Python Version

### Requisitos

Este script está escrito en Python. Asegúrate de tener Python instalado en tu máquina. Puedes verificar si tienes Python instalado ejecutando:

````bash
python --version
Uso
Clona el repositorio o descarga el archivo main.py.

Ejecuta el script con el siguiente comando:

bash
Copy
Edit
python python-version/main.py
Funcionalidades
Ingresar nuevos usuarios con nombre, apellido, DNI, hijos y teléfonos.

Ver todos los datos ingresados.

Filtrar usuarios por su DNI.

JavaScript Version
Requisitos
Para ejecutar el script de JavaScript, necesitas tener Node.js instalado. Si no tienes Node.js, instálalo primero.

Dependencias
El script de JavaScript utiliza la librería prompt-sync para solicitar entradas por consola. Para instalar las dependencias, ejecuta el siguiente comando en la carpeta javascript-version:

bash
Copy
Edit
npm install prompt-sync
Uso
Clona el repositorio o descarga el archivo index.js.

En la carpeta javascript-version, instala las dependencias con:

bash
Copy
Edit
npm install
Ejecuta el script con:

bash
Copy
Edit
node javascript-version/index.js
Funcionalidades
Ingresar nuevos usuarios con nombre, apellido, DNI, hijos y teléfonos.

Ver todos los datos ingresados.

Filtrar usuarios por su DNI.

Funcionalidades Comunes
1. Ingresar una nueva persona
Permite agregar un nuevo usuario con su nombre, apellido, número de DNI, lista de hijos y números de teléfono.

2. Mostrar todos los datos
Muestra la lista de todos los usuarios ingresados.

3. Filtrar por DNI
Permite buscar un usuario específico mediante su número de DNI.

4. Salir del programa
Finaliza la ejecución del programa.

¡Disfruta del sistema de gestión de usuarios! Si tienes alguna pregunta, no dudes en abrir un issue o contactarnos.

r
Copy
Edit

Este archivo de `README.md` cubre los detalles esenciales sobre cómo usar el sistema tanto en Python como en JavaScript, cómo instalar dependencias y cómo ejecutar los scripts.






You said:
hazlo en un solo texto


ChatGPT said:
Aquí tienes el README.md en un solo texto, combinando ambas versiones del proyecto:

markdown
Copy
Edit
# Sistema de Gestión de Usuarios

Este es un sistema de gestión de usuarios que permite agregar información de personas, incluyendo sus hijos y números de teléfono. Además, se pueden filtrar usuarios por su número de DNI.

El proyecto consta de dos versiones: una en **Python** y otra en **JavaScript**. Ambas versiones permiten realizar las mismas operaciones, pero en diferentes entornos de ejecución.

## Estructura del Proyecto

project-folder/ ├── python-version/ │ ├── main.py └── javascript-version/ ├── index.js


## Python Version

### Requisitos

Este script está escrito en Python. Asegúrate de tener Python instalado en tu máquina. Puedes verificar si tienes Python ejecutando:

```python --version```
Si no lo tienes, puedes descargarlo e instalarlo desde python.org.


Ejecuta el script con el siguiente comando:

```python python app.py```

JavaScript Version

Requisitos
Para ejecutar el script de JavaScript, necesitas tener Node.js instalado. Si no tienes Node.js, instálalo primero.

Dependencias
El script de JavaScript utiliza la librería prompt-sync para solicitar entradas por consola. Para instalar las dependencias, ejecuta el siguiente comando en la carpeta javascript-version:

En la carpeta javascript, instala las dependencias con:


``npm install``
Ejecuta el script con:

```node main.js```

Funcionalidades
1. Ingresar una nueva persona
Permite agregar un nuevo usuario con su nombre, apellido, número de DNI, lista de hijos y números de teléfono.

2. Mostrar todos los datos
Muestra la lista de todos los usuarios ingresados.

3. Filtrar por DNI
Permite buscar un usuario específico mediante su número de DNI.

4. Salir del programa
Finaliza la ejecución del programa.

````
