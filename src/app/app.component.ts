import { Component } from '@angular/core';
import { ListService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent{
  public title = 'Proyecto-Angular4';
  public producto_list = [];
  
  constructor(servicio:ListService){
    servicio.load()
    .subscribe(repositorios => {
      console.log(repositorios);
      repositorios.forEach((objeto)=>{
        console.log(objeto.name);
        this.producto_list.unshift(objeto)
        
      })
  });
  }
}
