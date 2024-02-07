# Portal Soft Jobs

Plataforma que busca apoyar a la
comunidad de desarrolladores juniors a conseguir trabajos cortos y sencillos para acumular
experiencia laboral y mejorar sus oportunidades.

Crear las variables de entorno:

```
PORT=????

JWT_SECRET==?????????

USER_DB=?????????
HOST_DB=?????????
PASSWORD_DB=?????????
NAME_DB=?????????
PORT_DB=????
```

Usar base de datos del archivo **script.sql** en postgre

## POST - crear usuario

Url:

`http://localhost:3000/usuarios`

Body ejemplo de consulta:

```
{
    "email": "prueba@prueba.cl",
    "password": "12345",
    "rol": "Backend Developer",
    "lenguage": "Python"
}
```

Respuesta:

```
{
    "message": "User created successfully"
}
```

## POST - login usuario

Url:

`http://localhost:3000/login`

Body ejemplo de consulta:

```
{
    "email": "prueba@prueba.cl",
    "password": "12345"
}
```

Respuesta:

```
{
    "message": "Login successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYUBwcnVlYmEuY2wiLCJ1c2VyX2lkIjoxLCJpYXQiOjE3MDcyMzY0MTN9.Gl8iWfH_C6tG7-s9YvlZjNvhNfviCrLtO6lMBkZObeE",
    "email": "prueba@prueba.cl"
}
```

## GET consultar usuario

Url:

`http://localhost:3000/usuarios`

Body ejemplo de consulta:

```
authorization = token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYUBwcnVlYmEuY2wiLCJ1c2VyX2lkIjoxLCJpYXQiOjE3MDcyMzE1MzF9.ta4Jiy5w_P-Fx2zIToDJn7QKd1RrDkcSWOfISqxYRyU
```

Respuesta:

```
[
    {
        "id": 1,
        "email": "prueba@prueba.cl",
        "password": "$2a$10$zULOuL/iUmbQV7O9wbrxYePUqYX/KLqocamk6lV3QkweFIq6cn9.e",
        "rol": "Backend Developer",
        "lenguage": "Python"
    }
]
```