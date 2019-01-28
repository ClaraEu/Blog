import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[]

  constructor() { 
    this.arrPosts = [
      new Post('Primer Post', 'Lorem fistrum llevame al sircoo a gramenawer está la cosa muy malar te voy a borrar el cerito mamaar la caidita. No puedor la caidita por la gloria de mi madre hasta luego Lucas a gramenawer a gramenawer apetecan amatomaa no puedor pecador. Al ataquerl a gramenawer quietooor la caidita. Está la cosa muy malar ese pedazo de va usté muy cargadoo de la pradera a gramenawer fistro ahorarr. Pecador fistro diodeno torpedo pecador a gramenawer ese pedazo de llevame al sircoo. Fistro hasta luego Lucas sexuarl caballo blanco caballo negroorl de la pradera qué dise usteer.', 'Mario Girón', 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/11/11/15103897704487.jpg', '07-11-2018', 'comedia')
    ]
  }

  getAllPosts(): Promise<Post[]>{
    let prom = new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts)
    })
    return prom
  }

  getPostsFilteredByCategoria(cat) {
    if (cat === 'all') {
      return this.arrPosts
    } else {
      return this.arrPosts.filter((item) => {
        return item.categoria === cat
      })
    }
  }

  agregarPost(post: Post) {
    this.arrPosts.push(post)
  }

}
