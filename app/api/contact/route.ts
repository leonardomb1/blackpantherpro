import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    if (!data.name || !data.email || !data.whatsapp || !data.company) {
      return NextResponse.json({ error: "Dados obrigatórios não preenchidos" }, { status: 400 })
    }

    const response = await fetch("https://formspree.io/f/xvzzpwnl", {
      method: "POST",
      body: data
    });

    return NextResponse.json({ message: "Formulário enviado com sucesso" }, { status: response.status })   
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
