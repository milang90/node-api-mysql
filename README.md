# Api + Node + Express + Mysql

Api sencilla hecha con Node.js, Express.js y Mysql lista para que sirva de base para hacer tus endpoint para tu proyecto de backend y/o para consumir desde tu aplicación movil 

## Comenzando

Hasta ahora no tenemos ningun tipo de seguridad pues se ha hecho pensando solo en listar informacón que pueda ser consultada de los dispositivos anteriormente mensionado

### Requisitos Previos

Tener instalado tu ambiente de node así que recuerda consultar que versión tienes instalado en tu equipo.

Este proyecto fué desarrollado bajo la version v12.13.0

```
node --version
```

### Instalación

Lo primero que tienes que hacer es navegar hasta la carpeta raiz del proyecto e instalar todas las dependencias

Eso lo hacemos ejecutando el sisguiente comando

```
npm install
```

Luego que termine el proceso de instalación de todos los módulos necesarios ya puedes echar a andar el proyecto.

Esto se hace ejecutando el comando:

```
npx nodemon app/index.js
```

Ya con esto es todo y tienes ejecuntando el proyecto en tu servidor http://localhost:8000

las Api's disponibles en esta versión son:

GET /api/users
Para listar todos los usuarios

GET /api/users/search
Para buscar entre los usuarios

GET /api/users/:id
Para mostrar los datos de un usuario

POST /api/users
Para listar los usuarios

PUT /api/users/:id
Para editar los datos de un usuario

DELETE /api/users/:id
Para eliminar un usuario

### Finalmente

Recuerda tener instalado y configurado tu servidor de Mysql para que pueda andar correctamente el proyecto