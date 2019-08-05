import { Payment } from "."

describe("Payment", () => {
	const payments: Payment[] = [
		{
			id: "3",
			type: "defer",
			number: "gorka",
			method: "sms",
			contact: "0911-11122",
			message: "",
			items: 4000.00,
			currency: "SEK",
			service: "",
			created: "2019-06-06 13:39",
			amount: 4000.00,
			status: "created",
		},
		{
			id: "1",
			type: "defer",
			number: "ab1",
			method: "sms",
			contact: "070-1233211",
			message: "",
			items: 200.00,
			currency: "SEK",
			service: "",
			created: "2019-06-08 13:38",
			amount: 200.00,
			status: "created",
		},
		{
			id: "2",
			type: "defer",
			number: "zztop",
			method: "sms",
			contact: "018-987123",
			message: "",
			items: 9000.01,
			currency: "SEK",
			service: "",
			created: "2019-06-07 13:37",
			amount: 9000.01,
			status: "created",
		},
		{
			id: "4",
			type: "defer",
			number: "hihat1",
			method: "sms",
			contact: "08-55533322",
			message: "",
			items: 300.00,
			currency: "SEK",
			service: "",
			created: "2019-06-07 13:37",
			amount: 300.00,
			status: "created",
		},
	]
	const sortedPayments: Payment[] = [
		{
			id: "1",
			type: "defer",
			number: "ab1",
			method: "sms",
			contact: "070-1233211",
			message: "",
			items: 200.00,
			currency: "SEK",
			service: "",
			created: "2019-06-08 13:38",
			amount: 200.00,
			status: "created",
		},
		{
			id: "2",
			type: "defer",
			number: "zztop",
			method: "sms",
			contact: "018-987123",
			message: "",
			items: 9000.01,
			currency: "SEK",
			service: "",
			created: "2019-06-07 13:37",
			amount: 9000.01,
			status: "created",
		},
		{
			id: "4",
			type: "defer",
			number: "hihat1",
			method: "sms",
			contact: "08-55533322",
			message: "",
			items: 300.00,
			currency: "SEK",
			service: "",
			created: "2019-06-07 13:37",
			amount: 300.00,
			status: "created",
		},
		{
			id: "3",
			type: "defer",
			number: "gorka",
			method: "sms",
			contact: "0911-11122",
			message: "",
			items: 4000.00,
			currency: "SEK",
			service: "",
			created: "2019-06-06 13:39",
			amount: 4000.00,
			status: "created",
		},
	]
	it("sort", () => expect(Payment.sort(payments, "created")).toEqual(sortedPayments))
})
