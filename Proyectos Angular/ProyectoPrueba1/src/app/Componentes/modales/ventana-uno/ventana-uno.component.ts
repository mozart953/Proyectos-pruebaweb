import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ventana-uno',
  templateUrl: './ventana-uno.component.html',
  styleUrls: ['./ventana-uno.component.css']
})
export class VentanaUnoComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }



}
