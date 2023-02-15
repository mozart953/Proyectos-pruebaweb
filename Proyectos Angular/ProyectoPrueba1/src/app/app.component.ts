import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VentanaUnoComponent } from './Componentes/modales/ventana-uno/ventana-uno.component';
import { VentanaComponent } from './Componentes/ventana/ventana.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, public modalService: NgbModal ){}
  title = 'ProyectoPrueba1';
  closeResult = '';
  
  pulsar(){
    this.router.navigate(['vistas']);
  }
  pulsar2(){

    this.router.navigate(['vista1'])
  }

 /*  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  } */

  open() {
    const modalRef = this.modalService.open(VentanaUnoComponent);
    modalRef.componentInstance.name = 'World';
  }
}
