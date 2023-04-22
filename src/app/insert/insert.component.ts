import { Component } from '@angular/core';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

  constructor(private s1:RestoService, private r1:Router) { }

  ngOnInit() : void {
  }

  insertdata(insertform:{value:any})
  {
    return this.s1.insertservice(insertform.value).subscribe();
  }
}
