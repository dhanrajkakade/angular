import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  public name:string ="Divyesh";
  public student = {
    name:"Divyesh",
    surname:"Pithadiya"
  }

  public date:Date = new Date();

}
