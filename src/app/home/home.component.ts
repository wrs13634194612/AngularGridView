import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {NgForOf, NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCard, MatCardHeader, MatCardContent, MatCard, MatCardTitle, MatCardContent, MatDivider, MatCardActions, MatButton, MatTooltip, NgForOf, MatCardImage, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  todos: Todo[] = [];
  dialogData: Todo = {task: '', description: '', icon: ''};
  courses:number[]=[1,2,3,4,5,6,7,8,9,10,11,12]


  prodotus :Todo[]=[]

  ngOnInit(): void {
    this.prodotus[0] = {task: '101', description: '火箭少女',icon: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'};
    this.prodotus[1] = {task: '102', description: '黄金木乃伊',icon: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'};
    this.prodotus[2] = {task: '103', description: '螳螂',icon: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'};
    this.prodotus[3] = {task: '104', description: '雪山精英',icon: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'};
    this.prodotus[4] = {task: '105', description: '特战先锋',icon: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg'};


    console.log(this.prodotus)
    console.log(this.courses)
    console.log(this.todos)
    console.log(this.dialogData)
  }

  goToRole(name:string){
    console.log(name)
  }
}


interface Todo {
  icon:string;
  task: string;
  description: string;
}

