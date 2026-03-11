export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const booking = await prisma.bookings.create({
      data: {
        bookingId: "RINJANI-" + Date.now(),
        fullname: data.fullname,
        nationality: data.nationality,
        phone: data.phone,
        email: data.email,
        service: data.service,
        adults: Number(data.adults),
        kids: Number(data.kids),
        pickupDate: new Date(data.pickupDate),
        pickupLocation: data.pickupLocation,
        trekFrom: new Date(data.trekFrom),
        trekTo: new Date(data.trekTo),
        notes: data.notes,
        paymentMethod: data.paymentMethod,
        status: "pending"
      }
    });

    return Response.json({
      success: true,
      booking
    });

  } catch (error) {

    console.error(error);

    return Response.json({
      success: false,
      error: "Booking gagal"
    });

  }
}