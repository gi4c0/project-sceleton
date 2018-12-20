import { Request, Response, NextFunction } from 'express'

interface IUser {
  user: {
    id: number
    email: string
  }
}

type IFn = (req: Request & IUser, res: Response, next: NextFunction) => Promise<any>

export const wrapper = (fn: IFn) => (req, res, next) => {
  fn(req, res, next).catch(next)
}
