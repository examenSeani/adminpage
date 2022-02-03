export interface Pregunta{
    id_pregunta : string;
    preguntatxt : string;
    preguntaurl : string;
    respuesta1 :  string;
    respuesta2 :  string;
    respuesta3 : string;
    respuesta4 : string;
    correcta?: string;
    CorrectasExam?:[];
}