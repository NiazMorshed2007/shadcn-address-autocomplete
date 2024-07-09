export const mockAddresses = [
	{
		placePrediction: {
			place:
				"places/Eh01dGggQXZlbnVlLCBOZXcgWW9yaywgTlksIFVTQSIuKiwKFAoSCfVHOJ2iWMKJEUp3QQG6-01WEhQKEgk7CD_TpU_CiRFi_nfhBo8LyA",
			placeId:
				"Eh01dGggQXZlbnVlLCBOZXcgWW9yaywgTlksIFVTQSIuKiwKFAoSCfVHOJ2iWMKJEUp3QQG6-01WEhQKEgk7CD_TpU_CiRFi_nfhBo8LyA",
			text: {
				text: "5th Avenue, New York, NY, USA",
				matches: [{ endOffset: 1 }],
			},
			structuredFormat: {
				mainText: { text: "5th Avenue", matches: [{ endOffset: 1 }] },
				secondaryText: { text: "New York, NY, USA" },
			},
			types: ["route", "geocode"],
		},
	},
	{
		placePrediction: {
			place:
				"places/EiE1dGggQXZlbnVlIFNvdXRoLCBOYXBsZXMsIEZMLCBVU0EiLiosChQKEgn700PbneHaiBH2-htwhluvVRIUChIJrdfCc5vh2ogRqpos1xhTP2c",
			placeId:
				"EiE1dGggQXZlbnVlIFNvdXRoLCBOYXBsZXMsIEZMLCBVU0EiLiosChQKEgn700PbneHaiBH2-htwhluvVRIUChIJrdfCc5vh2ogRqpos1xhTP2c",
			text: {
				text: "5th Avenue South, Naples, FL, USA",
				matches: [{ endOffset: 1 }],
			},
			structuredFormat: {
				mainText: { text: "5th Avenue South", matches: [{ endOffset: 1 }] },
				secondaryText: { text: "Naples, FL, USA" },
			},
			types: ["route", "geocode"],
		},
	},
	{
		placePrediction: {
			place: "places/ChIJUUEWW_JZwokR9gFMSAdcn9k",
			placeId: "ChIJUUEWW_JZwokR9gFMSAdcn9k",
			text: {
				text: "50 Hudson Yards, New York, NY, USA",
				matches: [{ endOffset: 1 }],
			},
			structuredFormat: {
				mainText: { text: "50 Hudson Yards", matches: [{ endOffset: 1 }] },
				secondaryText: { text: "New York, NY, USA" },
			},
			types: ["geocode", "street_address"],
		},
	},
	{
		placePrediction: {
			place: "places/ChIJm1IklZlw44kRgK8tf3E35xA",
			placeId: "ChIJm1IklZlw44kRgK8tf3E35xA",
			text: {
				text: "55 Fruit Street, Boston, MA, USA",
				matches: [{ endOffset: 1 }],
			},
			structuredFormat: {
				mainText: { text: "55 Fruit Street", matches: [{ endOffset: 1 }] },
				secondaryText: { text: "Boston, MA, USA" },
			},
			types: ["geocode", "street_address"],
		},
	},
	{
		placePrediction: {
			place: "places/ChIJ9wQMjsNYwokRs0JnymlXYG4",
			placeId: "ChIJ9wQMjsNYwokRs0JnymlXYG4",
			text: {
				text: "525 East 68th Street, New York, NY, USA",
				matches: [{ endOffset: 1 }],
			},
			structuredFormat: {
				mainText: {
					text: "525 East 68th Street",
					matches: [{ endOffset: 1 }],
				},
				secondaryText: { text: "New York, NY, USA" },
			},
			types: ["geocode", "street_address"],
		},
	},
];

export const mockPlaces = [
	{
		placeId:
			"Eh01dGggQXZlbnVlLCBOZXcgWW9yaywgTlksIFVTQSIuKiwKFAoSCfVHOJ2iWMKJEUp3QQG6-01WEhQKEgk7CD_TpU_CiRFi_nfhBo8LyA",
		adrAddress: `<span class="street-address">5th Ave</span>, <span class="locality">New York</span>, <span class="region">NY</span>, <span class="country-name">USA</span>`,
		address: {
			address1: "5th Ave",
			address2: "",
			city: "New York",
			country: "USA",
			formattedAddress: "5th Ave, New York, NY, USA",
			lat: 40.7744147,
			lng: -73.9656176,
			postalCode: "",
			region: "NY",
		},
	},
	{
		placeId:
			"EiE1dGggQXZlbnVlIFNvdXRoLCBOYXBsZXMsIEZMLCBVU0EiLiosChQKEgn700PbneHaiBH2-htwhluvVRIUChIJrdfCc5vh2ogRqpos1xhTP2c",
		adrAddress: `<span class="street-address">5th Ave S</span>, <span class="locality">Naples</span>, <span class="region">FL</span> <span class="postal-code">34102</span>, <span class="country-name">USA</span>`,
		address: {
			address1: "5th Ave S",
			address2: "",
			city: "Naples",
			country: "USA",
			formattedAddress: "5th Ave S, Naples, FL 34102, USA",
			lat: 26.1418,
			lng: -81.796,
			postalCode: "34102",
			region: "FL",
		},
	},
	{
		placeId: "ChIJUUEWW_JZwokR9gFMSAdcn9k",
		adrAddress: `<span class="street-address">50 Hudson Yards</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10001</span>, <span class="country-name">USA</span>`,
		address: {
			address1: "50 Hudson Yards",
			address2: "",
			city: "New York",
			country: "USA",
			formattedAddress: "50 Hudson Yards, New York, NY 10001, USA",
			lat: 40.7536,
			lng: -74.0027,
			postalCode: "10001",
			region: "NY",
		},
	},
	{
		placeId: "ChIJm1IklZlw44kRgK8tf3E35xA",
		adrAddress: `<span class="street-address">55 Fruit St</span>, <span class="locality">Boston</span>, <span class="region">MA</span> <span class="postal-code">02114</span>, <span class="country-name">USA</span>`,
		address: {
			address1: "55 Fruit St",
			address2: "",
			city: "Boston",
			country: "USA",
			formattedAddress: "55 Fruit St, Boston, MA 02114, USA",
			lat: 42.3626,
			lng: -71.0696,
			postalCode: "02114",
			region: "MA",
		},
	},
	{
		placeId: "ChIJ9wQMjsNYwokRs0JnymlXYG4",
		adrAddress: `<span class="street-address">525 E 68th St</span>, <span class="locality">New York</span>, <span class="region">NY</span> <span class="postal-code">10065</span>, <span class="country-name">USA</span>`,
		address: {
			address1: "525 E 68th St",
			address2: "",
			city: "New York",
			country: "USA",
			formattedAddress: "525 E 68th St, New York, NY 10065, USA",
			lat: 40.7648,
			lng: -73.9547,
			postalCode: "10065",
			region: "NY",
		},
	},
];
