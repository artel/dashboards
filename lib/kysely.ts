import { createKysely } from '@vercel/postgres-kysely'
import { ColumnType, Generated } from 'kysely'

interface PriceQuote {
  id: Generated<number>
  symbol: string
  price: number
  date: ColumnType<Date, Date, never>
}

// Keys of this interface are table names.
export interface Database {
  price_quote: PriceQuote
}

export const db = createKysely<Database>()
export { sql } from 'kysely'
