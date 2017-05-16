import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class ListService {
  constructor(private http: Http) {}

  load() {
    let headers = new Headers();
      return this.http.get("https://api.github.com/users/Jessicavram/repos", {
      headers: headers
    })
    .map(res => res.json());
    }
  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}