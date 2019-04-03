import { Base } from "./Base"
import { Terms as InvoiceTerms } from "../Payment/Invoice/Terms"

export interface Invoice extends Base {
	type: "invoice"
	terms: InvoiceTerms[]
}

export namespace Invoice {
	export function is(value: any | Invoice): value is Invoice {
		return Base.is(value) &&
			value.type == "invoice"
	}
	export type Terms = InvoiceTerms
	export namespace Terms {
		// tslint:disable-next-line:no-shadowed-variable
		export const is = InvoiceTerms.is
	}
}
