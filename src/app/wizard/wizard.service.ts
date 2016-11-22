import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

export interface IWizardStep {
  title: string;
  copy: string;
  buttonCopy: string;
  link: string;
  totalSteps: number;
  stepsCompleted: number;
  list: Array<string>;
}

@Injectable()
export class WizardService {

  constructor(private http: Http) { }

  getNextWizardStep(): Observable<IWizardStep> {
    return this.http.get('./api/wizard.json')
      .map((response: Response) => {
        return response.json() || {}
      })
      .catch(error => {
        return Observable.throw(error);
      });
  }

}
