import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Customer, Employee, Service } from '../services/app.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html'
})
export class CategoriesComponent {

    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

    title: string;

    rundomNumber: number;

    shouldBeBinded: boolean;

    customers: Customer[];
    employees: Employee[];

    constructor(service: Service) {
        this.title = 'Site Categories';
        this.rundomNumber = 2;
        this.shouldBeBinded = false;
        this.employees = service.getEmployees();
        this.customers =  service.getCustomers();
    }

    cellClicked(e) {
        console.log(e.data);

        for (const emp of this.employees) {
            emp.IsBinded = emp.ID === e.data.ID;
        }

        this.dataGrid.instance.refresh();
    }

    refresh() {


        this.dataGrid.instance.refresh();
    }

    rundomize()
    // tslint:disable-next-line:one-line
    {
        this.rundomNumber = Math.floor(Math.random() * 6) + 1;

        for (const e of this.employees) {
            e.IsBinded = e.ID % this.rundomNumber === 0;
        }
        this.rundomNumber = Math.floor(Math.random() * 6) + 1;
        this.shouldBeBinded = !this.shouldBeBinded;
        this.refresh();
    }

    calculateCellValue(data) {
        return data.ID % this.rundomNumber === 0;
    }

    toggle(data) {
        console.log(data);
    }
}
