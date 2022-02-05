import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})


export class UserComponent implements OnInit{


    username : String ;
    constructor(){
        this.username =  localStorage.getItem("username");
    }
    ngOnInit(){
    }
}
