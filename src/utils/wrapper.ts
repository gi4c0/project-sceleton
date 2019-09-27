import { Request, Response, NextFunction } from 'express'

interface ITypedRequest <Body, Query, Params> extends Omit<Request, 'params'> {
  body: Body
  query: Query
  params: Params
}

type Fn<B, Q, P> = (req: ITypedRequest<B, Q, P>, res: Response, next: NextFunction) => Promise<any>

export const wrapper = <Body = {}, Query = {}, Params = {}>(fn: Fn<Body, Query, Params>) => (req, res, next) => {
  fn(req, res, next).catch(next)
}
