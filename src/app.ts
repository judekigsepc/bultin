  import express from 'express';
  import cors from 'cors';
  import cookieParser from 'cookie-parser';
  import connectToDB from './configs/db'
  import checkEnvVars from './utils/checkEnv'


 import authRouter from './modules/auth/auth.route';
 import groupRouter from './modules/groups/group.route';

const app = express();

app.use(cors({
origin: "*",
credentials: true
}))

app.use(express.json());
app.use(cookieParser())

const envVars = ["PORT","DB_URI","JWT_SECRET"]

checkEnvVars(envVars)

const port = process.env.PORT || 3000
const dbURL = process.env.DB_URI as string

connectToDB(dbURL)

app.listen(port, () => {
 console.log(`Server running on port ${port}`)
})

app.get('/', (req, res) => {
res.send('Server up and running')
})

app.use('/api/auth', authRouter)
app.use('/api/groups',groupRouter)
