import http from "http";

interface Response {
  writeHead(statusCode: number, headers: {[key: string]: string}): void;
  end(data: string): void;
}

interface Request {
  url?: string; 
}

const server = http.createServer((req: Request, res: Response) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  if (req.url === "/") {
    res.end(JSON.stringify({ message: "Luiz" }));
    
    for (let i = 0; i <= 10; i++) {
      console.log(`Luiz ${i}`);
    }
  }

  if (req.url === "/produto") {
    res.end(JSON.stringify({ message: "Rota de produto" }));
  }

  if (req.url === "/cliente") {
    res.end(JSON.stringify({ message: "Rota de cliente" }));
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");  
});