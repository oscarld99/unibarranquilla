/* eslint-disable prettier/prettier */

export interface IMonitoring {
    id: number;
    module: string;
    monitor: string;
    day: string;
    startTime: string;
    endTime: string;
    sede: string;
}
export const activeMonitoring = [{
    id:21321321,
    module:'Programacion de computadores',
    monitor:'Pedro pablo',
    day:'Martes',
    startTime:'8:00 AM',
    endTime: '3:30 PM',
    sede:'SOLEDAD'
}, {
    id:66804,
    module:'Diseño de redes',
    monitor:'Lina Pedroza',
    day:'Jueves',
    startTime:'4:00 AM',
    endTime: '6:30 PM',
    sede:'Barranquilla'
}] 