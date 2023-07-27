import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SignupResponseData {
  message: string;
  status: number;
  code: number;
}

interface loginResponseData {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string;
  result: Object;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://localhost:3035/user';
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  signup(
    username: string,
    email: string,
    password: string
  ): Observable<SignupResponseData> {
    return this.http.post<SignupResponseData>(this.apiUrl, {
      username,
      email,
      password,
    });
  }

  login(email: string, password: string): Observable<loginResponseData> {
    const loginUrl = `${this.apiUrl}?username=${email}&password=${password}`;
    return this.http.get<loginResponseData>(loginUrl);
  }
}
