/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
 import { Component, NgModule  } from '@angular/core';
 import { RouterModule } from "@angular/router";
 import { CommonModule } from '@angular/common';
 
 @Component({
     selector : 'ng-app',
     template : `<form (submit)="submit($event)">
                     <h2>Login</h2>
                     <br/>
                     <input type="email" value="" name="email" (input)="email = $event.target.value" />
                     <br />
                     <small>{{emailValidationText}}</small>
                     <br/>
                     <input type="password" value="" name="password" (input)="password = $event.target.value" />
                     <br/>
                     <small>{{passwordValidationText}}</small>
                     <br />
                     <button type="submit">Submit</button>
                     <br/><br/>
                     <div *ngIf="logged_in">Logged In!</div>
                 </form>`
 })
 export class Test03Component {
 
     email:string = "";
     password:string = "";
     emailValidationText:string = "";
     passwordValidationText:string = "";
 
     
 
     logged_in = false;
 
     submit(e) {
         // console.log(this.email, this.password);
 
         if (this.validateEmail() && this.validatePassword()) {
             console.log(true);
             this.logged_in = true;
         } else {
             console.log(false)
         }
 
         e.preventDefault();
     }
 
     validateEmail() {
         let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
         if(validRegex.test(this.email)) {
          return true;
         }
         this.emailValidationText = "Email is not valid";
         return false;
     }
 
     validatePassword() {
       let validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 
       if(validRegex.test(this.password)) {
         return true;
       }
       this.passwordValidationText = "Password is not valid";
       return false;
     }
 
 }
 
 @NgModule({
     imports : [
         CommonModule,
         RouterModule.forChild([
             {
                 path : "",
                 component : Test03Component
             }
         ])
     ],
     declarations : [Test03Component]
 })
 export class Test03Module {};