# Seguridad: dvtechsoftware.com

## Resumen

- **Certificado SSL:** no hay que comprarlo. Cloudflare emite y renueva automáticamente un certificado gratuito (Universal SSL) con cifrado TLS 1.2/1.3. Un certificado pagado (OV/EV) cifra exactamente igual; solo agrega validación de la empresa y no da más seguridad técnica a un sitio como este.
- **Superficie de ataque mínima:** el sitio es 100% estático. No tiene servidor propio, base de datos, panel de administración, WordPress, plugins ni contraseñas en el código. Lo que normalmente se "hackea" (inyección SQL, plugins desactualizados, credenciales de administrador) no existe aquí.
- **Ataques de denegación de servicio (DoS/DDoS):** el sitio se sirve desde la red global de Cloudflare, que incluye mitigación de DDoS **ilimitada y gratuita** en todos los planes. No hay un servidor de origen que se pueda saturar.

El riesgo real que queda está en **las cuentas** (Cloudflare, el registrador del dominio, GitHub y el correo). Por eso la sección 3 es la más importante.

---

## 1. Lo que ya está implementado en el código

| Medida | Dónde | Qué protege |
|---|---|---|
| **Content-Security-Policy estricta** (`default-src 'none'`, sin `unsafe-inline`) | `_headers` | Bloquea inyección de scripts (XSS): el navegador solo ejecuta JS y CSS del propio dominio y solo permite conexiones a Web3Forms. |
| **HSTS** (`Strict-Transport-Security`, 1 año, incluye subdominios) | `_headers` | Obliga a usar siempre HTTPS y evita ataques de degradación a HTTP. |
| **Anti-clickjacking** (`X-Frame-Options: DENY` + `frame-ancestors 'none'`) | `_headers` | Nadie puede incrustar el sitio en un iframe para engañar a los usuarios. |
| `X-Content-Type-Options: nosniff` | `_headers` | Evita que el navegador interprete archivos con un tipo distinto al declarado. |
| `Referrer-Policy`, `Permissions-Policy` | `_headers` | No filtra URLs a terceros y bloquea cámara, micrófono, ubicación, pagos, etc. |
| `Cross-Origin-Opener-Policy` / `Cross-Origin-Resource-Policy` | `_headers` | Aísla el sitio de otras pestañas y orígenes. |
| **Sin dependencias de terceros:** fuentes alojadas en el propio sitio, sin CDNs ni librerías externas | `assets/` | Si un tercero es comprometido, no puede inyectar código en el sitio (ataque a la cadena de suministro). Tampoco envía datos de los visitantes a Google. |
| **Formulario: honeypot + tiempo mínimo de llenado + enfriamiento de 60 s** | `assets/js/app.js` | Frena bots de spam y envíos repetidos. |
| **Formulario: límites de longitud, limpieza de caracteres de control y envío como JSON de texto** | `index.html` / `app.js` | Evita inyección de cabeceras de correo y mensajes gigantes. |
| La URL técnica `*.pages.dev` no se indexa | `_headers` | Solo aparece en Google el dominio oficial. |
| `/.well-known/security.txt` (RFC 9116) | archivo | Indica a investigadores cómo reportar vulnerabilidades de forma responsable. |

> **Si agregas algo nuevo** (Google Analytics, un chat, un mapa de Google, etc.), hay que autorizar ese dominio en la `Content-Security-Policy` de `_headers`. Si no, el navegador lo bloqueará. Es intencional.

---

## 2. Configuración en Cloudflare (plan Free, ~15 minutos)

Hazlo después de que el dominio esté activo en Cloudflare (ver `DEPLOY.md`).

### SSL/TLS
- **SSL/TLS → Overview:** modo **Full (strict)**.
- **SSL/TLS → Edge Certificates:**
  - **Always Use HTTPS:** ON.
  - **Minimum TLS Version:** TLS 1.2.
  - **TLS 1.3:** ON.
  - **Automatic HTTPS Rewrites:** ON.
- **HSTS:** ya va en `_headers`; no hace falta activarlo también en el panel.

### Protección contra DDoS y bots
- **Security → DDoS:** activo por defecto; no requiere acción.
- **Security → Bots → Bot Fight Mode:** ON. Desafía a bots automatizados conocidos.
- **Security → WAF → Managed rules:** activa el **Cloudflare Free Managed Ruleset**. Bloquea ataques comunes.
- **Security → WAF → Rate limiting rules:** crea una regla, por ejemplo:
  - *Si* la ruta contiene `/` *y* la misma IP hace **más de 100 solicitudes en 10 segundos** → **Block** durante 1 minuto.
- **Under Attack Mode** (en Overview): úsalo **solo** durante un ataque activo. Muestra un desafío a cada visitante antes de entrar.

### DNS
- **DNS → Settings → DNSSEC:** **Enable**. Copia el registro *DS* que te da Cloudflare y pégalo en el panel de tu registrador. Esto evita que alguien falsifique las respuestas DNS de tu dominio.
- **Registro CAA** (solo Cloudflare puede emitir certificados para tu dominio). Cloudflare los gestiona automáticamente al tener Universal SSL. Si agregas CAA manuales, incluye las autoridades que Cloudflare indica.

### Correo (evitar que suplanten @dvtechsoftware.com)
Email Routing agrega SPF automáticamente. Agrega además un registro **DMARC**:

| Tipo | Nombre | Contenido |
|---|---|---|
| TXT | `_dmarc` | `v=DMARC1; p=quarantine; rua=mailto:contacto@dvtechsoftware.com` |

Si nunca vas a **enviar** correos desde `@dvtechsoftware.com`, puedes subirlo a `p=reject` al cabo de unas semanas. Si luego configuras "Enviar como" con Brevo u otro SMTP, agrega primero su SPF/DKIM.

---

## 3. Seguridad de las cuentas (lo más importante)

Un atacante no necesita "hackear" un sitio estático si puede entrar a la cuenta que lo controla.

- [ ] **Autenticación en dos pasos (2FA)** con app autenticadora (Google Authenticator, Authy, 1Password) o llave física en:
  - Cloudflare.
  - **El registrador del dominio.**
  - GitHub.
  - El correo personal que recibe el alias y los avisos.
- [ ] **Bloqueo de transferencia del dominio** (*Domain Lock* / *Transfer Lock*) activado en el registrador.
- [ ] **Renovación automática del dominio** activada. Un dominio vencido puede ser comprado por otra persona.
- [ ] Contraseñas únicas y largas, guardadas en un gestor de contraseñas.
- [ ] Guarda los **códigos de recuperación** de 2FA en un lugar seguro, fuera del computador.
- [ ] En Web3Forms, restringe el formulario al dominio `dvtechsoftware.com`.
- [ ] Si más personas administran el sitio, dales acceso con **sus propias cuentas** (miembros en Cloudflare o colaboradores en GitHub). Nunca compartan la contraseña.

---

## 4. Verificación después de publicar

| Herramienta | Qué revisar | Meta |
|---|---|---|
| <https://securityheaders.com/?q=dvtechsoftware.com> | Cabeceras de seguridad | **A** o **A+** |
| <https://www.ssllabs.com/ssltest/analyze.html?d=dvtechsoftware.com> | Configuración SSL/TLS | **A** o **A+** |
| <https://observatory.mozilla.org> | Revisión general | **A** o superior |
| <https://dnsviz.net> | DNSSEC | Cadena válida (en verde) |
| <https://hstspreload.org> | Elegibilidad para precarga HSTS | Opcional (ver nota) |

> **Precarga HSTS (opcional, avanzado).** Agregar `; preload` a la cabecera HSTS y registrar el dominio en hstspreload.org hace que los navegadores **nunca** intenten HTTP. Es difícil de revertir y afecta a todos los subdominios. Hazlo solo cuando todo esté estable y todos los subdominios usen HTTPS.

---

## 5. Mantenimiento

- **Cada año:** actualizar la fecha `Expires` de `/.well-known/security.txt`.
- **Cada 6 meses:** repetir las pruebas de la sección 4 y revisar quién tiene acceso a Cloudflare, GitHub y el registrador.
- **Monitoreo gratis:** crea un monitor en UptimeRobot o Better Stack que te avise por correo si el sitio se cae.
- **Notificaciones de Cloudflare:** en *Notifications*, activa las alertas de ataques DDoS y de expiración de certificados.
