import { Component, OnInit } from '@angular/core';
import { ScanService } from 'src/app/services/scan/scan.service';
import { Sello } from '../../interfaces/Sello.interface';
import { element } from 'protractor';

@Component({
  selector: 'app-nfccontainer',
  templateUrl: './nfccontainer.page.html',
  styleUrls: ['./nfccontainer.page.scss'],
})
export class NfccontainerPage implements OnInit {

  //Variable Sello, de tipo Sello(interfaz)
  sellos: any[] = []; 
  //Variable Colores, sirve para definir cuales seran los colores a utilizar por cada sello
  colores: any[] = [];

  //Almacena el contido de la data
  result;

  //Nos sirve para almacenar lo que retorna la constante element(el cual recorre el arreglo de result)
  resultado;

  //Inicializamos las variables que retorna el servicio, las cuales utilizaremos para "pintar el front"
  patente;
  gerencia;
  empresa;
  tag;
  fecha_lectura;

  //Prueba cambiar etiqueta de sellos
  color_fondo = '#dc1919';
  
  //Integracion consumo api
  constructor( private scanService: ScanService) { }

  ngOnInit() {

    //Retornar data desde el servicio
    this.scanService.getSellos().subscribe(data => {
      
      //En la variable result, almacenamos la data retornada por el servicio
      this.result = data

      //Recorremos el contenido de la variable result, quien ya almacenó información de la data
      for (const key in this.result) {
        
        //Dentro de la variable element almacenamos el contenido de la llave (key) para capturar los datos de cada valor del arreglo
        const element = this.result[key];

        // console.log(element.contractowner);
        
        //Almacenamos el contenido del recorrido hecho por la constante element, y guardamos el arreglo de sellos en el arreglo de sellos definido anteriormente
        this.sellos = element.sellos;
        //Vemos la respuesta de la variable element
        console.log(element)

        //Dentro de la variable resultado almacenamos lo que quedo fuera del arreglo de sellos
        this.resultado = element;

        //Instanciamos y utilizamos las variables definidas anteriormente para almacenar lo que retorna el recorrido de element
        this.patente = element.patente
        this.gerencia = element.gerencia
        this.empresa = element.empresa
        this.tag = element.tag
        this.fecha_lectura = element.fecha_lectura
        }

        //Realizamos otro ciclo, para recorrer el contenido del arreglo de colores dentro de sellos
        // for (const key in this.sellos) {

        //   //Almacenamos la data retornada en sellos
        //   const element = this.sellos[key];

        //   //Validamos a que color corresponde cada sello
        //   if(element.color_sello === 'Naranja'){
        //     this.sellos[key].color_sello = 'N'

        //   }else if(element.color_sello === 'Rojo'){
        //     this.sellos[key].color_sello = 'R'

        //   }else if(element.color_sello === 'Azul'){
        //     this.sellos[key].color_sello = 'A'
        //   }else {
        //     element.color_sello === 'Amarillo'
        //     this.sellos[key].color_sello  = 'Y'
        //   }
       
        //   }
        
  
    })
    
  }
  
   getSelloLetter(color_sello){

    const color_vista = color_sello.split('')[0]

    return color_vista;

  }
  

}
