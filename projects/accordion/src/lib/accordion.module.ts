import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { AccordionSectionComponent } from './accordionSection.component';

@NgModule({
  declarations: [ 
    AccordionSectionComponent , AccordionComponent
  ],
  imports: [CommonModule],
  exports: [ AccordionSectionComponent , AccordionComponent ]
})
export class AccordionModule { }

