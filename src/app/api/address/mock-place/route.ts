import { mockPlaces } from "@/app/_static/mock";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(
		req.url,
		`http://${req.headers?.get("host")}`,
	);
	const placeId = searchParams.get("placeId");
	const mockPlace = mockPlaces.find((place) => place.placeId === placeId);

	return NextResponse.json({ data: mockPlace, error: null });
}
