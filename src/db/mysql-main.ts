import mysql = require('promise-mysql')
import config = require('config')

const poolPromise = mysql.createPool({
  host: config.get('db.mysql.host'),
  user: config.get('db.mysql.user'),
  password: config.get('db.mysql.password'),
  port: config.get('db.mysql.port')
  // multipleStatements: true
})

let pool: mysql.Pool

export function queryDB(queryStr: string): Promise<{
  affectedRows: number,
  insertId: number
}>

export function queryDB<T>(queryStr: string): Promise<T>

export async function queryDB(queryStr: any) {
  if (!pool) pool = await poolPromise
  return pool.query(queryStr)
}
