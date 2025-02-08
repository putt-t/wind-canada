import { NextResponse } from 'next/server';

async function calculate(input: number): Promise<number> {
  // FACT 1.
  let result = input * input;
  return result;
}

export async function POST(request: Request) {
  try {
    const { input } = await request.json();
    if (typeof input !== 'number') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const result = await calculate(input);
    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Calculation failed' }, { status: 500 });
  }
}
