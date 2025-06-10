import { Potion } from "./Potion";

export class LovePotion extends Potion {
    private _romanticIntensity: number;
    private _target: string;

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
        romanticIntensity: number,
        target: string = "Alvo não definido!" // Setei uma mensagem padrão caso a pessoa não tenha um alvo ou não queira inserir a pessoa algo,
    ) {
        super(id, name, description, type, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price);
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

    public view(): void {
        super.view();
        console.log(`
*********************************
Informações Adicionais!
*********************************

Intensidade romântica: ${this._romanticIntensity}
Alvo: ${this._target}
`);
    }
}