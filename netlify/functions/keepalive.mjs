// Supabase rests a free project after a week with no activity. This touches
// it once a day so a quiet week never locks members out.
export default async () => {
  const r = await fetch("https://xvlyrasjwxfwaxhjtzoy.supabase.co/rest/v1/members?select=id&limit=1", {
    headers: { apikey: "sb_publishable_L96Q2yKY34N2ixQ85BhQxg_0n9Ujmek" },
  });
  return new Response("keepalive " + r.status);
};
export const config = { schedule: "17 19 * * *" };
