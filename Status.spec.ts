import * as model from "./index"

describe("Status", () => {
	it("is created", () => expect(model.Status.is("created")).toBeTruthy())
	it("is deferred", () => expect(model.Status.is("deferred")).toBeTruthy())
	it("is pending", () => expect(model.Status.is("pending")).toBeTruthy())
	it("is denied", () => expect(model.Status.is("denied")).toBeTruthy())
	it("is ordered", () => expect(model.Status.is("ordered")).toBeTruthy())
	it("is cancelled", () => expect(model.Status.is("cancelled")).toBeTruthy())
	it("is charged", () => expect(model.Status.is("charged")).toBeTruthy())
	it("is paid", () => expect(model.Status.is("paid")).toBeTruthy())
	it("is refunded", () => expect(model.Status.is("refunded")).toBeTruthy())

	it("order created", () => expect(model.Status.change("created", "order")).toBe("ordered"))
	it("order deferred", () => expect(model.Status.change("deferred", "order")).toBe("ordered"))
	it("order pending", () => expect(model.Status.change("pending", "order")).toBe("ordered"))
	it("order denied", () => expect(model.Status.change("denied", "order")).toBe(undefined))
	it("order ordered", () => expect(model.Status.change("ordered", "order")).toBe(undefined))
	it("order cancelled", () => expect(model.Status.change("cancelled", "order")).toBe(undefined))
	it("order charged", () => expect(model.Status.change("charged", "order")).toBe(undefined))
	it("order paid", () => expect(model.Status.change("paid", "order")).toBe(undefined))
	it("order refunded", () => expect(model.Status.change("refunded", "order")).toBe(undefined))

	it("cancel created", () => expect(model.Status.change("created", "cancel")).toBe("cancelled"))
	it("cancel deferred", () => expect(model.Status.change("deferred", "cancel")).toBe("cancelled"))
	it("cancel pending", () => expect(model.Status.change("pending", "cancel")).toBe("cancelled"))
	it("cancel denied", () => expect(model.Status.change("denied", "cancel")).toBe(undefined))
	it("cancel ordered", () => expect(model.Status.change("ordered", "cancel")).toBe("cancelled"))
	it("cancel cancelled", () => expect(model.Status.change("cancelled", "cancel")).toBe(undefined))
	it("cancel charged", () => expect(model.Status.change("charged", "cancel")).toBe(undefined))
	it("cancel paid", () => expect(model.Status.change("paid", "cancel")).toBe(undefined))
	it("cancel refunded", () => expect(model.Status.change("refunded", "cancel")).toBe(undefined))

	it("charge created", () => expect(model.Status.change("created", "charge")).toBe(undefined))
	it("charge deferred", () => expect(model.Status.change("deferred", "charge")).toBe(undefined))
	it("charge pending", () => expect(model.Status.change("pending", "charge")).toBe(undefined))
	it("charge denied", () => expect(model.Status.change("denied", "charge")).toBe(undefined))
	it("charge ordered", () => expect(model.Status.change("ordered", "charge")).toBe("charged"))
	it("charge cancelled", () => expect(model.Status.change("cancelled", "charge")).toBe(undefined))
	it("charge charged", () => expect(model.Status.change("charged", "charge")).toBe(undefined))
	it("charge paid", () => expect(model.Status.change("paid", "charge")).toBe(undefined))
	it("charge refunded", () => expect(model.Status.change("refunded", "charge")).toBe(undefined))

	it("pay created", () => expect(model.Status.change("created", "pay")).toBe(undefined))
	it("pay deferred", () => expect(model.Status.change("deferred", "pay")).toBe(undefined))
	it("pay pending", () => expect(model.Status.change("pending", "pay")).toBe(undefined))
	it("pay denied", () => expect(model.Status.change("denied", "pay")).toBe(undefined))
	it("pay ordered", () => expect(model.Status.change("ordered", "pay")).toBe(undefined))
	it("pay cancelled", () => expect(model.Status.change("cancelled", "pay")).toBe(undefined))
	it("pay charged", () => expect(model.Status.change("charged", "pay")).toBe("paid"))
	it("pay paid", () => expect(model.Status.change("paid", "pay")).toBe(undefined))
	it("pay refunded", () => expect(model.Status.change("refunded", "pay")).toBe(undefined))

	it("refund created", () => expect(model.Status.change("created", "refund")).toBe(undefined))
	it("refund deferred", () => expect(model.Status.change("deferred", "refund")).toBe(undefined))
	it("refund pending", () => expect(model.Status.change("pending", "refund")).toBe(undefined))
	it("refund denied", () => expect(model.Status.change("denied", "refund")).toBe(undefined))
	it("refund ordered", () => expect(model.Status.change("ordered", "refund")).toBe(undefined))
	it("refund cancelled", () => expect(model.Status.change("cancelled", "refund")).toBe(undefined))
	it("refund charged", () => expect(model.Status.change("charged", "refund")).toBe("refunded"))
	it("refund paid", () => expect(model.Status.change("paid", "refund")).toBe("refunded"))
	it("refund refunded", () => expect(model.Status.change("refunded", "refund")).toBe(undefined))

	it("fail created", () => expect(model.Status.change("created", "fail")).toBe("created"))
	it("fail deferred", () => expect(model.Status.change("deferred", "fail")).toBe("deferred"))
	it("fail pending", () => expect(model.Status.change("pending", "fail")).toBe("pending"))
	it("fail denied", () => expect(model.Status.change("denied", "fail")).toBe("denied"))
	it("fail ordered", () => expect(model.Status.change("ordered", "fail")).toBe("ordered"))
	it("fail cancelled", () => expect(model.Status.change("cancelled", "fail")).toBe("cancelled"))
	it("fail charged", () => expect(model.Status.change("charged", "fail")).toBe("charged"))
	it("fail paid", () => expect(model.Status.change("paid", "fail")).toBe("paid"))
	it("fail refunded", () => expect(model.Status.change("refunded", "fail")).toBe("refunded"))

	it("created", () => expect(model.Status.toEvent("created")).toBe("fail"))
	it("deferred", () => expect(model.Status.toEvent("deferred")).toBe("defer"))
	it("pending", () => expect(model.Status.toEvent("pending")).toBe("pend"))
	it("denied", () => expect(model.Status.toEvent("denied")).toBe("deny"))
	it("ordered", () => expect(model.Status.toEvent("ordered")).toBe("order"))
	it("cancelled", () => expect(model.Status.toEvent("cancelled")).toBe("cancel"))
	it("charged", () => expect(model.Status.toEvent("charged")).toBe("charge"))
	it("paid", () => expect(model.Status.toEvent("paid")).toBe("pay"))
	it("refunded", () => expect(model.Status.toEvent("refunded")).toBe("refund"))

	it("sort", () => expect(model.Status.sort(["refunded", "ordered", "paid", "ordered"])).toEqual(["ordered", "ordered", "paid", "refunded"]))
})
