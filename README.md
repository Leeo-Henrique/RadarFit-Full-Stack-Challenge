# Project Title

Back-end-Radarfit

## Demo link: [Radar-fit](https://radar-fit-front-end.vercel.app/)

## Table of Content:

- [Project Title](#project-title)
	- [Demo link: Radar-fit](#demo-link-radar-fit)
	- [Table of Content:](#table-of-content)
	- [About The App](#about-the-app)
	- [Technologies](#technologies)
	- [Setup](#setup)
	- [Tests](#tests)
	- [Status](#status)
	- [Credits](#credits)
	- [License](#license)
	- [Routes](#routes)

## About The App

[Back-end-Radarfit] is an app that list, delete, create, update and filter products

## Technologies

I used `typescript`, `typeorm`, `postgresSQL`, `Nodejs`...

## Setup

- download or clone the repository
- run `npm install` or `yarn install`
- create an database on postgress with same name of the .env POSTGRES_DATABASE
- run `yarn typeorm migration:run -d src/data-source.ts`
- run `yarn dev`
- the server is running :)
- now open the site
  
## Tests
- run `npm install` or `yarn install`
- run `yarn test`

## Status

[name of project] is finished.

## Credits

List of contriubutors:

- [Leonardo](https://github.com/Leeo-Henrique)
- [Beginners guide to SOLID](https://felipecesr.medium.com/princ%C3%ADpios-solid-princ%C3%ADpio-da-responsabilidade-%C3%BAnica-srp-4033232e4abd)

## License

MIT license @ [Leonardo](https://github.com/Leeo-Henrique)

## Routes

`GET /produtos`

Example or return

```JSON
  [
	{
		"id": "a861103b-462b-4618-97e4-389f193a68a3",
		"produto": "foda",
		"valor": "1456.00",
		"descricao": "string",
		"created": "2022-11-23T14:58:57.921Z",
		"updated": "2022-11-23T14:59:10.834Z"
	},
	{
		"id": "eaa0c28a-45d6-44a3-9597-43d09a22c987",
		"produto": "prodtest",
		"valor": "1236.00",
		"descricao": "string",
		"created": "2022-11-23T18:18:32.729Z",
		"updated": "2022-11-23T18:18:32.729Z"
	}
]
```

---

`GET /produtos/find?produto=nomedoproduto`
`GET /produtos/find?valor=valordoproduto`
`GET /produtos/find?descricao=descricaodoproduto`

Returns the products according to the term passed parameter `q`

```JSON
  [
	{
		"id": "a861103b-462b-4618-97e4-389f193a68a3",
		"produto": "foda",
		"valor": "1456.00",
		"descricao": "string",
		"created": "2022-11-23T14:58:57.921Z",
		"updated": "2022-11-23T14:59:10.834Z"
	},
	{
		"id": "eaa0c28a-45d6-44a3-9597-43d09a22c987",
		"produto": "prodtest",
		"valor": "1236.00",
		"descricao": "string",
		"created": "2022-11-23T18:18:32.729Z",
		"updated": "2022-11-23T18:18:32.729Z"
	}
]
```

---

`GET /produtos/{id}`

Returns product details

```JSON
[
	{
		"id": "eaa0c28a-45d6-44a3-9597-43d09a22c987",
		"produto": "prodtest",
		"valor": "1236.00",
		"descricao": "string",
		"created": "2022-11-23T18:18:32.729Z",
		"updated": "2022-11-23T18:18:32.729Z"
	}
]
```

---

`POST /produtos`

Add a new product
request body expected

```JSON
{
  "produto": "computer",
	"valor": 1236,
	"descricao": "a gamer computer",
}
```

---

`PUT /produtos/{id}`

Update product data
request body

```JSON
{
  "produto": "computer atualized",
	"valor": 1500,
	"descricao": "a gamer computer with mouse and keyboard",
  "created":"2000-11-23T18:18:32.729Z"
}
```

only accept timestamp

response body

```json
{
  "id": "8be256b5-565e-4aec-84d3-483282c88447",
  "produto": "computer atualized",
  "valor": 1500,
  "descricao": "a gamer computer with mouse and keyboard",
  "created": "2000-11-23T18:18:32.729Z",
  "updated": "2022-11-23T18:24:51.859Z"
}
```

---

`PATCH /produtos/{id}`

Updates only some product data

```JSON
{
  "produto": "computer cheap",
	"valor": 250,
	"descricao": "an ordinary computer",
}
```

response body

```json
{
  "id": "8be256b5-565e-4aec-84d3-483282c88447",
  "produto": "computer cheap",
  "valor": 250,
  "descricao": "an ordinary computer",
  "created": "2000-11-23T18:18:32.729Z",
  "updated": "2022-11-23T18:24:51.859Z"
}
```

---

`DELETE /produtos/{id}`
delete an product

No response body
status 204
