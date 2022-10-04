/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { CommonModule } from '@angular/common';
import { Component, Input,NgModule, OnInit  } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <div *ngIf="loan_amount == 0 || !loan_amount; else validAmount">
                        <b>Monthly Payment:</b> N/A <br/>
                        <b>Late Payment Fee : N/A </b> <br/>
                    </div>
                    <ng-template #validAmount>
                        <b>Monthly Payment:</b> {{monthly_payment | currency }} <br/>
                        <b>Late Payment Fee : {{late_payment | currency }}</b> <br/>
                    </ng-template>

                </div>`
})
export class Test01Component implements OnInit {

    loan_amount:number = 1000;
    monthly_payment:number;
    late_payment:number;
    ngOnInit()
    {
        this.calculateRepayment(this.loan_amount)
    }

    calculateRepayment(data:number)
    {
        this.monthly_payment = (data/100)*2
        this.late_payment = (this.monthly_payment/100)*2
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}