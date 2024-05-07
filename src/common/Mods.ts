export type ModsType =
	| 'NONE'
	| 'TOWN_OF_US'
	| 'THE_OTHER_ROLES'
	| 'LAS_MONJAS'
	| 'REWORKED'
	| 'ALL_THE_ROLES'
	| 'STELLAR_ROLES'
	| 'OTHER';

export interface AmongusMod {
	id: ModsType;
	label: string;
	dllStartsWith?: string;
}

export const modList: AmongusMod[] = [
	// recieve this later from git?
	{
		id: 'NONE',
		label: 'None',
	},
	{
		id: 'TOWN_OF_US',
		label: 'Town of Us: Reactivated',
		dllStartsWith: 'TownOfUs',
	},
	{
		id: 'THE_OTHER_ROLES',
		label: 'The Other Roles',
		dllStartsWith: 'TheOtherRoles',
	},
	// {
	// 	id: 'TOWN_OF_HOSTS',
	// 	label: 'Town of Hosts',
	// 	dllStartsWith: 'TownOfHost',
	// },
	{
		id: 'LAS_MONJAS',
		label: 'Las Monjas',
		dllStartsWith: 'LasMonjas',
	},
	{
		id: 'REWORKED',
		label: 'Town of Us: Reworked',
		dllStartsWith: 'Reworked',
	},
	{
		id: 'ALL_THE_ROLES',
		label: 'All The Roles',
		dllStartsWith: 'AllTheRoles',
	},
	{
		id: 'STELLAR_ROLES',
		label: 'Stellar Roles',
		dllStartsWith: 'StellarRoles',
	},
	{
		id: 'OTHER',
		label: 'Other',
	}
];
