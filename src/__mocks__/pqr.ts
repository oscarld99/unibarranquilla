/* eslint-disable prettier/prettier */

export interface IPQR {
    id: number;
    number: string;
    type: string;
    date: string;
    status: string;
    text: string;
}
export const pqrs: IPQR[] = [{
    id: 65,
    number: '00123003101',
    type: 'Peticion',
    date: '10/09/2022',
    status: 'En trámite',
    text: 'Exigo mas puestos dentro las aulas'
}, {
    id: 75,
    number: '00123003102',
    type: 'Queja',
    date: '12/08/2022',
    status: 'En trámite',
    text: 'Mucho tiempo de espera...'
}]