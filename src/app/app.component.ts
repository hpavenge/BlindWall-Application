import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Walls application';
  // title = 'app';
  // data: any = {};
  // murals: Array<Wall[]>;
  // constructor(private muralService: MuralService){
  //
  // }
  //
  // ngOnInit(){
  //   this.muralService.getMurals().subscribe(data => {
  //     this.data = data;
  //     this.murals = data;
  //     console.log(this.data);
  //   })
  // }

  // private apiUrl = 'https://api.blindwalls.gallery/apiv2/murals';
  // data: any = {};
  //
  // constructor(private http: Http){
  //   console.log('Hello');
  //   this.getContacts();
  //   this.getData();
  // }
  //
  // getData(){
  //   return this.http.get(this.apiUrl).map((res: Response) => res.json())
  // }
  //
  // getContacts(){
  //   this.getData().subscribe(data => {
  //     console.log(data);
  //     this.data = data;
  //   })
  // }

}
