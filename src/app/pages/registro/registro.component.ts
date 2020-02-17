// Nombre archivo: registro.component.ts
// Proposito: Configuracion del modulo registrar usuario

// Autor: Stephen
// Fecha: 18/01/2020
// Hora: 11:56 pm
// Ultima modificación: 

import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  frmCrearCuenta: FormGroup;
  usuario: UsuarioModel;

  

  constructor()
  {
    this.frmCrearCuenta = new FormGroup
    ({
      email: new FormControl(''),
      nombre: new FormControl(''),
      contrasena: new FormControl('')
    });
  }

  ngOnInit() 
  { 
    this.usuario = new UsuarioModel();
    this.usuario.correo = 'algo';
    this.usuario.nombre = '';
    this.usuario.contrasena = '';

    // enlaza del objetoJS con formulario FormGroup ( miPrimerGrupoFormulario )
    this.frmCrearCuenta.setValue( this.usuario );
  }

  guardarDatos()
  {
    console.log("guardarDatosFormulario vinculado exitosamente");
    console.log();
  }// end guardarDatosFormulario


}
