import * as authly from "authly"
import * as card from "@payfunc/model-card"
import { Base } from "../Base"
import { Creatable as CardCreatable } from "./Creatable"

export interface Card extends Base {
	type: "card"
	card?: authly.Token
	customer?: authly.Identifier | authly.Token // @deprecated // Token is deprecated.
	scheme: card.Card.Scheme
	iin: string
	last4: string
	expires: card.Card.Expires
	charge?: "auto" | "balance"
	scheduled?: true
	schemeReference?: string
}

export namespace Card {
	export function is(value: any | Card): value is Card {
		return (
			typeof value == "object" &&
			value.type == "card" &&
			(value.card == undefined || authly.Token.is(value.card)) &&
			(value.customer == undefined || authly.Identifier.is(value.customer, 16) || authly.Token.is(value.customer)) &&
			card.Card.Scheme.is(value.scheme) &&
			typeof value.iin == "string" &&
			value.iin.length == 6 &&
			typeof value.last4 == "string" &&
			value.last4.length == 4 &&
			card.Card.Expires.is(value.expires) &&
			(value.charge == undefined || value.charge == "balance" || value.charge == "auto") &&
			(value.scheduled == undefined || value.scheduled == true) &&
			(value.schemeReference == undefined || typeof value.schemeReference == "string") &&
			Base.is(value)
		)
	}
	export type Creatable = CardCreatable
	export namespace Creatable {
		export const is = CardCreatable.is
		export const flaw = CardCreatable.flaw
		export const from = CardCreatable.from
	}
	export type Scheme = card.Card.Scheme
	export namespace Scheme {
		export const is = card.Card.Scheme.is
	}
	export type Expires = card.Card.Expires
	export namespace Expires {
		export const is = card.Card.Expires.is
	}
}
