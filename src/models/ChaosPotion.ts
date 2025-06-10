import { Potion } from "./Potion";

export class ChaosPotion extends Potion {
    private _destructionLevel: number;
    private _effectDuration: number;

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
        stock: number,
        destructionLevel: number,
        effectDuration: number,
    ) {
        super(id, name, description, type, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, stock);
        this._destructionLevel = destructionLevel;
        this._effectDuration = effectDuration;
    }

    public get destructionLevel() {
        return this._destructionLevel;
    }

    public set destructionLevel(destructionLevel: number) {
        this._destructionLevel = destructionLevel;
    }

    public get effectDuration() {
        return this._effectDuration;
    }

    public set effectDuration(effectDuration: number) {
        this._effectDuration = effectDuration;
    }
}