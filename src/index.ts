import { server } from './server/server';

server.listen(process.env.PORT || 3000, () => {console.log(`App rodando! ${process.env.PORT || 3000}`);});