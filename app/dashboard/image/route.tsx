import Dashboard from "@/components/Dashboard";
import { ImageResponse } from "next/server";

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(<Dashboard />, {
    width: 800,
    height: 600
  })
}