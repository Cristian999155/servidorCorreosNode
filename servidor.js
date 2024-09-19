const express = require('express');
const postmark = require('postmark');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

// Configura el cliente de Postmark con tu API Key
const client = new postmark.ServerClient('9fe9d68c-4d61-4430-972c-b1c9da46c0e6'); // Reemplaza con tu API Key

// Configuración manual de CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // O especifica el origen exacto, por ejemplo, 'http://localhost:3000'
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // Permite las solicitudes preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(bodyParser.json({ limit: '50mb' })); // Aumenta el límite si es necesario

// Ruta para enviar correos
app.post('/enviar-correo-orden', (req, res) => {
  const { pdfBase64, emailP, archivo, nombreFormato } = req.body;


  if (!pdfBase64 || pdfBase64.length === 0) {
    return res.status(400).json({ success: false, message: 'El archivo adjunto está vacío o no se generó correctamente.' });
  }

  const nombreRemitente = 'Eme Colombia';
  const correoEmpresa = 'tecnico@emecolombia.com.co';

  const cuerpoCorreo = `
    Estimado cliente,<br><br>
    Es un placer saludarle desde Eme Colombia. Agradecemos la confianza depositada en nuestros servicios y productos.<br><br>
    Adjunto a este correo, encontrará la orden de servicios .<br><br>
    Para información adicional, no dude en comunicarse con nuestro equipo de atención al cliente. Estamos aquí para ayudarle en todo momento.<br><br>
    Agradecemos nuevamente su preferencia y esperamos seguir siendo su opción de confianza.<br><br>
    ¡Gracias por elegirnos!<br><br>
    Atentamente,<br><br>
    ${nombreRemitente}
  `;

  const attachment = {
    Content: pdfBase64,
    Name: `${archivo}.pdf`,
    ContentType: 'application/pdf'
  };

  client.sendEmail({
    From: correoEmpresa,
    To: emailP,
    Subject: 'Orden de servicios Eme Colombia',
    HtmlBody: cuerpoCorreo,
    Attachments: [attachment],
  }, (error, response) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
    } else {
      console.log('Correo electrónico enviado con éxito:', response);
      res.status(200).json({ success: true, message: 'Correo enviado correctamente.' });
    }
  });
});


// FUNCION PARA CHECKLIST



// Ruta para enviar correos
app.post('/enviar-correo-checklist', (req, res) => {
  const { pdfBase64, emailP, archivo} = req.body;


  if (!pdfBase64 || pdfBase64.length === 0) {
    return res.status(400).json({ success: false, message: 'El archivo adjunto está vacío o no se generó correctamente.' });
  }

  const nombreRemitente = 'Eme Colombia';
  const correoEmpresa = 'tecnico@emecolombia.com.co';

  const cuerpoCorreo = `
    Estimado cliente,<br><br>
    Es un placer saludarle desde Eme Colombia. Agradecemos la confianza depositada en nuestros servicios y productos.<br><br>
    Adjunto a este correo, encontrará la prueba de funcionamiento.<br><br>
    Para información adicional, no dude en comunicarse con nuestro equipo de atención al cliente. Estamos aquí para ayudarle en todo momento.<br><br>
    Agradecemos nuevamente su preferencia y esperamos seguir siendo su opción de confianza.<br><br>
    ¡Gracias por elegirnos!<br><br>
    Atentamente,<br><br>
    ${nombreRemitente}
  `;

  const attachment = {
    Content: pdfBase64,
    Name: `${archivo}.pdf`,
    ContentType: 'application/pdf'
  };

  client.sendEmail({
    From: correoEmpresa,
    To: emailP,
    Subject: 'CheckList Eme Colombia',
    HtmlBody: cuerpoCorreo,
    Attachments: [attachment],
  }, (error, response) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
    } else {
      console.log('Correo electrónico enviado con éxito:', response);
      res.status(200).json({ success: true, message: 'Correo enviado correctamente.' });
    }
  });
});




// FUNCION PARA REPORTE DE MANTENIMIENTO



// Ruta para enviar correos
app.post('/enviar-correo-reporte', (req, res) => {
  const { pdfBase64, emailP, archivo} = req.body;


  if (!pdfBase64 || pdfBase64.length === 0) {
    return res.status(400).json({ success: false, message: 'El archivo adjunto está vacío o no se generó correctamente.' });
  }

  const nombreRemitente = 'Eme Colombia';
  const correoEmpresa = 'tecnico@emecolombia.com.co';

  const cuerpoCorreo = `
    Estimado cliente,<br><br>
    Es un placer saludarle desde Eme Colombia. Agradecemos la confianza depositada en nuestros servicios y productos.<br><br>
    Adjunto a este correo, encontrará el reporte de mantenimiento.<br><br>
    Para información adicional, no dude en comunicarse con nuestro equipo de atención al cliente. Estamos aquí para ayudarle en todo momento.<br><br>
    Agradecemos nuevamente su preferencia y esperamos seguir siendo su opción de confianza.<br><br>
    ¡Gracias por elegirnos!<br><br>
    Atentamente,<br><br>
    ${nombreRemitente}
  `;

  const attachment = {
    Content: pdfBase64,
    Name: `${archivo}.pdf`,
    ContentType: 'application/pdf'
  };

  client.sendEmail({
    From: correoEmpresa,
    To: emailP,
    Subject: 'Reporte de mantenimiento Eme Colombia',
    HtmlBody: cuerpoCorreo,
    Attachments: [attachment],
  }, (error, response) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
    } else {
      console.log('Correo electrónico enviado con éxito:', response);
      res.status(200).json({ success: true, message: 'Correo enviado correctamente.' });
    }
  });
});





// FUNCION PARA REMISIÓN



// Ruta para enviar correos
app.post('/enviar-correo-remision', (req, res) => {
  const { pdfBase64, emailP, archivo} = req.body;


  if (!pdfBase64 || pdfBase64.length === 0) {
    return res.status(400).json({ success: false, message: 'El archivo adjunto está vacío o no se generó correctamente.' });
  }

  const nombreRemitente = 'Eme Colombia';
  const correoEmpresa = 'tecnico@emecolombia.com.co';

  const cuerpoCorreo = `
    Estimado cliente,<br><br>
    Es un placer saludarle desde Eme Colombia. Agradecemos la confianza depositada en nuestros servicios y productos.<br><br>
    Adjunto a este correo, encontrará la remisión.<br><br>
    Para información adicional, no dude en comunicarse con nuestro equipo de atención al cliente. Estamos aquí para ayudarle en todo momento.<br><br>
    Agradecemos nuevamente su preferencia y esperamos seguir siendo su opción de confianza.<br><br>
    ¡Gracias por elegirnos!<br><br>
    Atentamente,<br><br>
    ${nombreRemitente}
  `;

  const attachment = {
    Content: pdfBase64,
    Name: `${archivo}.pdf`,
    ContentType: 'application/pdf'
  };

  client.sendEmail({
    From: correoEmpresa,
    To: emailP,
    Subject: 'Remisión Eme Colombia',
    HtmlBody: cuerpoCorreo,
    Attachments: [attachment],
  }, (error, response) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
    } else {
      console.log('Correo electrónico enviado con éxito:', response);
      res.status(200).json({ success: true, message: 'Correo enviado correctamente.' });
    }
  });
});





// FUNCION PARA ACTA ENTREGA



// Ruta para enviar correos
app.post('/enviar-correo-acta', (req, res) => {
  const { pdfBase64, emailP, archivo} = req.body;


  if (!pdfBase64 || pdfBase64.length === 0) {
    return res.status(400).json({ success: false, message: 'El archivo adjunto está vacío o no se generó correctamente.' });
  }

  const nombreRemitente = 'Eme Colombia';
  const correoEmpresa = 'tecnico@emecolombia.com.co';

  const cuerpoCorreo = `
    Estimado cliente,<br><br>
    Es un placer saludarle desde Eme Colombia. Agradecemos la confianza depositada en nuestros servicios y productos.<br><br>
    Adjunto a este correo, encontrará el Acta de entrega.<br><br>
    Para información adicional, no dude en comunicarse con nuestro equipo de atención al cliente. Estamos aquí para ayudarle en todo momento.<br><br>
    Agradecemos nuevamente su preferencia y esperamos seguir siendo su opción de confianza.<br><br>
    ¡Gracias por elegirnos!<br><br>
    Atentamente,<br><br>
    ${nombreRemitente}
  `;

  const attachment = {
    Content: pdfBase64,
    Name: `${archivo}.pdf`,
    ContentType: 'application/pdf'
  };

  client.sendEmail({
    From: correoEmpresa,
    To: emailP,
    Subject: 'Acta de entrega Eme Colombia',
    HtmlBody: cuerpoCorreo,
    Attachments: [attachment],
  }, (error, response) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
    } else {
      console.log('Correo electrónico enviado con éxito:', response);
      res.status(200).json({ success: true, message: 'Correo enviado correctamente.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

