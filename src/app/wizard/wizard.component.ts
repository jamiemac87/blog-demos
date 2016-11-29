import {Component, OnInit} from '@angular/core';
import {WizardService, IWizardStep} from './wizard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-wizard',
  templateUrl: 'wizard.component.html'
})
export class WizardComponent implements OnInit {
  wizardNextStep: Observable<IWizardStep>;

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    this.wizardNextStep = this.wizardService.getNextWizardStep().share();
  }

  navigate(): void {
    this.wizardNextStep.subscribe((response) => console.warn('Navigate User To: ', response.link));
  }

}
