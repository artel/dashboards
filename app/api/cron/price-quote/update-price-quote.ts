import { db } from "@/lib/kysely"
import { lookup } from "@/lib/yahoo-finance-symbol-lookup"

export default async function update_price_quote(symbol: string) {
  const price = await lookup(symbol)
  if (!price) {
    throw new Error('No price returned')
  }
  const quote = {
    price,
    symbol,
    date: new Date(),
  }
  await db.insertInto('price_quote').values(quote).execute()
  return quote;
}