import express from 'express'

const app=express()

const PORT= process.env.PORT||5000

////////////////////////////////
//config


//Body parser
app.use(express.json());
//connecting to db
//implementing helmet

//cors

//routes
//implementing error handler
const server=app.listen(PORT,()=>console.log(`server running in Production mode on port ${PORT}`))

//handle unhandled promised rejections
process.on('unhandledRejection',(err,promise)=>{
    console.log(`error:${err.message}`)
    server.close(()=>process.exit(1))
});