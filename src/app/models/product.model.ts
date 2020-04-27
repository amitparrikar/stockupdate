export class Product {

    id: number;
    name: string;
    code: string;
    invoiceDensity: number;
    sampleDensity: number;
    canCount: number;
    isPresent: false;

    constructor(a, b, c, d, e, f, g) {
        this.id = a;
        this.name = b;
        this.code = c;
        this.invoiceDensity = d;
        this.sampleDensity = e;
        this.canCount = f;
        this.isPresent = g;
    }
}
