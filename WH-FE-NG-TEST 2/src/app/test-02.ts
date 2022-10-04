/**
 * Update the following components to meet the requirements : 
 * * Bind `field` of [textfield] component to its text input
 * * Pass value of `field` from [textfield] component to [title] property of component [ng-app]
 */
 import { Component, EventEmitter, NgModule, Output  } from '@angular/core';
 import { RouterModule } from "@angular/router";
 import { CommonModule } from '@angular/common';
 
 @Component({
     selector : 'textfield',
     template : '<input type="text" [value]="field" (input)="setInput($event.target.value)" />'
 })
 export class TextField {
     field = "";
     @Output() fieldEvent = new EventEmitter<string>();
 
     setInput(data) {
         this.field = data;
         this.fieldEvent.emit(this.field);
     }
 
     
 }
 
 @Component({
     selector : 'child-component',
     template : `<h2>Title:<h2><br/><textfield (fieldEvent)="sendValue($event)"></textfield>`
 })
 export class ChildComponent {
     @Output() fieldEventData = new EventEmitter<string>();
     sendValue(data) {
         this.fieldEventData.emit(data);
     }
 }
 
 
 @Component({
     selector : 'ng-app',
     template : `<div>
                     <child-component (fieldEventData)="title = $event"></child-component> <br/>
                     Title is {{title}}
                 </div>`
 })
 export class Test02Component {
 
     title:string = "";
 }
 
 @NgModule({
     imports : [
         CommonModule,
         RouterModule.forChild([
             {
                 path : "",
                 component : Test02Component
             }
         ])
     ],
     declarations : [Test02Component,ChildComponent,TextField]
 })
 export class Test02Module {};