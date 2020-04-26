import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';




@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {

   // console.log('Servicio de infoPagina listo');

      this.cargarInfo();
      this.cargarEquipo();
  
   }

   private cargarInfo(){

          // Leer el archivo JSON
          this.http.get('assets/data/data-pagina.json')
          .subscribe( (resp: InfoPagina) => {


           // this.cargada = true;
            this.info = resp;
            //console.log(resp);
              // console.log(resp['email']);
          });

   }


   private cargarEquipo(){

     // Leer el archivo JSON
     this.http.get('https://angular-html-82e62.firebaseio.com/equipo.json')
     .subscribe( (resp: any[]) => {
     

      // this.cargada = true;
       this.equipo = resp;
       //console.log(resp);
         
     });

   

   }

}
