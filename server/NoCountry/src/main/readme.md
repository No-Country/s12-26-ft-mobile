https://nocountry-408603.uc.r.appspot.com/ Link base


### POST /insertServiceTable
Este endpoint se utiliza para insertar un nuevo servicio en la tabla de servicios.

**Request Body**:
```json
{
  "name": "string"
}
```

### POST /insertNewUserTable
Este endpoint se utiliza para insertar un nuevo usuario en la tabla de usuarios.

**Request Body**:
```json
{
  "image": "string",
  "name": "string",
  "age": "integer",
  "location": "string",
  "biography": "string",
  "isVerify": "boolean",
  "budget": "integer",
  "searchedArea": "string",
  "email": "string",
  "password": "string"
}
```

### POST /validateUser
Este endpoint se utiliza para validar las credenciales de un usuario.

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

### GET /getRoomTypes
Este endpoint se utiliza para obtener todos los tipos de habitaciones. No requiere ningún cuerpo de solicitud.

### GET /getRoom
Este endpoint se utiliza para obtener todas las habitaciones. No requiere ningún cuerpo de solicitud.

### POST /InsertRoom
Este endpoint se utiliza para insertar una nueva habitación.

**Request Body**:
```json
{
  "image": "string",
  "title": "string",
  "city": "string",
  "district": "string",
  "province": "string",
  "monthPrice": "integer",
  "sizeM2": "integer",
  "isPet": "boolean",
  "isSmokers": "boolean",
  "room": "integer",
  "userId": "integer",
  "serviceId": ["integer"]
}
```

### POST /insertFavorite
Este endpoint se utiliza para insertar un nuevo favorito.

**Request Body**:
```json
{
  "user": "integer",
  "room": "integer"
}
```


### POST /insertServiceTable

```markdown
## API Endpoints

### `/insertServiceTable`

- **Method**: POST
- **Purpose**: Insert a new service into the services table.
- **Request Body**:

```json
{
  "name": "nombre del servicio"
}
```

---

### POST/insertNewUserTable

- **Method**: POST
- **Purpose**: Insert a new user into the users table.
- **Request Body**:

```json
{
  "image": "url de la imagen",
  "name": "nombre del usuario",
  "age": 25,
  "location": "ubicación del usuario",
  "biography": "biografía del usuario",
  "isVerify": true,
  "budget": 5000,
  "searchedArea": "área buscada",
  "email": "correo del usuario",
  "password": "contraseña del usuario"
}
```

---

### POST /validateUser

- **Method**: POST
- **Purpose**: Validate a user's credentials.
- **Request Body**:

```json
{
  "email": "correo del usuario",
  "password": "contraseña del usuario"
}
```

---

### GET /getRoomTypes

- **Method**: GET
- **Purpose**: Get all room types. No request body required.

---

### GET /getRoom

- **Method**: GET
- **Purpose**: Get all rooms. No request body required.

---

### POST /InsertRoom

- **Method**: POST
- **Purpose**: Insert a new room.
- **Request Body**:

```json
{
  "image": "url de la imagen",
  "title": "título de la habitación",
  "city": "ciudad de la habitación",
  "district": "distrito de la habitación",
  "province": "provincia de la habitación",
  "monthPrice": 500,
  "sizeM2": 50,
  "isPet": true,
  "isSmokers": false,
  "room": 1,
  "userId": 1,
  "serviceId": [1, 2, 3]
}
```

---

### POST /insertFavorite

- **Method**: POST
- **Purpose**: Insert a new favorite.
- **Request Body**:

```json
{
  "user": 1,
  "room": 1
}
```

---

### POST /getFavoriteByUser

- **Method**: POST
- **Purpose**: Get favorites by user.
- **Request Body**:

```json
{
  "user": 1
}
```

---

### POST /getRoomById

- **Method**: POST
- **Purpose**: Get a room by its ID.
- **Request Body**:

```json
{
  "id": 1
}
```

---

### POST/getRoomFilter

- **Method**: POST
- **Purpose**: Get rooms by filter.
- **Request Body**:

```json
{
  "title": "título de la habitación"
}
```

---

### POST /deleteFavoriteById`

- **Method**: POST
- **Purpose**: Delete a favorite by its ID.
- **Request Body**:

```json
{
  "id": 1
}
```