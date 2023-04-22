import { Component } from '@angular/core';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  data:any;
  constructor(private s1:RestoService, private r1:Router) { }

  ngOnInit() : void{ 
    let response = this.s1.viewservice();
    response.subscribe((data1)=>this.data=data1);
  }
}
