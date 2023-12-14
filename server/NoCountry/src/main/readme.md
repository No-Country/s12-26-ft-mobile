https://ktor-project-407503.uc.r.appspot.com/ Link base

   ```json
 
1. Endpoint: `/insertServiceTable`
   Método: POST
   JSON requerido:
   {
       "name": "string"
   }
   
Endpoint: /insertNewUserTable Método: POST JSON requerido:  
{
    "image": "string",
    "name": "string",
    "age": "integer",
    "location": "string",
    "biography": "string",
    "isVerify": "boolean",
    "budget": "double",
    "searchedArea": "string",
    "user": "string",
    "email": "string",
    "password": "string"
}
Endpoint: /user Método: POST JSON requerido:  
{
    "email": "string",
    "password": "string"
}
Endpoint: /getRoomTypes Método: GET No requiere JSON.  
Endpoint: /getRoom Método: GET No requiere JSON.  
Endpoint: /InsertRoom Método: POST JSON requerido:
{
    "image": "string",
    "title": "string",
    "city": "string",
    "district": "string",
    "province": "string",
    "monthPrice": "double",
    "sizeM2": "double",
    "isPet": "boolean",
    "isSmokers": "boolean",
    "room": "integer",
    "userId": "integer"
}


https://ktor-project-407503.uc.r.appspot.com/ Link base

   ```json
 
1. Endpoint: `/insertServiceTable`
   Método: POST
   JSON requerido:
   {
       "name": "string"
   }
   
Endpoint: /insertNewUserTable Método: POST JSON requerido:  
{
    "image": "string",
    "name": "string",
    "age": "integer",
    "location": "string",
    "biography": "string",
    "isVerify": "boolean",
    "budget": "double",
    "searchedArea": "string",
    "user": "string",
    "email": "string",
    "password": "string"
}
Endpoint: /user Método: POST JSON requerido:  
{
    "email": "string",
    "password": "string"
}
Endpoint: /getRoomTypes Método: GET No requiere JSON.  
Endpoint: /getRoom Método: GET No requiere JSON.  
Endpoint: /InsertRoom Método: POST JSON requerido:
{
    "image": "string",
    "title": "string",
    "city": "string",
    "district": "string",
    "province": "string",
    "monthPrice": "double",
    "sizeM2": "double",
    "isPet": "boolean",
    "isSmokers": "boolean",
    "room": "integer",
    "userId": "integer"
}

EndPoint: /insertFavorite Método: POST JSON requerido:                                                                                                                                                                                                                                                                                                                                                             {
    "user": Int,
    "room": Int
}


Endpoint: /getFavoriteByUser  
Método: POST
Cuerpo de la solicitud (Request Body):
user: ID del usuario (tipo de dato: entero)
Ejemplo de cuerpo de la solicitud:
{
    "user": 1
}
Respuesta: Lista de habitaciones favoritas del usuario (tipo de dato: lista de objetos RoomResponse)
Endpoint: /getRoomById  
Método: POST
Cuerpo de la solicitud (Request Body):
id: ID de la habitación (tipo de dato: entero)
Ejemplo de cuerpo de la solicitud:
{
    "id": 1
}
Respuesta: Detalles de la habitación (tipo de dato: objeto RoomResponse)
Endpoint: /getRoomFilter  
Método: POST
Cuerpo de la solicitud (Request Body):
title: Título de la habitación (opcional, tipo de dato: string)
city: Ciudad de la habitación (opcional, tipo de dato: string)
district: Distrito de la habitación (opcional, tipo de dato: string)
Ejemplo de cuerpo de la solicitud:
{
    "title": "Habitación 1"
}
Respuesta: Lista de habitaciones que coinciden con el filtro (tipo de dato: lista de objetos RoomResponse)