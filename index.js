import { createServer } from 'http';
const port = process.env.PORt || 3000;

const server = createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html')

    if(req.url =='/'){
        res.end(' <h1>hello form page 1  </h1>')
    } else if(req.url =='/page2'){
        res.end('<h1>hello form page 2 </h1>')
    }else if (req.url =='/page3'){
        res.end('<h1>handle form page 3</h1>')
    }
});

server.listen( port,()=>{
    console.log(`server listening on port ${port}`);
} );