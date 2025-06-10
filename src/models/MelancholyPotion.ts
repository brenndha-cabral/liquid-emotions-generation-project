import { Potion } from "./Potion";

export class MelancholyPotion extends Potion {
    private _emotionalDepth: number;
    private _memoryTrigger: string;

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
        emotionalDepth: number,
        memoryTrigger: string,
    ) {
        super(id, name, description, type, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price);
        this._emotionalDepth = emotionalDepth;
        this._memoryTrigger = memoryTrigger;
    }

    public get emotionalDepth() {
        return this._emotionalDepth;
    }

    public set emotionalDepth(emotionalDepth: number) {
        this._emotionalDepth = emotionalDepth;
    }

    public get memoryTrigger() {
        return this._memoryTrigger;
    }

    public set memoryTrigger(memoryTrigger: string) {
        this._memoryTrigger = memoryTrigger;
    }

    public view(): void {
        super.view();
        console.log(`
*********************************
Informações Adicionais!
*********************************

Profundidade emocional: ${this._emotionalDepth}
Gatilhos: ${this._memoryTrigger}
`);
    }
}