import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayus'
})
export class MayusculasPipe implements PipeTransform{

    transform(valor: string, enMayusculas?: boolean): string {
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }

}