export default class CanSeal {

    id: number;
    woodenBoxSeal: number;
    aluminiumBoxSeal: number;
    product: string;
    decantDetail: string;

    constructor(a: number, b: number, c: number, d: string, e: string) {
        this.id = a;
        this.woodenBoxSeal = b;
        this.aluminiumBoxSeal = c;
        this.product = d;
        this.decantDetail = e;
    }
}
