import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Configura las opciones del correo
    const mailOptions = {
      from: `"Formulario BioCompliance" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_TO, // El email que recibirá los mensajes
      replyTo: email,
      subject: `Nuevo mensaje: ${subject}`,
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
    };

    // Envía el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
