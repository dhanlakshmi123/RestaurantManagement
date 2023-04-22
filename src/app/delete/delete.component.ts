import { Component } from '@angular/core';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(private s1:RestoService, private r1:Router) { }

  ngOnInit() : void {
  }

  deletedata(deleteform:{value:any})
  {
    return this.s1.deleteservice(deleteform.value).subscribe();
  }

}
