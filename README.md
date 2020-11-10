# Spot Songs

## Sucrase Node

Para usar o sucrase junto com o nodemon basta criar o arquivo `nodemon.json`

Nesse arquivo voce pode executar de duas formas: 

```json
{
    "execMap": {
        "js": "sucrase-node"
    }
}
```
ou assim 

```json
{
    "execMap": {
        "js": "node register/sucrase"
    }
}
```