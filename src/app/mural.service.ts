import { Injectable }    from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MuralService{
  constructor(private http: Http){
    console.log('Hello');
  }

  private apiUrl = 'https://api.blindwalls.gallery/apiv2/murals';

  getMurals(){
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }



  // getMurals(){
  //   this.getData().subscribe(data => {
  //         console.log(data);
  //     return data
  //   })
  // }
}
