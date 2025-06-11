import { Potion } from "../models/Potion";
import { IPotionRepository } from "../repositories/IPotionRepository";

export class PotionController implements IPotionRepository {

    private listPotions: Array<Potion> = new Array<Potion>();
    idPotion: number = 0;

    public generateIdPotion(): number {
        return Math.floor(Math.random() * 100);
    }

    public potionById(id: number): Potion | undefined {
        return this.listPotions.find((potion) => potion.id === id)
    }

    findPotionById(id: number): void {
        let potionFound = this.potionById(id);

        if (!!potionFound) {
            console.log
(`***************************************************
Poção escolhida:
*****************************************************
`);
            potionFound.view();
            } else {
            console.log("Nenhuma poção em estoque!");
        }
    }

    listAllPotions(): void {
        if (this.listPotions.length === 0) {
            console.log("Nenhuma poção em estoque!");
        } else {
            console.log
(`*****************************************************
Poções do Boticário:
*****************************************************`);
            for (let potion of this.listPotions) {
                potion.view();
            }
        }
    }

    registerPotion(potion: Potion): void {
        let potionFound = this.potionById(potion.id)

        if (!!potionFound) {
            console.log(`A poção número: ${potion.id} Já existe! Entre com outro número!`);
        } else {
            this.listPotions.push(potion);
            console.log(`✨ Poção cadastrada: ${potion.name} - número: ${potion.id}`);
        }
}

    updatePotion(potionUpdate: Potion): void {
        let potionFound = this.potionById(potionUpdate.id);

        if (!!potionFound) {
            this.listPotions[this.listPotions.indexOf(potionFound)] = potionUpdate;
            console.log(`Poção atualizada: ${potionFound.name} - número: ${potionFound.id}`);
        } else {
            console.log(`A poção número: ${potionUpdate.id} não foi encontrada!`);
        }
}

    deletePotion(id: number): void {
        let potionFound = this.potionById(id);

        if (!!potionFound) {
            this.listPotions.splice(this.listPotions.indexOf(potionFound), 1);
            console.log(`Poção apagada: ${potionFound.name} - número: ${potionFound.id}`);
        } else {
            console.log(`A poção número: ${id} não foi encontrada!`);
        }
    }
}