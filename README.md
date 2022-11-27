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

#### request
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

### example
[text2image-client](https://github.com/yodagg/text2image-client)

#### preview
- Web
  - https://www.wo2.me/text2image/

- 微信小程序
  - ![CnPFfG2](https://i.imgur.com/CnPFfG2.jpg)

