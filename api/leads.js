import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { address, name, phone, email, message, context, city } = req.body ?? {};

  if (!phone || !String(phone).trim()) {
    return res.status(400).json({ error: "Phone is required" });
  }

  const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ?? null;
  const ua = req.headers["user-agent"] ?? null;

  try {
    await sql`
      insert into leads (context, city, address, name, phone, email, message, user_agent, ip)
      values (
        ${context ?? null},
        ${city ?? null},
        ${address ?? null},
        ${name ?? null},
        ${phone},
        ${email ?? null},
        ${message ?? null},
        ${ua},
        ${ip}
      )
    `;
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("lead insert failed", err);
    return res.status(500).json({ error: "Could not save lead" });
  }
}
