import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styleUrls: ['./enviar.component.scss']
})
export class EnviarComponent implements OnInit {
  actual = 0;
  estado = 'finish';
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      cedula: [null, [Validators.minLength(4), Validators.maxLength(12), Validators.required]],
      archivo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  enviar(): void {

  }

}
