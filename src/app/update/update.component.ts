import { Component } from '@angular/core';
import { RestoService } from '../resto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private s1: RestoService, private r1:Router) { }

  ngOnInit() {
  }

  updatedata(updateform:{value:any})
  {
    return this.s1.updateservice(updateform.value).subscribe();
  }
}
