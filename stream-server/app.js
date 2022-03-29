const express = require("express")
const fs = require("fs")
var cors = require('cors')


const app = express()

app.use(cors())

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/video", (req, res)=>{
    console.log("------------------")
    console.log(req.headers)
    const {range} = req.headers
    console.log(range)

    if(!range){
        res.status(400).send("Requires Range header")
    }

    const videoPath = "song.mp4"
    const videoSize = fs.statSync(videoPath).size
    console.log("videoSize", videoSize)

    const CHUNK_SIZE = 5 * 10 ** 5
    console.log("CHUNK_SIZE", CHUNK_SIZE)
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1)

    console.log(`start: ${start} || end: ${end}`)
    const contentLength = end - start + 1

    const headers = {
        "Content-Range" : `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges" : "bytes",
        "Content-Length": contentLength,
        "Content-Type"  : "video/mp4"
    }

    // console.log("headers", headers)

    res.writeHead(206, headers)

    const videoStream = fs.createReadStream(videoPath, {start, end})
    console.log("videoStream", videoStream)

    videoStream.pipe(res)

})

app.listen(5000, ()=>{
    console.log("Listening on port 5000!")
})