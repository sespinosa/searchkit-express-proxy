import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import SearchkitExpress from 'searchkit-express'

const app = express()

app.use(bodyParser.json())


if(process.env.ENV === 'production') {
  app.use(morgan('combined'))
}
else {
  app.use(morgan('dev'))
}

SearchkitExpress({
  host: process.env.ELASTIC_URL || 'http://localhost:9200',
  index: process.env.ELASTIC_INDEX || '',
  queryProcessor: (query, req, res) => {
    // Filter request, force read only for example.
    return query
  }
}, app)

app.listen(process.env.PORT || 4000)