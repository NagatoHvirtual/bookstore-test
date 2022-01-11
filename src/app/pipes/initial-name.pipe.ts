import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'initialName'
})
export class InitialNamePipe implements PipeTransform{
  transform(value: any) {
      return value.split(' ').map((n: any[])=> n[0]).join('')
  }
}
