import { Potion } from "./Potion";

export class LovePotion extends Potion {
    private _romanticIntensity: number;
    private _target: string;

    constructor(
        id: number,
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
        romanticIntensity: number,
        target: string = "Alvo não definido!" // Setei uma mensagem padrão caso a pessoa não tenha um alvo ou não queira inserir a pessoa algo,
    ) {
        super(id, description, type, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, stock);
        this._romanticIntensity = romanticIntensity;
        this._target = target;
    }

    public get romanticIntensity() {
        return this._romanticIntensity;
    }

    public set romanticIntensity(romanticIntensity: number) {
        this._romanticIntensity = romanticIntensity;
    }

    public get target() {
        return this._target;
    }

    public set target(target: string) {
        this._target = target;
    }
}