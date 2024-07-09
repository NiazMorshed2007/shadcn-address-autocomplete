import "server-only";

import type { CountryCode } from "libphonenumber-js";
import { headers } from "next/headers";

export async function getGeolocation() {
	const ipCountry = headers().get("x-vercel-ip-country") as CountryCode | null;

	return ipCountry;
}
