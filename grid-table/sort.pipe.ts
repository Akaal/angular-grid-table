import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], field: string, direction: boolean): any[] {

    if (!items) return [];

    if (!field) return items;

    if (direction) {
      return items.sort((a, b) => {
        return a[field].localeCompare(b[field]);
      });
    }else{
      return items.sort((a, b) => {
        return b[field].localeCompare(a[field]);
      });
    }
  }
}
