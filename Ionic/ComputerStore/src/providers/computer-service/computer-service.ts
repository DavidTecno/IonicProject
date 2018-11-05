import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the LaptopService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LaptopService {

  //public int i;

  public API = 'http://localhost:8080';

  getOneLaptop(i: number): Observable<any> {
    console.log("llega el: " + i);
    return this.http.get(this.API + '/laptop/' + i);
  }

  addLaptop(Object: Observable<any>){
    return this.http.post(this.API + '/laptop', Object);
  }

  removeLaptop(i: number){
    return this.http.delete(this.API + '/laptop/' + i);
  }

  updateLaptop(i: number, Object: Observable<any>){
    return this.http.put(this.API + '/laptop/' + i, Object);
  }
  constructor(public http: HttpClient) {
    console.log('Hello LaptopService Provider');
  }

}

@Injectable()
export class DesktopService {

  //public int i;

  public API = 'http://localhost:8080';

  getOneDesktop(i: number): Observable<any> {
    console.log("llega el: " + i);
    return this.http.get(this.API + '/desktop/' + i);
  }

  addDesktop(Object: Observable<any>){
    return this.http.post(this.API + '/desktop', Object);
  }

  removeDesktop(i: number){
    return this.http.delete(this.API + '/desktop/' + i);
  }

  updateDesktop(i: number, Object: Observable<any>){
    return this.http.put(this.API + '/desktop/' + i, Object);
  }

  constructor(public http: HttpClient) {
    console.log('Hello DesktopService Provider');
  }

}
