import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nome, email, interesse, mensagem } = await request.json();

    // Instancia o Resend no momento da requisição
    const resend = new Resend(process.env.RESEND_API_KEY || 're_fallback_for_build');

    const { error } = await resend.emails.send({
      from: 'Site Abner Simão <onboarding@resend.dev>',
      to: 'abnersimaodesign@gmail.com',
      replyTo: email,
      subject: `Novo contato: ${interesse}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:12px;">
          <h2 style="color:#0891b2;margin-bottom:24px;">Novo contato pelo site</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748b;width:120px;">Nome</td><td style="padding:8px 0;font-weight:600;color:#0f172a;">${nome}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">E-mail</td><td style="padding:8px 0;font-weight:600;color:#0f172a;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Interesse</td><td style="padding:8px 0;font-weight:600;color:#0f172a;">${interesse}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e2e8f0;">
            <p style="color:#64748b;margin:0 0 8px;">Mensagem:</p>
            <p style="color:#0f172a;margin:0;line-height:1.6;">${mensagem}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}