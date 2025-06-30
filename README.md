# TradinAI

Aplicación web de ejemplo que muestra cómo integrar TradingView con React y Express.

## Características
- Frontend en React (`client`)
- Backend en Express (`server`)
- Inicio de sesión con Google (ver variables de entorno)
- Muestra señales de compra/venta sobre el gráfico

## Instalación rápida

```bash
cd server && npm install
cd ../client && npm install
```

## Ejecución

En una terminal ejecutar el servidor:

```bash
cd server
npm start
```

En otra terminal iniciar el cliente:

```bash
cd client
npm start
```

Abre `http://localhost:3000` en el navegador.

## Notas
- Las señales se generan como datos de ejemplo en el backend.
- Debes configurar `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` en variables de entorno para el inicio de sesión real.
- Esta aplicación es solo un punto de partida y no constituye asesoramiento financiero.
