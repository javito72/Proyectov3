import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
   nombreP: string = '';
   descripcionP: string = '';
   
  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreate(): void{
    const proy = new Proyecto(this.nombreP, this.descripcionP);
    this.sProyecto.save(proy).subscribe(data=>{alert("Proyecto añadido");
    this.router.navigate(['']);
  }, err =>{
    alert("Falló");
    this.router.navigate(['']);
  }
  )
  }
}
