import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

//the <appConfirm> selector is used in the <form> tag in register.component.html
@Directive({
  selector: '[appConfirm]',
  providers: [{provide: NG_VALIDATORS, useExisting: ConfirmDirective, multi:true}]
})
export class ConfirmDirective implements Validator{

  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors {
    let error;

    //"control" refers to the form itself. 
    if(control.value.password != control.value.confirmPassword){
      /*We are calling our custom error "matchingError" as 
        that gives us more information as to what this error is about.*/
      error = {"matchingError": true}
    }

    return error;
  }


  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
