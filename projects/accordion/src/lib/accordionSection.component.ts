import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acc-section',
  template: `
  <div class="panel">
    <div class="title" (click)="switch.emit()">
      {{title}}
    </div>
    <div class="body" [ngClass]="{'hide': !isOpen}">
      <ng-content></ng-content>
    </div>
  <div>
  `,
  styleUrls: ['accordion.component.css'],
})
export class AccordionSectionComponent {
  
  @Input() isOpen = false;

  // Title text
  @Input() title: string;

  @Input() id: number;

  @Output() switch: EventEmitter<any> = new EventEmitter<any>();
}
