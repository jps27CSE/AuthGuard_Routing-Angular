import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inchToCm',
  standalone: true,
})
export class InchToCmPipe implements PipeTransform {
  transform(value: number): number {
    return value * 2.54;
  }
}
