# Guía de despliegue: dbtechsoftware.com

El sitio es **un solo archivo estático** (`index.html`), sin servidor ni base de datos. No necesita un hosting pagado.

## Arquitectura recomendada (costo: USD 0 al mes)

| Pieza | Servicio | Costo |
|---|---|---|
| DNS del dominio | **Cloudflare** (plan Free) | Gratis |
| Hosting del sitio | **Cloudflare Pages** | Gratis, con HTTPS y CDN |
| Alias de correo `contacto@dbtechsoftware.com` → tu correo personal | **Cloudflare Email Routing** | Gratis |
| Envío del formulario de contacto por correo | **Web3Forms** | Gratis (plan básico) |

Solo sigues pagando la renovación anual del dominio con tu registrador actual.

> **Alternativas.** GitHub Pages y Netlify también son gratuitas. Si algún día quieren buzones de correo reales (no solo alias), un plan económico de Hostinger, Zoho Mail o Google Workspace sirve. Para este sitio no hace falta.

---

## Paso 1: llevar el DNS del dominio a Cloudflare

1. Crea una cuenta en <https://dash.cloudflare.com> y elige **Add a domain** → `dbtechsoftware.com` → plan **Free**.
2. Cloudflare importa los registros DNS existentes. Revísalos y continúa.
3. Cloudflare te muestra **2 nameservers** (por ejemplo `xxx.ns.cloudflare.com`).
4. Entra al panel donde compraste el dominio (GoDaddy, Namecheap, Hostinger, etc.) y reemplaza los nameservers por los de Cloudflare.
5. Espera la activación. Suele tardar minutos, pero puede llegar a 24 horas. Cloudflare te avisa por correo.

## Paso 2: crear el alias de correo

1. En Cloudflare: **dbtechsoftware.com → Email → Email Routing → Get started**.
2. Agrega la dirección de destino: tu correo personal. Te llega un correo de verificación que debes confirmar.
3. Crea la regla: **Custom address** `contacto` → **Send to** tu correo personal.
4. Acepta que Cloudflare agregue los registros MX y SPF automáticamente.
5. Prueba: envía un correo a `contacto@dbtechsoftware.com` desde otra cuenta. Debe llegar a tu bandeja personal.

> Si quieres **responder como** `contacto@…` desde Gmail, configúralo en Gmail → Configuración → Cuentas → "Enviar como". Requiere un SMTP; Brevo ofrece uno gratuito. Es opcional.

## Paso 3: activar el formulario (Web3Forms)

1. Entra a <https://web3forms.com>, escribe `contacto@dbtechsoftware.com` y pide tu **Access Key**. Llega a ese correo, que gracias al alias termina en tu bandeja.
2. Abre `index.html`, busca el bloque `CONFIG` al inicio del `<script>` final y reemplaza el valor:
   ```js
   const CONFIG = {
     web3formsKey: "PEGA-AQUÍ-TU-ACCESS-KEY",
     contactEmail: "contacto@dbtechsoftware.com",
     whatsapp: "57XXXXXXXXXX"   // tu número real, con 57 y sin "+" ni espacios
   };
   ```
3. Mientras la llave diga `YOUR_…`, el formulario funciona en **modo demo**: valida los datos y muestra el mensaje de éxito, pero no envía nada.
4. Recomendado: en el panel de Web3Forms, restringe los envíos al dominio `dbtechsoftware.com` y activa la protección contra spam. El sitio ya incluye un campo *honeypot* contra bots.

> La Access Key de Web3Forms está pensada para ir en el HTML público. Solo permite enviar mensajes a tu correo y no da acceso a tu cuenta.

## Paso 4: publicar el sitio en Cloudflare Pages

**Opción A, sin Git (la más rápida):**
1. Cloudflare → **Workers & Pages → Create → Pages → Upload assets**.
2. Nombre del proyecto: `dbtechsoftware`. Arrastra la carpeta que contiene `index.html` y pulsa **Deploy**.
3. Queda publicado en `https://dbtechsoftware.pages.dev`.

**Opción B, con GitHub (cada `git push` actualiza el sitio):**
1. Sube la carpeta a un repositorio, por ejemplo `dbtechsoftware-web`.
2. **Workers & Pages → Create → Pages → Connect to Git**, elige el repositorio y usa: *Framework preset* = None, *Build command* = (vacío), *Output directory* = `/`.

## Paso 5: conectar el dominio

1. En el proyecto de Pages: **Custom domains → Set up a domain** → `dbtechsoftware.com`. Repite el proceso para `www.dbtechsoftware.com`.
2. Como el DNS ya está en Cloudflare, los registros y el certificado HTTPS se crean solos en pocos minutos.
3. Opcional: redirige `www` a la versión sin `www` con **Rules → Redirect Rules**.

## Paso 6: lista de verificación final

- [ ] `https://dbtechsoftware.com` carga con el candado HTTPS.
- [ ] Los botones ES/EN y el selector de temas funcionan. `?lang=en` abre el sitio directamente en inglés.
- [ ] El formulario envía y el correo llega a tu bandeja (revisa también Spam la primera vez).
- [ ] El botón de WhatsApp abre el chat con tu número real.
- [ ] Reemplazaste el logo provisional (ver abajo) y los textos o clientes de ejemplo.
- [ ] Publicaste la Política de Privacidad. La exige la Ley 1581 de 2012; hoy el enlace apunta a `#privacidad`.
- [ ] Opcional: registra el sitio en Google Search Console y en Google Business Profile.

## Personalización rápida

- **Logo:** en `index.html` busca el comentario `LOGO:` y reemplaza el `<svg>` por `<img src="logo.svg" class="brand-mark" alt="">`. Haz lo mismo en el footer y pon el archivo `logo.svg` junto a `index.html`. El favicon es el `<link rel="icon">` del `<head>`.
- **Textos en español:** edítalos directamente en el HTML.
- **Textos en inglés:** edítalos en el objeto `EN` del script, con la misma clave `data-i18n`.
- **Colores de los temas:** variables CSS al inicio del `<style>` (`[data-theme="light"]`, `dark`, `ocean`, `sunset`).
- **Contenido de ejemplo:** las cifras, los clientes, los casos y los testimonios son inventados. Cámbialos por datos reales antes de lanzar o en cuanto los tengas.
