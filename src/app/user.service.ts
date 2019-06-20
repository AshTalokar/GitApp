import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  private client_id = "494b2e72fbfd9b2ad74f";
  private client_secret = "093af89b08fceb0911f1c6eea777edd8c785426d";
  public baseUrl: string = "https://api.github.com/search/users?q=";
  public reposUrl: string = "https : //api.github.com/users/{ username }/repos";
  constructor(private http: HttpClient) {}

  getUser(user): Observable<any> {
    return this.http.get<any>(this.baseUrl + user).pipe();
  }

  getRepos(userId): Observable<any> {
    return this.http
      .get<any>("https://api.github.com/user/" + userId + "/repos")
      .pipe();
  }
}
