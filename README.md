# Epoch

**Code. Data. Community.**

A student-run collective tackling real-world challenges through data science and AI.

🌐 **Live Site:** [epoch-regina.vercel.app](https://epoch-regina.vercel.app)

💬 **Discord:** [Join the Server](https://discord.gg/w4YuB5QY3u)

## Featured Projects

- **Course Compass** — A specialized chatbot for university CS students powered by a Neo4j Knowledge Graph
- **CSIRO Image2Biomass Prediction** — ConvNeXt-based Deep Learning pipeline for vegetation biomass estimation
- **Microsoft AI Dev Days Hackathon** — Currently participating!


## Team

| Name | Role | GitHub |
|------|------|--------|
| Gurinayat Mangat | Founder | [@gkm2004](https://github.com/gkm2004) |
| Favour Ejike | Core Member | [@Amachivine](https://github.com/Amachivine) |
| Ishan Soni | Core Member | [@soni-ishan](https://github.com/soni-ishan) |
| Simarpreet Singh Purba | Core Member | [@simarpreet0037](https://github.com/simarpreet0037) |

## Contact Form Setup

The contact page sends messages through SMTP using the `/api/contact` route. Copy `.env.example` to `.env.local` and set these values:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

By default, the recipient inbox is `epoch.outreach@gmail.com`.

Once those are set, the contact form at `/contact` will send messages to your inbox.
