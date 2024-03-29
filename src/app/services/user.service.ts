import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({ email, password, name }: any) {
    
    return createUserWithEmailAndPassword(this.auth, email, password );
    
  }
}
