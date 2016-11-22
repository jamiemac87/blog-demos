import {Component, OnInit, OnDestroy} from '@angular/core';
import {WizardService, IWizardStep} from './wizard.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-wizard',
  templateUrl: 'wizard.component.html'
})
export class WizardComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  wizardNextStep: Observable<IWizardStep>;

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    this.wizardNextStep = this.wizardService.getNextWizardStep();
  }

  ngOnDestroy() {
    for(let i=0; i < this.subscriptions.length; i++){
      this.subscriptions[i].unsubscribe();
    }
  }

  /**
   * A simple method that subscribes to the wizardNextStep.
   */
  navigate(): void {
    let sub = this.wizardNextStep.subscribe((response) => console.warn('navigate ==> ', response));
    this.subscriptions.push(sub);
  }

}
