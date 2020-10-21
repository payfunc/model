import { Status } from "../Status"

export type StatusList = {
	[status in Status]?: number | undefined
}
export namespace StatusList {
	export function is(value: any | StatusList): value is StatusList {
		return (
			typeof value == "object" &&
			Object.entries(value).every(
				status => Status.is(status[0]) && (status[1] == undefined || typeof status[1] == "number")
			)
		)
	}
}
