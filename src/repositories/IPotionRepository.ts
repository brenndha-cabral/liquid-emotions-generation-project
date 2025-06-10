import { Potion } from "../models/Potion";

export interface IPotionRepository {
    findPotionById(id: number): undefined | Potion;
    listAllPotions(): void;
    registerPotion(potion: Potion): void;
    updatePotion(potion: Potion): void;
    deletePotion(id: number): void;
};