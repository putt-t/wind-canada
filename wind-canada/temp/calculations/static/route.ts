// import { NextResponse } from "next/server";

// async function staticCalculation(Iw: number, q: number, Ce: number, Ct: number, Cg: number, Cp: number) {
//     return Iw * q * Ce * Ct * Cg * Cp;
// }

// async function staticCalculationWithCpCg(Iw: number, q: number, Ce: number, Ct: number, CpCg: number) {
//     return Iw * q * Ce * Ct * CpCg;
// }

// export async function POST(request: Request) {
//     try {
//         const input = await request.json();
//         if (typeof input !== 'object') {
//             return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
//         }
//     } catch(error) {
//         return NextResponse.json({ error : 'Calculation failed'}, {status: 500})
//     }
// }
