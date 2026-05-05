# mebelumontaza-web

Mēbeļu montāžas un pārvākšanas servisa mājaslapa. React + TypeScript + Vite, deployed uz Vercel ar SSG (vite-react-ssg).

## Tech stack

- React 18 + TypeScript + Vite
- TailwindCSS + Radix UI
- React Router v6
- Framer Motion (animācijas)
- React Hook Form + Zod (formu validācija)
- EmailJS (kontaktformas e-pasti)
- vite-plugin-sitemap (SEO sitemap)

## Lokālais development

```bash
npm install
npm run dev    # http://localhost:8080
```

Build:

```bash
npm run build      # SSG build (vite-react-ssg)
npm run preview    # apskatīt produkcijas build
```

## Form setup (EmailJS)

Kontaktforma izmanto [EmailJS](https://dashboard.emailjs.com/), lai sūtītu e-pastus tieši no klienta puses bez backend servera. Ja env vars trūkst, forma fallback uz `mailto:` ar pre-filled body.

**3 soļi konfigurācijai:**

1. **Signup** — izveido kontu vietnē <https://dashboard.emailjs.com/>
2. **Service + Template:**
   - Pievieno e-pasta servisu (Gmail / Outlook / cits) → kopē **Service ID**
   - Izveido e-pasta veidni ar mainīgajiem `{{name}}`, `{{phone}}`, `{{service}}`, `{{description}}` → kopē **Template ID**
   - Account → API Keys → kopē **Public Key**
3. **Vercel env vars** — Project Settings → Environment Variables → pievieno:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_CONTACT_EMAIL` (saņēmējs un mailto fallbackam)

Pēc env vars pievienošanas — re-deploy projektu Vercel pusē, lai jaunie mainīgie tiktu iekļauti build laikā.

Skat. arī `.env.example` failu.

## Deployment

Pievienots Vercel — push uz `main` branch automātiski trigerē jaunu deployment.
