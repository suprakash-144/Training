# Api Documentation

## Dependencies

- Express
- Mongodb
- Jwt
- Bcrypt

## Api endpoints

- <span style="color: yellow"> POST </span> `/register`

  - Request format

  ```
   {
   "firstname":"Suprakash", //string
   "lastname":"Gorai", //string
   "email": "admin@gmail.com",//Email
   "mobile": "9547997820", //Number
   "password":"123456"
   }
  ```

- <span style="color: yellow"> POST </span> `/login`
  - Request format
  ```
   {
   "email": "admin@gmail.com",//Email
   "password":"123456"
   }
  ```
  - response format
  ```
  token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2RjZWU2ZGQ3NmE2OTZlYTUzNTFkNCIsImlhdCI6MTc0MTU0MTY3NSwiZXhwIjoxNzQxNjI4MDc1fQ.I4ee5lMULaQ7j-2jX9-WzaA8HZktnyu_ftYUrxLG3-8"
  ```
- <span style="color: green"> GET </span> `/all-users`

  - response format

  ```
  [
    {
        "_id": "67cdd20cf31b2f612de3e2fe",
        "firstname": "Suprakash",
        "lastname": "Gorai",
        "email": "admin@gmail.com",
        "mobile": "9547997540",
        "password": "$2b$10$irdRCspxKS/fozSgs.NCtuKWSFemmHSbMMC1bJG1LaOWDnxp8lwFO",
        "role": "DEV",
        "createdAt": "2025-03-09T17:38:20.514Z",
        "updatedAt": "2025-03-09T17:38:20.514Z",
        "__v": 0
    },
    {
        "_id": "67cf04debadc0035d51d4307",
        "firstname": "admin",
        "lastname": "admin",
        "email": "admin123@gmail.com",
        "mobile": "9547997888",
        "password": "$2b$10$U2Gjq0bsK8RNDqj76cxCyuhByWl7VzQrA6EKdXMqymLERbZsq2xR6",
        "role": "DEV",
        "createdAt": "2025-03-10T15:27:26.847Z",
        "updatedAt": "2025-03-10T15:27:26.847Z",
        "__v": 0
    }
    ]
  ```

- <span style="color: green"> GET </span> `/:id`

  - response format

  ```
    [
        {
        "_id": "67cdd20cf31b2f612de3e2fe",
        "firstname": "Suprakash",
        "lastname": "Gorai",
        "email": "admin@gmail.com",
        "mobile": "9547997540",
        "password": "$2b$10$irdRCspxKS/fozSgs.NCtuKWSFemmHSbMMC1bJG1LaOWDnxp8lwFO",
        "role": "DEV",
        "createdAt": "2025-03-09T17:38:20.514Z",
        "updatedAt": "2025-03-09T17:38:20.514Z",
        "__v": 0
        }
    ]
  ```

- <span style="color: blue"> PUT </span> `/:id`

  - request format

  ```
  {
  "firstname":, //string
  "lastname":, //string,
  "mobile":, //Number
  }

  ```

- <span style="color: red"> DELETE </span> `/:id`

  - response format

  ```
  "Message" : "User Deleted "

  ```
