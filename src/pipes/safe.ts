import { Injectable, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/*
  SafeResourceUrl
*/
@Pipe({
  name: 'safe'
})
@Injectable()
export class Safe {
  /*
    Takes a value and makes it lowercase.
   */
   constructor(protected _sanitizer: DomSanitizer){

   }

  public transform(value: string, type: string) {
    switch(type){
      case 'resourceUrl':
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/'+value);

      case 'fbUrl':
        return this._sanitizer.bypassSecurityTrustResourceUrl('https://facebook.com/Narodnjak.si/posts/'+value);
      default:
        throw new Error('unable to bypass security for invalid type: $(type)');
    }
  }
}