import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  
  // @ts-ignore
  const user = req.user;

  if(user) {
    res.statusCode = 200
    res.end('This is a top secret message from the API')
  }
  res.statusCode = 400
  res.end('Must be signed in to read secret message')
}