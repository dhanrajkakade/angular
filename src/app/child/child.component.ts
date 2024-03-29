import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input("childdata")
public message:string="";

@Output()
public childEvent=new EventEmitter();

sendData(){
  this.childEvent.emit("Hey parent!!")
}

}
