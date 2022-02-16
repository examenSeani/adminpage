  export  interface alumnData{
    id ?: string;
    user?:  string;
    username: string;
    time:  number;
    alumnData:{paterno:string,carrera: string, email:string};
    alumnExam?: {test?:{pregunta?: string, respuesta?: string} };
    
}
