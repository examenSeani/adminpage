import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if( arg == '' ) return value;
    const resultadoAlumn = [];
    for( const al of value){
        if(al.Nombre_Alumno.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          console.log('si')
          resultadoAlumn.push(al);
        };
    };
    for( const al of value){
      if(al.carrera.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('si')
        resultadoAlumn.push(al);
      };
    };
    return resultadoAlumn;
  }

}
