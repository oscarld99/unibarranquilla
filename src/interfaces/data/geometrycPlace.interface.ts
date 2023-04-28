/* eslint-disable prettier/prettier */
import { sheduleModule } from "./shedule.interface";
export interface IGeometricPlace {
    activeShedule?: sheduleModule;
    border?: boolean;
    classRoomState?: boolean;
    description?: string;
    door?: IDoor;
    elevation?: number;
    floor?: number;
    height: number;
    id: string;
    isClassRoom?: boolean;
    position: IPosition;
    tittle?: string;
    type: 'PLACE' | 'COMMON_AREA' | 'STAIRS' | 'GREEN_AREA' | 'WC';
    width: number;
}

export interface IPosition {
    x: number;
    y: number;
}

export interface IDoor {
    axis: string;
    x: number;
    y: number;
}