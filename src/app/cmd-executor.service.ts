import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CmdExecutorService {

  apiURL: string = 'http://127.0.0.1:3000/api/employee';

  constructor(private httpClient: HttpClient) {}

  public appendCmd(cmd: JSON){
	  console.log(cmd);
    return this.httpClient.post(`${this.apiURL}`, cmd);
}
}


