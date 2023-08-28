import { NextResponse } from 'next/server';
import update_price_quote from '../update-price-quote';

export const runtime = 'edge'

export async function GET() {
  try {
    const quote = await update_price_quote('BTC-USD')
    return NextResponse.json({ ok: true, ...quote })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ ok: false }, {
      status: 500
    });
  }
}
