import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const date = new Date(value);
    const months = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'abril', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const days = [
      'Lunes', 'Martes', 'Miércoles', 'Viernes', 'Sábado', 'Domingo'];

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} de ${date.getFullYear()}`;
  }

}
