# Pivot

## Application required
- NodeJs V10.x or above
- NPM V6.x or above
- MySQL 5.7

## How to install application
- Run ```npm install --save```
- Pastikan ```node modules``` sudah tersedia setelah run ```npm install```
- Ubah connection database in config ```knexfile.js```
- Ubah ```access_token``` facebook in ```controller_facebook.js``` di sebabkan oleh expired dari facebook 

## Migration Database
```
knex migrate:latest
```

## Seeder Database 
```
knex seed:run
```

## How to run 
```
npm run dev
Port : 3000
```

## Endpoint 
- Home
   - url : http://localhost:3000/
   - Method : GET
   - REQUEST Data Input / req.body: No
-  Generate 
    - url : http://localhost:3000/generate
    - Method : GET
    - REQUEST Data Input / req.body: No
- Pivot Data
    - url : http://localhost:3000/pivot
    - Method : GET
    - REQUEST Data Input / req.body: No
- Feed of User Facebook
    - url : http://localhost:3000/facebook?page=1&limit=5
    - Method : GET
    - REQUEST Data Input / req.query : { page : 1, limit : 5 }
    
 


