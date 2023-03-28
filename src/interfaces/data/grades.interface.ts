export interface IGrade {
    module: string;
    courts: ICourt[];
}

export interface ICourt {
    courtNumber: number;
    grade: number;
}