import { Potion } from "../models/Potion";
import { IPotionRepository } from "../repositories/IPotionRepository";

export class PotionController implements IPotionRepository {

    private listPotions: Array<Potion> = new Array<Potion>();

    findPotionById(id: number): undefined | Potion {
        return this.listPotions.find(potion => potion.id === id);
    }

    listAllPotions(): void {
        console.log(`
*****************************************************
Poções do Boticário:
*****************************************************
`);
        for (let potion of this.listPotions) {
            potion.view();
        }
    }

    registerPotion(potion: Potion): void {
        this.listPotions.push(potion);
        console.log(`A poção número: ${potion.id} foi adicionada com sucesso!`);
}

    updatePotion(potion: Potion): void {
        let potionFound = this.findPotionById(potion.id);

        if (!!potionFound) {
            this.listPotions[this.listPotions.indexOf(potionFound)] = potion;
            console.log(`A poção número: ${potion.id} foi atualizada com sucesso!`);
        } else {
            console.log(`A poção número: ${potion.id} não foi encontrada!`);
        }
}

    deletePotion(id: number): void {
        let potionFound = this.findPotionById(id);

        if (!!potionFound) {
            this.listPotions.splice(this.listPotions.indexOf(potionFound), 1);
            console.log(`A poção número: ${id} foi apagada com sucesso!`);
        } else {
            console.log(`A poção número: ${id} não foi encontrada!`);
        }
    }
}