import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string,propName:string): any {
    const resultArray :any=[] 
     if (!value || filterString==="" || propName==="") {
      return value;
    }
    value.forEach((element:any )=> {
      if(element[propName].trim().toLowerCase().includes(filterString.toLocaleLowerCase())){
    
      resultArray.push(element);
      }
    });
  
    return resultArray
  }

}
