import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required  // preenchimento obrigatorio
    ]],
    assunto: ["", [      
      Validators.minLength(10),
      Validators.required  // preenchimento obrigatorio
    ]],
    telefone: ["", [      
      Validators.minLength(11),
      Validators.required  // preenchimento obrigatorio
    ]],
    email: ["", [      
      Validators.email,  // verifica se a forma do email é valida
      Validators.required  // preenchimento obrigatorio
    ]],
    mensagem: ["", [      
      Validators.minLength(20),
      Validators.required  // preenchimento obrigatorio
    ]]
  })
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    alert("A mensagem foi enviada com sucesso!");
    this.formContato.reset();
  }

}
