import { Address } from "./Address/Address"
import { Addresses } from "./Addresses"
import { EmailAddresses } from "./EmailAddresses"
import { Name } from "./Name"

export interface Customer {
	type?: "organization" | "person"
	registrationNumber?: string
	id: string
	name?: string | Name
	address?: Address | Addresses
	email?: string | EmailAddresses
	phone?: string
}
export namespace Customer {
	export function is(value: any | Customer): value is Customer {
		return (value.type == "organization" || value.type == "person" || value.type == undefined) &&
			(typeof(value.name) == "string" || Name.is(value.name) || value.name == undefined) &&
			(Address.is(value.address) || Addresses.is(value.address) || value.address == undefined) &&
			(typeof(value.email) == "string" || EmailAddresses.is(value.email) || value.name == undefined) &&
			Address.is(value.d) ||
			Address.is(value.visit)
	}
}