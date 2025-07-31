import { NextRequest, NextResponse } from 'next/server'
import { askOpenAI } from '@/utils/openai'

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  const reply = await askOpenAI(message)
  return NextResponse.json({ reply })
}
