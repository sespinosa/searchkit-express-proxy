# searchkit-express-proxy

This app lets you run a proxy between searchkit and elastic, it allows to add filters or restrictions (for example, read only queries)

For this to work you need to define the following env variables:

- ELASTIC_URL : The url of the elastic cluster.
- ELASTIC_INDEX : The index/collection in the cluster.
- PORT : The port of the proxy (defaults to 4000)

### Install stuff

```
npm install

```


### Run for development

```
npm run serve
```

This allows the code to be restarted on change (is using nodemon).



### Deploy


```
npm run build
```

This will generate the `/build` directory, thats the production code.


### Test production

```
npm run production
```

This will run the code of the `/build` folder (thats the code generated after traspiling).



The es6 code should be placed on the `code` folder!