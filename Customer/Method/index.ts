import * as authly from "authly"
import { verify as verifyToken } from "../../verify"
import { Card as MethodCard } from "./Card"
import { Creatable as MethodCreatable } from "./Creatable"
import { Type as MethodType } from "./Type"

export type Method = Method.Card

export namespace Method {
	export function is(value: Method | any): value is Method {
		return MethodCard.is(value)
	}
	export async function verify(token: authly.Token): Promise<Method | undefined> {
		const result = await verifyToken(token)
		if (result) {
			result.token = token
			delete result.reference
		}
		return is(result) ? result : undefined
	}
	export type Card = MethodCard
	export namespace Card {
		export const is = MethodCard.is
		export const template = MethodCard.template
		export type Creatable = MethodCard.Creatable
		export namespace Creatable {
			export const is = MethodCard.Creatable.is
			export const verify = MethodCard.Creatable.verify
			export type Token = MethodCard.Creatable.Token
			export namespace Token {
				export const is = MethodCard.Creatable.Token.is
			}
		}
	}
	export type Creatable = MethodCreatable
	export namespace Creatable {
		export const is = MethodCreatable.is
	}
	export type Type = MethodType
	export namespace Type {
		export const is = MethodType.is
	}
}
