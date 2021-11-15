import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';


export interface Producto{
  identificador : number,
  nombre : string,
  precio : number
};


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  LLAVE_PRODUCTOS = "lista_productos"


  constructor( private storage: Storage) { }

  ngOnInit() {
  }

  producto = new FormGroup({
    identificador : new FormControl(),
    nombre : new FormControl(),
    precio : new FormControl()
  });

  add(){
    let p: Producto;
    p = {
      identificador: this.producto.controls.identificador.value,
      nombre : this.producto.controls.nombre.value,
      precio : this.producto.controls.precio.value
    };
    this.agregarProducto(p);

  }

  agregarProducto(producto: Producto){
    this.storage.create();
    this.storage.get(this.LLAVE_PRODUCTOS).then((productos: Producto[])=>{
      //debemos validar primero el producto a agregar no exista en la lista del storage
      if(!productos){
        this.storage.set(this.LLAVE_PRODUCTOS,[producto]);
        alert("PRODUCTO AGREGADO!")
      }else{
        
        let existe : boolean = false;
        for(let p of productos){
          if(producto.identificador == p.identificador){
            existe = true;
            break
          }
        }
        
        if(existe){
          alert("EL PRODUCTO YA EXISTE"); 
        }else{
          productos.push(producto);
          this.storage.set(this.LLAVE_PRODUCTOS,productos);
          alert("PRODUCTO AGREGADO!")
        }
      }
    });
  }
}