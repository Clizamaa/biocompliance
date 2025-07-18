import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Todos los campos son requeridos.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'contacto@bacchile.cl',
      to: ['christian.lizamaa@redsalud.gob.cl'],
      reply_to: email,
      subject: `${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <h1 style="font-size: 24px; color: #0D9488; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Nuevo Mensaje de Contacto</h1>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
              <p style="margin: 0 0 10px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0D9488; text-decoration: none;">${email}</a></p>
              <p style="margin: 0;"><strong>Mensaje:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; font-style: italic;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #777; text-align: center; margin-top: 20px;">Este correo fue enviado desde el formulario de contacto de BioCompliance.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Hubo un error al enviar el mensaje.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
