import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CanSeal from 'src/app/models/can-seal.model';


@Component({
    selector: 'app-seal-detail',
    templateUrl: './seal-detail.component.html',
    styleUrls: ['./seal-detail.component.scss']
})
export class SealDetail implements OnInit {

    @Input() sealData: CanSeal;

    @Output('onSave') saveData: EventEmitter<CanSeal> = new EventEmitter();

    aluminiumBoxSeal: number;
    woodenBoxSeal: number;
    name: string;
    decantDetail: string;

    constructor() {
    }

    ngOnInit() {
        this.aluminiumBoxSeal = this.sealData.aluminiumBoxSeal;
        this.woodenBoxSeal = this.sealData.woodenBoxSeal;
        this.name = this.sealData.product;
    }

    onDataUpdate() {
        const DATA = new CanSeal(this.sealData.id, this.woodenBoxSeal, this.aluminiumBoxSeal, this.sealData.product, this.decantDetail);

        this.saveData.emit(DATA);
    }
}
