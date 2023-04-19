/* eslint-disable prettier/prettier */
import { IGeometricPlace } from "@interfaces/data/geometrycPlace.interface";

export const geometricPlaces: IGeometricPlace[] = [{
    border: true,
    elevation: 2,
    description: 'Entrada de estudiantes y profesores',
    floor: 1,
    height: 40,
    id: 'entrada',
    position: {
        x: 75,
        y: 0
    },
    tittle: 'Entrada',
    type: 'PLACE',
    width: 60
}, {
    border: true,
    elevation: 2,
    description: 'Entrada vehicular',
    floor: 1,
    height: 40,
    id: 'entradaVehiculos',
    position: {
        x: 200,
        y: 0
    },
    tittle: 'Entrada Vehiculos',
    type: 'PLACE',
    width: 140
}, {
    border: false,
    description: '',
    floor: 1,
    height: 500,
    id: 'areaComunEntrada',
    position: {
        x: 60,
        y: 0
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 90
}, {
    border: false,
    description: '',
    floor: 1,
    height: 500,
    id: 'areaComun2',
    position: {
        x: 100,
        y: 380
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 50
}, {
    border: false,
    description: '',
    floor: 1,
    height: 50,
    id: 'areaComun3',
    position: {
        x: 0,
        y: 410
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 150
}, {
    border: false,
    description: '',
    floor: 1,
    height: 50,
    id: 'areaComun4',
    position: {
        x: 150,
        y: 420
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 210
}, {
    border: true,
    description: '',
    floor: 1,
    height: 120,
    id: 'escaleras1',
    position: {
        x: 150,
        y: 470
    },
    tittle: '',
    type: 'STAIRS',
    width: 50
}, {
    border: true,
    description: '',
    floor: 1,
    height: 120,
    id: 'bañoHombres',
    position: {
        x: 200,
        y: 470
    },
    tittle: 'Baño hombres',
    type: 'WC',
    width: 80
}, {
    border: true,
    description: '',
    floor: 1,
    height: 120,
    id: 'bañoMujeres',
    position: {
        x: 280,
        y: 470
    },
    tittle: 'Baño Mujeres',
    type: 'WC',
    width: 80
}, {
    border: false,
    description: '',
    floor: 1,
    height: 290,
    id: 'areaComun10',
    position: {
        x: 360,
        y: 300
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 40
}, {
    border: false,
    description: '',
    floor: 1,
    height: 30,
    id: 'areaComun15',
    position: {
        x: 470,
        y: 50
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 530
}, {
    border: false,
    elevation: 2,
    description: '',
    floor: 1,
    height: 30,
    id: 'areaComun16',
    position: {
        x: 610,
        y: 20
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 50
}, {
    border: false,
    description: '',
    floor: 1,
    height: 250,
    id: 'areaComun14',
    position: {
        x: 430,
        y: 50
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 40
}, {
    border: true,
    description: '',
    floor: 1,
    height: 80,
    id: 'administrativo',
    position: {
        x: 470,
        y: 80
    },
    tittle: 'ADMINISTRATIVO',
    type: 'PLACE',
    width: 140
}, {
    border: true,
    description: '',
    floor: 1,
    height: 80,
    id: 'admisiones',
    position: {
        x: 610,
        y: 80
    },
    tittle: 'ADMISIONES',
    type: 'PLACE',
    width: 140
}, {
    border: false,
    description: '',
    floor: 1,
    height: 320,
    id: 'areaComun17',
    position: {
        x: 750,
        y: 80
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 30
}, {
    border: true,
    description: '',
    floor: 1,
    height: 80,
    id: 'articulacion',
    position: {
        x: 780,
        y: 80
    },
    tittle: 'ARTICULACION',
    type: 'PLACE',
    width: 50
}, {
    border: false,
    description: '',
    floor: 1,
    height: 20,
    id: 'areaComun18',
    position: {
        x: 780,
        y: 160
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 120
}, {
    border: false,
    description: '',
    floor: 1,
    height: 460,
    id: 'areaComun19',
    position: {
        x: 870,
        y: 180
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 30
}, {
    border: true,
    description: 'Aula de clases N°1',
    floor: 1,
    height: 80,
    id: 'salon1',
    position: {
        x: 830,
        y: 80
    },
    tittle: 'SALON 1',
    type: 'PLACE',
    width: 70
}, {
    border: true,
    description: 'Aula de clases N°2',
    floor: 1,
    height: 100,
    id: 'salon2',
    position: {
        x: 900,
        y: 80
    },
    tittle: 'SALON 2',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: 'Aula de clases N°3',
    floor: 1,
    height: 120,
    id: 'salon3',
    position: {
        x: 900,
        y: 180
    },
    tittle: 'SALON 3',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: 'Aula de clases N°4',
    floor: 1,
    height: 100,
    id: 'salon4',
    position: {
        x: 900,
        y: 300
    },
    tittle: 'SALON 4',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: '',
    floor: 1,
    height: 60,
    id: 'cuartoElectricidad',
    position: {
        x: 900,
        y: 400
    },
    tittle: 'Electricidad',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: '',
    floor: 1,
    height: 60,
    id: 'cuartox',
    position: {
        x: 900,
        y: 460
    },
    tittle: 'CUARTO x',
    type: 'PLACE',
    width: 100
}, {
    border: false,
    description: '',
    floor: 1,
    height: 120,
    id: 'areaComun20',
    position: {
        x: 900,
        y: 520
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 20
}, {
    border: true,
    description: 'Aula de clases N°5',
    floor: 1,
    height: 120,
    id: 'salon5',
    position: {
        x: 920,
        y: 520
    },
    tittle: 'SALON 5',
    type: 'PLACE',
    width: 80
}, {
    border: true,
    description: '',
    floor: 1,
    height: 140,
    id: 'salonxx',
    position: {
        x: 470,
        y: 160
    },
    tittle: 'Salon XX',
    type: 'PLACE',
    width: 60
}, {
    border: true,
    description: '',
    floor: 1,
    height: 160,
    id: 'biblioteca',
    position: {
        x: 530,
        y: 160
    },
    tittle: 'Biblioteca',
    type: 'PLACE',
    width: 160
}, {
    border: true,
    description: '',
    floor: 1,
    height: 60,
    id: 'sistemas',
    position: {
        x: 600,
        y: 260
    },
    tittle: 'SISTEMAS',
    type: 'PLACE',
    width: 40
}, {
    border: true,
    description: '',
    floor: 1,
    height: 60,
    id: 'bañoProfesores1',
    position: {
        x: 640,
        y: 260
    },
    tittle: 'BAÑO PROFESORES 1',
    type: 'WC',
    width: 30
}, {
    border: true,
    description: '',
    floor: 1,
    height: 60,
    id: 'bañoProfesores2',
    position: {
        x: 670,
        y: 260
    },
    tittle: 'BAÑO PROFESORES 2',
    type: 'WC',
    width: 30
}, {
    border: true,
    description: 'Aula de clases N°27',
    floor: 1,
    height: 100,
    id: 'salon27',
    position: {
        x: 690,
        y: 160
    },
    tittle: 'Salon 27',
    type: 'PLACE',
    width: 60
}, {
    border: true,
    description: '',
    floor: 1,
    height: 60,
    id: 'cocina',
    position: {
        x: 700,
        y: 260
    },
    tittle: 'COCINA',
    type: 'PLACE',
    width: 50
}, {
    border: false,
    description: '',
    floor: 1,
    height: 30,
    id: 'areaComun11',
    position: {
        x: 400,
        y: 300
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 130
}, {
    border: false,
    description: '',
    floor: 1,
    height: 30,
    id: 'areaComun21',
    position: {
        x: 480,
        y: 320
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 80
}, {
    border: true,
    description: '',
    floor: 1,
    height: 120,
    id: 'salaX',
    position: {
        x: 400,
        y: 330
    },
    tittle: 'Sala x',
    type: 'PLACE',
    width: 80
}, {
    border: true,
    description: '',
    floor: 1,
    height: 120,
    id: 'Laboratorio',
    position: {
        x: 400,
        y: 450
    },
    tittle: 'Laboratorio',
    type: 'PLACE',
    width: 80
}, {
    border: true,
    elevation: 2,
    description: '',
    floor: 1,
    height: 60,
    id: 'salaPearson',
    position: {
        x: 480,
        y: 350
    },
    tittle: 'Sala Pearson',
    type: 'PLACE',
    width: 80
}, {
    border: true,
    elevation: 2,
    description: '',
    floor: 1,
    height: 80,
    id: 'salaDiseño',
    position: {
        x: 480,
        y: 410
    },
    tittle: 'Sala Diseño',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: '',
    floor: 1,
    height: 80,
    id: 'Bienestar',
    position: {
        x: 480,
        y: 490
    },
    tittle: 'Bienestar',
    type: 'PLACE',
    width: 60
}, {
    border: true,
    elevation: 2,
    description: '',
    floor: 1,
    height: 100,
    id: 'Enfermeria',
    position: {
        x: 530,
        y: 490
    },
    tittle: 'Enfermeria',
    type: 'PLACE',
    width: 60
}, {
    border: false,
    description: '',
    floor: 1,
    height: 270,
    id: 'areaComun5',
    position: {
        x: 560,
        y: 320
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 80
}, {
    border: false,
    description: '',
    floor: 1,
    height: 80,
    id: 'areaComun22',
    position: {
        x: 640,
        y: 320
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 110
}, {
    border: false,
    description: '',
    floor: 1,
    height: 20,
    id: 'areaComun9',
    position: {
        x: 400,
        y: 570
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 130
}, {
    border: true,
    description: 'Aula de clases N°15',
    floor: 1,
    height: 140,
    id: 'salon15',
    position: {
        x: 0,
        y: 460
    },
    tittle: 'SALON 15',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: 'Aula de clases N°14',
    floor: 1,
    height: 120,
    id: 'salon14',
    position: {
        x: 0,
        y: 600
    },
    tittle: 'SALON 14',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: 'Aula de clases N°13',
    floor: 1,
    height: 140,
    id: 'salon13',
    position: {
        x: 0,
        y: 700
    },
    tittle: 'SALON 13',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: 'Aula de clases N°12',
    floor: 1,
    height: 160,
    id: 'salon12',
    position: {
        x: 0,
        y: 840
    },
    tittle: 'SALON 12',
    type: 'PLACE',
    width: 100
}, {
    border: true,
    description: '',
    floor: 1,
    height: 210,
    id: 'cafeteria',
    position: {
        x: 760,
        y: 640
    },
    tittle: 'CAFETERIA',
    type: 'PLACE',
    width: 240
}, {
    border: false,
    description: '',
    floor: 1,
    height: 50,
    id: 'areaComun6',
    position: {
        x: 150,
        y: 590
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 720
}, {
    border: false,
    description: '',
    floor: 1,
    height: 50,
    id: 'areaComun7',
    position: {
        x: 150,
        y: 830
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 520
}, {
    border: false,
    description: '',
    floor: 1,
    height: 50,
    id: 'areaComun8',
    position: {
        x: 640,
        y: 850
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 360
}, {
    border: true,
    elevation: 2,
    description: '',
    floor: 1,
    height: 80,
    id: 'cuartoAseo',
    position: {
        x: 100,
        y: 880
    },
    tittle: 'ASEO',
    type: 'PLACE',
    width: 80
}, {
    border: false,
    description: '',
    floor: 1,
    height: 120,
    id: 'areaComun13',
    position: {
        x: 100,
        y: 880
    },
    tittle: '',
    type: 'COMMON_AREA',
    width: 140
}, {
    border: true,
    description: '',
    floor: 1,
    height: 120,
    id: 'escaleras2',
    position: {
        x: 220,
        y: 880
    },
    tittle: '',
    type: 'STAIRS',
    width: 60
}, {
    border: true,
    description: 'Aula de clases N°11',
    floor: 1,
    height: 120,
    id: 'salon11',
    position: {
        x: 280,
        y: 880
    },
    tittle: 'SALON 11',
    type: 'PLACE',
    width: 120
}, {
    border: true,
    description: 'Aula de clases N°10',
    floor: 1,
    height: 120,
    id: 'salon10',
    position: {
        x: 400,
        y: 880
    },
    tittle: 'SALON 10',
    type: 'PLACE',
    width: 120
}, {
    border: true,
    description: 'Aula de clases N°9',
    floor: 1,
    height: 120,
    id: 'salon9',
    position: {
        x: 520,
        y: 880
    },
    tittle: 'SALON 9',
    type: 'PLACE',
    width: 120
}, {
    border: true,
    description: 'Aula de clases N°8',
    floor: 1,
    height: 100,
    id: 'salon8',
    position: {
        x: 640,
        y: 900
    },
    tittle: 'SALON 8',
    type: 'PLACE',
    width: 120
}, {
    border: true,
    description: 'Aula de clases N°7',
    floor: 1,
    height: 100,
    id: 'salon7',
    position: {
        x: 760,
        y: 900
    },
    tittle: 'SALON 7',
    type: 'PLACE',
    width: 120
}, {
    border: true,
    description: 'Aula de clases N°6',
    floor: 1,
    height: 100,
    id: 'salon6',
    position: {
        x: 880,
        y: 900
    },
    tittle: 'SALON 6',
    type: 'PLACE',
    width: 120
}]