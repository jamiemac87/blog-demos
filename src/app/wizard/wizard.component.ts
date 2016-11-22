import {Component, OnInit, OnDestroy} from '@angular/core';
import {WizardService, IWizardStep} from './wizard.service';
import {Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-wizard',
  templateUrl: 'wizard.component.html'
})
export class WizardComponent implements OnInit, OnDestroy {
  wizardNextStep: Observable<IWizardStep>;
  subscriptions: Array<Subscription> = [];

  constructor(private wizardService: WizardService) { }

  ngOnInit() {
    this.wizardNextStep = this.wizardService.getNextWizardStep().publishReplay(1).refCount();
  }

  ngOnDestroy() {
    for(let i=0; i < this.subscriptions.length; i++) {
      this.subscriptions[i].unsubscribe();
    }
  }

  navigate(): void {
    let sub = this.wizardNextStep.subscribe((response) => console.warn('Navigate User To: ', response.link));
    this.subscriptions.push(sub)
  }

}
