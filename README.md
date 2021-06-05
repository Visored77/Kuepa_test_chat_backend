# Pasos para ejecutar el Backend

Este proyecto se realizo en node.js.
Para ejecutar este proyecto se requiere de tener creada una base de datos postgresql con una tabla llamada users y 4 columnas id(serial) name(varchar) email(text) password(text)
igualmente se requiere configurar el archivo `index.controler.js` ubicado en `src/controllers/` con los datos de la base de datos creada.

## Comandos de inicio

En el directorio del proyecto ejecutar

### `npm start`

Arrancara el servidor y se podra visualizar en 
[http://localhost:3000](http://localhost:3000) .

para visualizar los datos de la base de datos se puede ingresar a `localhost:3000/users`

para la administracion de usuarios se puede directamnete desde la base de datos, o utilizando la api por medio de Postman haciendo peticiones tales como:

## Para creacion de usuarios:

POST: http://localhost:3000/users con un body tipo:
`{
    "name": "Daniel",
    "email": "daniel@gmail.com",
    "password": "12345"
}`

## Consulta de Usuarios
`GET: http://localhost:3000/users`

## Eliminar Usuarios
`DELETE: http://localhost:3000/users/"id del usuario a eliminar"`



