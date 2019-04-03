import { Base } from "./Base"
import { Plan as InstallmentPlan } from "../Payment/Installment/Plan"

export interface Installment extends Base {
	type: "installment"
	plans: InstallmentPlan[]
}

export namespace Installment {
	export function is(value: any | Installment): value is Installment {
		return Base.is(value) &&
			value.type == "installment"
	}
	export type Plan = InstallmentPlan
	export namespace Plan {
		// tslint:disable-next-line:no-shadowed-variable
		export const is = InstallmentPlan.is
	}
}
