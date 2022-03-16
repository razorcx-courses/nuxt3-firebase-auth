import type { IncomingMessage, ServerResponse } from "http";
import { useCookie } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const userCookie = useCookie(req, "userCookie");

  // @ts-ignore
  req.user = userCookie;
};
