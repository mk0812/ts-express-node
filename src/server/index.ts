import Express from 'express'
import cors from 'cors'
import { Health } from '../types/api'

const app = Express()
app.use(cors())

// Routing
app.get('/',(req,res) => {
  const data: Health = { message: 'pong' }
  res.send(data)
});

app.get('/api/health',(req,res) => {
  res.send({message: 'pong'});
});

app.use((req,res,next) => {
  res.sendStatus(404)
  next({statusCode: 404})
})

app.use(
  (
    err: {statusCode: number},
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    console.log(err.statusCode)
  }
)

const port = 8888;
const host = 'localhost'

app.listen(port,host,() => {
  console.log(`running on http://${host}:${port}`)
})