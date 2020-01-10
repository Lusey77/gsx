import { Injectable } from '@angular/core';
import { ODataBuilder } from "./models/odata-builder";
import { OdataModel } from "./models/odata-model";

@Injectable({
  providedIn: 'root'
})
export class NgxOdataBuilderService {
  public test = new ODataBuilder(OdataModel);

  public constructor() {
    this.test.select().count();
  }
}
