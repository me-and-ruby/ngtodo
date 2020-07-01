import { Component } from '@angular/core';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular todo App ';
  todo=[];
  item="";
  
   items=this.todo;
  // adding item to an empty array

  addItem($event){
    this.item = $event.target.value;
    this.todo.push(this.item);
    console.log(this.todo);
    // this.newArray=this.todo.push(this.item);
    console.log("the length of todo Items? :"+ this.todo.length);

    return this.todo;
  }

  // retrieve itemes from array by returning array
  allItems(){
    return this.todo;

  }

  removeTodo($event: any) {
    const name= $event.target.value;
    this.item=name;
    console.log("you have removed: "+this.item);
    
    

     
}

  // remove item from my do do list
  // removeItem(){
  //  const index=this.todo.indexOf(1)
  //  return this.todo.splice(index);
  // }
  
}
