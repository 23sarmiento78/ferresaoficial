// Función serverless para el manejo de contacto
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Método no permitido' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Aquí puedes agregar lógica adicional como envío de emails
    // o integración con otros servicios

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Mensaje recibido correctamente'
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Error al procesar la solicitud'
      })
    };
  }
}; 