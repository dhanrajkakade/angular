import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public isAvailable:boolean=false;

  public color:string = "Violet";

  public students:Array<string> = ["Divyesh","Nilesh","Aniket"];

}
