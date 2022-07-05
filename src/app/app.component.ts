import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  customIcons = [
    'learn_more',
    'no_poverty',
    'decent_work',
    'health_and_well_being',
    'peace_and_justice',
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.customIcons.forEach((id) => {
      this.matIconRegistry.addSvgIcon(
        id,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${id}.svg`),
      );
    });
    
  }
}
