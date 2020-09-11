import { Component, OnInit } from '@angular/core';

// model
import { Alumno } from '../../../models/alumno';

// service
import { AlumnoService } from '../../../services/alumno.service';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {

  // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
  alumnoList: Alumno[];
  constructor(
    private alumnoService: AlumnoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.alumnoService.getAlumnos()
      .snapshotChanges().subscribe(item => {
        this.alumnoList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.alumnoList.push(x as Alumno);
        });
      });
  }

  /* 
   Recibe una varible de tipo 'Product' para invocar el servicio de firebase, para actualizarlo
   Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, product)'  
  */
 onEdit(alumno: Alumno) {
  this.alumnoService.selectedAlumno = Object.assign({}, alumno);
}

/* 
 Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteProduct' del servicio de firebase
 ademas muestra un 'warning' con toastr
*/
onDelete($key: string) {
  if (confirm('Are you sure you want to delete it?')) {
    this.alumnoService.deleteAlumno($key);
    this.toastr.warning('Deleted Successfully', 'Alumno Removed');
  }
}

}
