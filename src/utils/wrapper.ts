import { Request, Response, NextFunction } from 'express'

interface IUser {
  user: {
    id: number
    email: string
    chosenCompanyId: number

    lastUsedAccountId: number
  }
}

interface ITypedRequest <Body, Query, Params> extends Request {
  body: Body
  query: Query
  // params: Params
}

type Fn<B, Q, P> = (req: ITypedRequest<B, Q, P> & IUser, res: Response, next: NextFunction) => Promise<any>

export const wrapper = <Body = any, Query = any, Params = any>(fn: Fn<Body, Query, Params>) => (req, res, next) => {
  fn(req, res, next).catch(next)
}
