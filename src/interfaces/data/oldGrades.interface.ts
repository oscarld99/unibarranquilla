/* eslint-disable prettier/prettier */
export type oldGrades = Programs[]

export interface Programs {
    id: number;
    program: string;
    periods: Periods[]
}

export interface Periods {
    id: number;
    year: number;
    period: number;
    modules: PeriodsModule[];
}

export interface PeriodsModule {
    module: string;
    grade: number;
}