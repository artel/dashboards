import { parse } from 'node-html-parser';
export async function lookup(symbol: string) {
  const response = await fetch(`https://finance.yahoo.com/quote/${symbol}`)
  const html = await response.text()
  const root = parse(html)
  const result = root.querySelector(`[data-symbol="${symbol}"]`)?.textContent
  const price = !!result ? parseFloat(result.replaceAll(/,/g, '')) : undefined
  return price
}