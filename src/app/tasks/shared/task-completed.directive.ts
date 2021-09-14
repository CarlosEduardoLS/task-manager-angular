import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskCompleted]',
})
export class TaskCompletedDirective implements OnInit {
  @Input() taskCompleted: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.taskCompleted) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }
}
