  export  interface alumnData{
    id ?: string;
    user?:  string;
    username: string;
    time:  number;
    alumnData:{paterno:string,carrera: string, materno:string};
    alumnExam?: {test?:{pregunta?: string, respuesta?: string} };
    
}
