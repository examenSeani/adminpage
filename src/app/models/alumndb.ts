export  interface segundoAlumno{
    id ?: string;
    user?:  string;
    username: string;
    time?:  number;
    alumnData:{paterno:string,carrera: string, materno:string};
    test?: {pregunta?: string, respuesta?: string};
    lengua?:{pregunta?: string, respuesta?: string};
    metematico?:{pregunta?: string, respuesta?: string};
    logico?: {pregunta?: string, respuesta?: string};
    timeLeng?:number;
    timeLogic?:number;
    timeMat?:number;
}