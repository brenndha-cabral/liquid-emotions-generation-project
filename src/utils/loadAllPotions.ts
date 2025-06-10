import { ChaosPotion } from "../models/ChaosPotion";
import { CouragePotion } from "../models/CouragePotion";
import { LovePotion } from "../models/LovePotion";
import { MelancholyPotion } from "../models/MelancholyPotion";
import { TimeDilationPotion } from "../models/TimeDistortionPotion";
import { dataPotions } from "./dataPotions";

// Lista que armazenará todas as poções instanciadas
export const listPotions: Array<
    LovePotion | ChaosPotion | MelancholyPotion | CouragePotion | TimeDilationPotion
> = [];

// Função para carregar todas as poções
function loadAllPotions() {
    dataPotions.forEach(category => {
        category.potions.forEach(potionData => {
            switch (potionData.type) {
                case 'Afeto':
                    listPotions.push(new LovePotion(
                        potionData.id,
                        potionData.name,
                        potionData.type,
                        potionData.quantity,
                        potionData.flavor,
                        potionData.principalEffect,
                        potionData.sideEffects,
                        potionData.howToUse,
                        potionData.ingredients,
                        potionData.price,
                        potionData.romanticIntensity,
                        potionData.target
                    ));
                    break;
                
                case 'Caos':
                    listPotions.push(new ChaosPotion(
                        potionData.id,
                        potionData.name,
                        potionData.type,
                        potionData.quantity,
                        potionData.flavor,
                        potionData.principalEffect,
                        potionData.sideEffects,
                        potionData.howToUse,
                        potionData.ingredients,
                        potionData.price,

                        potionData.destructionLevel,
                        potionData.effectDuration
                    ));
                    break;
                
                case 'Melancolia':
                    listPotions.push(new MelancholyPotion(
                        potionData.id,
                        potionData.name,
                        potionData.type,
                        potionData.quantity,
                        potionData.flavor,
                        potionData.principalEffect,
                        potionData.sideEffects,
                        potionData.howToUse,
                        potionData.ingredients,
                        potionData.price,
                        potionData.stock,
                        potionData.emotionalDepth,
                        potionData.memoryTrigger
                    ));
                    break;
                
                case 'Coragem':
                    listPotions.push(new CouragePotion(
                        potionData.id,
                        potionData.name,
                        potionData.type,
                        potionData.quantity,
                        potionData.flavor,
                        potionData.principalEffect,
                        potionData.sideEffects,
                        potionData.howToUse,
                        potionData.ingredients,
                        potionData.price,
                        potionData.stock,
                        potionData.audacityBonus,
                        potionData.sideEffectDescription
                    ));
                    break;
                
                case 'Distorção Temporal':
                    listPotions.push(new TimeDistortionPotion(
                        potionData.id,
                        potionData.name,
                        potionData.type,
                        potionData.quantity,
                        potionData.flavor,
                        potionData.principalEffect,
                        potionData.sideEffects,
                        potionData.howToUse,
                        potionData.ingredients,
                        potionData.price,
                        potionData.stock,
                        potionData.timeDilationFactor,
                        potionData.possibleParadoxes
                    ));
                    break;
            }
        });
    });
}

// Carrega todas as poções ao iniciar
loadAllPotions();

// Exemplo de uso:
console.log("=== LISTA DE POÇÕES CARREGADAS ===");
console.log(`Total: ${listPotions.length} poções`);

// Acessando uma poção específica
const amorDestilado = listPotions.find(p => p.id === 101);
console.log(amorDestilado?.name); // "Amor Destilado"