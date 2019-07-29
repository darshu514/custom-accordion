import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionSectionComponent } from './accordionSection.component';

@Component({
  selector: 'accordion',
  template: `
    <ng-content></ng-content>
`,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent  implements AfterContentInit {
  @ContentChildren(AccordionSectionComponent) 
  sections: QueryList<AccordionSectionComponent>;

  ngAfterContentInit() {
    this.sections.toArray().forEach((t) => t.isOpen = false);

    this.sections.map((t) => {
      t.switch.subscribe(() => {
        // Open the section
        this.openSection(t);
      });
    });
  }

  openSection(section) {
    // if user clicks on an opened section, then that particular section needs to be closed
    section.isOpen = !section.isOpen

    this.sections.toArray().forEach((t) => {
      // closing other sections than the clicked section
      if(t.id!==section.id) {
        t.isOpen = false
      }
    });
  }
}
