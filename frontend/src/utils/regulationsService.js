import { API_CONFIG } from "../config/env";

export async function getRegulations() {
  const base = API_CONFIG.baseUrl.replace(/\/$/, "");
  const url = `${base}/regulations`;

  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Regulations API error:", err);
    throw err;
  }
}
