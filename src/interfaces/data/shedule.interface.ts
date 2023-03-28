/* eslint-disable prettier/prettier */
export interface sheduleDay {
    day: string;
    modules: sheduleModule[];
}

export interface sheduleModule {
    moduleName: string;
    startTime: string;
    endTime: string;
    teacher: string;
    salon: string;
    sede: string;
    id: string;
}
