import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth, private http: HttpClient, private tokenService: TokenService) { }

  createUser(email: string, password: string){
    return this.afa.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.afa.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.afa.auth.signOut();
  }

  hasUser(){
    return this.afa.authState;
  }

  loginRest(email, password){
    return this.http.post('http://platzi-store.herokuapp.com/auth', {
      email, password
    }).pipe(
      tap((data: any) => this.tokenService.saveToken(data.token))
    );
  }
}
