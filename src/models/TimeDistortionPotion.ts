import { Potion } from "./Potion";

export class TimeDilationPotion extends Potion {
    private _timeDilationFactor: number;
    private _possibleParadoxes: string;

    constructor(
        id: number,
        name: string,
        description: string,
        type: string,
        quantity: number,
        flavor: string,
        principalEffect: string,
        sideEffects: string,
        howToUse: string,
        ingredients: string,
        price: number,
        timeDilationFactor: number,
        possibleParadoxes: string,
    ) {
        super(id, name, description, type, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price);
        this._timeDilationFactor = timeDilationFactor;
        this._possibleParadoxes = possibleParadoxes;
    }

    public get timeDilationFactor() {
        return this._timeDilationFactor;
    }

    public set timeDilationFactor(timeDilationFactor: number) {
        this._timeDilationFactor = timeDilationFactor;
    }

    public get possibleParadoxes() {
        return this._possibleParadoxes;
    }

    public set possibleParadoxes(possibleParadoxes: string) {
        this._possibleParadoxes = possibleParadoxes;
    }

    public view(): void {
        super.view();
        console.log(`
🧿 Informações Adicionais 🧿

⏳ Fator dilatação: ${this._timeDilationFactor}
🌀 Paradoxos possíveis: ${this._possibleParadoxes}
---------------------------------
`);
    }
}