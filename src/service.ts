import {Injectable} from '@angular/core'
import { Http } from '@angular/http'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'


@Injectable()
export class Service {

  constructor(private http: Http) {
    this.data = null;
  }

  url: string = "http://localhost:8080/api";

  data: any;

  config = {
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  }

  cadastrar(nome, email, senha){
    let user = {
      nome: nome,
      email: email,
      senha: senha
    };
    console.log(user)
    return this.http.post(`${this.url}/usuarios`, user)
  }

  signin(email, senha){
    let body = {
      email: email,
      senha: senha
    }
    return this.http.post(`${this.url}/usuarios/signin`, body)
      .map(res => res.json())
  }

  saveUser(user){ //guarda o Token e o ID dentro na memória do aplicativo (local storage)
    user = JSON.stringify(user)
    localStorage.setItem("user", user)
  }

  getUser(){ //retorna o que está na memória
    return JSON.parse(localStorage.getItem("user")); 
  }

  hasUser(){ //diz se tem usuário salvo ou não
    return !!localStorage.getItem("user")
  }

  clearToken(){//apaga = logout
    localStorage.clear()
  }

  enviarPost(post){//cadastra post
    return this.http.post(`${this.url}/posts`, post)
      .map(res => res.json())
  }

  editarPost(post){
    return this.http.put(`${this.url}/posts/${post._id}`, post)
      .map(res => res.json())
  }

  fetchPosts(){//pega todos os posts = home
    return this.http.get(`${this.url}/posts`)
      .map(res => res.json())
  }
}
