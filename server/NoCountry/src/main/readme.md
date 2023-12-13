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