import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  data = { user: '', pass: '' };

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
  }
  //funcion para iniciar sesion
  login() {
    console.log('data', this.data);

    this.auth.login(this.data).subscribe(
      (res) => {
        localStorage.setItem('token', res.accessToken);
        console.log('respuesta: ', localStorage.getItem('token'));
        this.router.navigate(['/compras']);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
