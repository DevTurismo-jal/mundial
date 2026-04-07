const BASE =
  "https://guadalajara.publicbikesystem.net/customer/gbfs/v2/en";
const ALLOWED = ["station_information", "station_status"];

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ feed: string }> }
) {
  const { feed } = await params;

  if (!ALLOWED.includes(feed)) {
    return Response.json({ error: "Feed no válido" }, { status: 400 });
  }

  const res = await fetch(`${BASE}/${feed}`, {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    return Response.json(
      { error: "Error al obtener datos de MiBici" },
      { status: 502 }
    );
  }

  return Response.json(await res.json(), {
    headers: {
      "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
    },
  });
}
