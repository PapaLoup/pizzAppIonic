import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FirstLetterUpPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'firstLetterUp',
})
export class FirstLetterUpPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.replace(/\b\w/g, l => l.toUpperCase())
  }
}
