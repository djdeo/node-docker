import { Server } from './Server'

const app = new Server()
app.startListen()

// then run the following commands
/**
 * docker build -t myapp .
 * docker run -d --name myapp -p 3000:3000 myapp
 * docker ps
 * docker rm -f $(docker ps -aq)
 */