import { Component } from '@angular/core';
// (primo) importation du Router depuis @angular/router
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  // (secondo) injection du Router dans LandingPageComponent
  constructor(private router: Router) {}

  onContinue() {
    // (tertio) appelle de la méthode navigateByUrl() du Router
    this.router.navigateByUrl('facesnaps');
  }
}
