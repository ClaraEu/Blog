import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form: FormGroup

  constructor(private postService: PostService) {
    this.form = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    let newPost = new Post(this.form.value.titulo, this.form.value.texto, this.form.value.autor, this.form.value.imagen, this.form.value.fecha, this.form.value.categoria)
    this.postService.agregarPost(newPost)
  }

}
