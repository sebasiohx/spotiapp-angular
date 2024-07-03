import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-paises',
  templateUrl: './api-paises.component.html'
})
export class ApiPaisesComponent {
  
  paises: any[] = [];

  constructor(
    private http: HttpClient
  ){
    console.log('constructor del home hecho');
    this.http.get('https://restcountries.com/v3.1/lang/spanish')
    .subscribe( (data:any) => {
      this.paises = data;
      console.log(data);      
    });
  }

}
