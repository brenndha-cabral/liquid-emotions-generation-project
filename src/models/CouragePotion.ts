import { Potion } from "./Potion";

export class CouragePotion extends Potion {
    private _audacityBonus: string;
    private _sideEffect: number;

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
        audacityBonus: string,
        sideEffect: number,
    ) {
        super(id, name, description, type, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price);
        this._audacityBonus = audacityBonus;
        this._sideEffect = sideEffect;
    }

    public get audacityBonus() {
        return this._audacityBonus;
    }

    public set audacityBonus(audacityBonus: string) {
        this._audacityBonus = audacityBonus;
    }

    public get sideEffect() {
        return this._sideEffect;
    }

    public set sideEffect(sideEffect: number) {
        this._sideEffect = sideEffect;
    }

    public view(): void {
        super.view();
        console.log(`
*********************************
Informações Adicionais!
*********************************

Bônus de audácia: ${this._audacityBonus}
Efeitos: ${this._sideEffect}
`);
    }
}