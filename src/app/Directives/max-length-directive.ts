import {Directive, HostListener, Input} from "@angular/core";
import {FormControlName} from "@angular/forms";

@Directive({
  selector: '[maxLength]'
})
export class MaxLengthDirective {
  @Input('maxLength') maxLength?: string;

  constructor(private readonly formControl: FormControlName) {}

  @HostListener('keyup', ['$event'])
  onKeyUp(event: any): void {
    const value = this.formControl.value;
    console.log(this.maxLength);
    console.log(value);
    console.log(!/[0-9]/.test(value))
    console.log(this.maxLength && value.length > this.maxLength);

    if (!/[0-9]/.test(value)) {
      event.preventDefault();
    }
  }

}
