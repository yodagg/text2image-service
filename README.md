### text2image
AI generates image services based on text.

### the services they provide
[craiyon](https://www.craiyon.com/)

[node-craiyon](https://github.com/jozsefsallai/node-craiyon)


### use

#### start server
```
npm i
npm start
```

#### browser
```js
fetch('http://localhost:9000', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        prompt: 'Cow in the sky'
    })
})
```

#### return
```json
{
    "code": 1,
    "message": "",
    "data": [
        "base64image",
        "base64image",
        "base64image"
    ]
}
```