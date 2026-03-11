export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {

    const data = await req.json();

    console.log("Booking received:", data);

    return Response.json({
      success: true,
      message: "Booking berhasil diterima"
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: "Booking gagal"
    });

  }
}