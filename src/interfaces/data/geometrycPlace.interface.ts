/* eslint-disable prettier/prettier */
export interface IGeometricPlace {
    border?: boolean;
    description?: string;
    elevation?: number;
    floor?: number;
    height: number;
    id: string;
    position: IPosition;
    tittle?: string;
    type: 'PLACE' | 'COMMON_AREA' | 'STAIRS' | 'GREEN_AREA' | 'WC';
    width: number;
}

export interface IPosition {
    x: number;
    y: number;
}