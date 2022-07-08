import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopPropagation]'
})
export class StopPropagationDirective {

  @HostListener("mousedown", ["$event"])
    public onClick(event: any): void
    {
        event.stopPropagation();
    }

}
