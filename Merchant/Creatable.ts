import * as authly from "authly"
import * as gracely from "gracely"

export interface Creatable {
	name: string
	option: authly.Payload.Data
	terms?: string
	logotype?: string
}

export namespace Creatable {
	export function is(value: any | Creatable): value is Creatable {
		return typeof value == "object" &&
			typeof value.name == "string" &&
			typeof value.option == "object" &&
			(value.terms == undefined || typeof value.terms == "string") &&
			(value.logotype == undefined || typeof value.logotype == "string")
	}
	export function flaw(value: any | Creatable): gracely.Flaw {
		return {
			type: "model.Merchant.Creatable",
			flaws: typeof value != "object" ? undefined :
				[
					typeof value.name == "string" || { property: "name", type: "string" },
					typeof value.option == "object" || { property: "option", type: "authly.Payload.Data" },
					value.terms == undefined || typeof value.terms == "string" || { property: "terms", type: "string | undefined" },
					value.logotype == undefined || typeof value.logotype == "string" || { property: "logotype", type: "string | undefined" },
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
