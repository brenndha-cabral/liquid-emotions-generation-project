import read from "readline-sync";
import { dataMenu } from "./utils/dataMenu";
import { dataTypesPotions } from "./utils/dataTypesPotions";
import { PotionController } from "./controllers/PotionController";
import { LovePotion } from "./models/LovePotion";
import { ChaosPotion } from "./models/ChaosPotion";
import { MelancholyPotion } from "./models/MelancholyPotion";
import { CouragePotion } from "./models/CouragePotion";
import { TimeDilationPotion } from "./models/TimeDistortionPotion";
import { registerDataPotions } from "./utils/dataPotions";

export function menu() {

    let potions: PotionController = new PotionController();
    let inputOperation: number;
    let type: number;
    let id: number;
    let quantity, price, romanticIntensity, destructionLevel, effectDuration, emotionalDepth, audacityBonus, timeDilationFactor: number;
    let name, description, flavor, principalEffect, sideEffects, howToUse, ingredients, target, memoryTrigger, sideEffect, possibleParadoxes, typeDescription: string;

    try {
        // Teste de simulação para não ficar imputando na mão no console
        registerDataPotions(potions);
        // Final do input das poções
    
    
        while (true) {
    
            console.log(`
*****************************************************

        🔮 Poções - Emoções Líquidas 🔮
           O que você quer fazer hoje?

*****************************************************
    
${dataMenu.map((operation) =>`✨ ${operation.code} - ${operation.description}`).join('\n')}
    
*****************************************************`);
    
            console.log("Entre com a opção desejada: ");
            inputOperation = read.questionInt();
            const operation = dataMenu.find((operation) => operation.code === inputOperation);
    
            if (!operation) {
                console.log("\nOperação não existe, por favor, escolha uma opção válida: ");
                continue;
            }
    
            if (operation.code === 6) {
                console.log("\n🧙 O Boticário agradece seu contato, volte sempre! 🧙 ");
                process.exit(0);
                /* encerra o programa manualmente (se houver código abaixo fora do escopo não vai mais rodar, e o arg é um código de saída
                 o 0 por exemplo significa saída sem erros, se fosse 1 seria com erro genérico e existem outros códigos também) */
            }
    
            switch (operation.code) {
                case 1:
    
                    console.log(`Digite o tipo da poção: 
${dataTypesPotions.map((type) => `🔮 ${type.code} - ${type.description}`).join('\n')}`);
                    type = read.questionInt();
    
                    id = potions.generateIdPotion();
    
                    console.log("Digite o nome: ");
                    name = read.question();
    
                    console.log("Digite a descrição: ");
                    description = read.question();
    
                    console.log("Digite a quantidade (numeral): ");
                    quantity = read.questionInt();
    
                    console.log("Digite o sabor: ");
                    flavor = read.question();
    
                    console.log("Digite o efeito principal: ");
                    principalEffect = read.question();
    
                    console.log("Digite os efeitos colaterais: ");
                    sideEffects = read.question();
    
                    console.log("Digite como usar: ");
                    howToUse = read.question();
    
                    console.log("Digite os ingredientes: ");
                    ingredients = read.question();
    
                    console.log("Digite o preço: ");
                    price = read.questionFloat();
    
                    switch (type) {
                        
                        
                        case 1:
                            console.log("Digite a intensidade romântica 1-10: ");
                            romanticIntensity = read.questionInt();
                            
                            console.log("Digite o seu alvo (Pessoa) - Não obrigatório: ");
                            target = read.question();
    
                            typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                            potions.registerPotion(
                                new LovePotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, romanticIntensity, target)
                            );
                            break;
                        
                        case 2:
                            console.log("Digite o nível de destruição 1-10: ");
                            destructionLevel = read.questionInt();
    
                            console.log("Digite a duração do efeito 1-5: ");
                            effectDuration = read.questionInt();
    
                            typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                            potions.registerPotion(
                                new ChaosPotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, destructionLevel, effectDuration)
                            );
                            break;
                        
                        case 3:
                            console.log("Digite a profundidade emocional 1-5: ");
                            emotionalDepth = read.questionInt();
    
                            console.log("Digite os gatilhos: ");
                            memoryTrigger = read.question();
    
                            typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                            potions.registerPotion(
                                new MelancholyPotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, emotionalDepth, memoryTrigger)
                            );
                            break;
                        
                        case 4:
                            console.log("Digite o bônus de audácia: 1-10");
                            audacityBonus = read.questionInt();
    
                            console.log("Digite os efeitos: ");
                            sideEffect = read.question();
    
                            typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                            potions.registerPotion(
                                new CouragePotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, audacityBonus, sideEffect)
                            );
                            break;
                        
                        case 5:
                            console.log("Digite o fator dilatação: 1-5");
                            timeDilationFactor = read.questionInt();
    
                            console.log("Digite os paradoxos possíveis: ");
                            possibleParadoxes = read.question();
    
                            typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                            potions.registerPotion(
                                new TimeDilationPotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, timeDilationFactor, possibleParadoxes)
                            );
                            break;
                    }
    
                    break;
    
                case 2:
                    potions.listAllPotions();
                    break;
                
                case 3:
                    console.log("Digite o número da poção: ");
                    id = read.questionInt();
    
                    potions.findPotionById(id);
                    break;
                
                case 4:
                    console.log("Digite o número da poção: ");
                    id = read.questionInt();
    
                    let potion = potions.potionById(id);
    
                    if (!!potion) {
                    
                        typeDescription = potion.type;
    
                        console.log("Digite o nome: ");
                        name = read.question();
    
                        console.log("Digite a descrição: ");
                        description = read.question();
    
                        console.log("Digite a quantidade: (numeral)");
                        quantity = read.questionInt();
    
                        console.log("Digite o sabor: ");
                        flavor = read.question();
    
                        console.log("Digite o efeito principal: ");
                        principalEffect = read.question();
    
                        console.log("Digite os efeitos colaterais: ");
                        sideEffects = read.question();
    
                        console.log("Digite como usar: ");
                        howToUse = read.question();
    
                        console.log("Digite os ingredientes: ");
                        ingredients = read.question();
    
                        console.log("Digite o preço: ");
                        price = read.questionFloat();
    
                        switch (typeDescription) {
                            
                            case "Poções de Afeto":
                                console.log("Digite a intensidade romântica: 1-10");
                                romanticIntensity = read.questionInt();
                                
                                console.log("Digite o seu alvo (Pessoa) - Não obrigatório: ");
                                target = read.question();
                                
                                typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                                potions.updatePotion(
                                    new LovePotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, romanticIntensity, target)
                                );
                                break;
                            
                            case "Poções de Caos":
                                console.log("Digite o nível de destruição: 1-10");
                                destructionLevel = read.questionInt();
    
                                console.log("Digite a duração do efeito: 1-5");
                                effectDuration = read.questionInt();
    
                                typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                                potions.updatePotion(
                                    new ChaosPotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, destructionLevel, effectDuration)
                                );
                                break;
                            
                            case "Poções de Melancolia":
                                console.log("Digite a profundidade emocional: 1-5");
                                emotionalDepth = read.questionInt();
    
                                console.log("Digite os gatilhos: ");
                                memoryTrigger = read.question();
    
                                typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                                potions.updatePotion(
                                    new MelancholyPotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, emotionalDepth, memoryTrigger)
                                );
                                break;
                            
                            case "Poções de Coragem":
                                console.log("Digite o bônus de audácia: 1-10");
                                audacityBonus = read.questionInt();
    
                                console.log("Digite os efeitos: ");
                                sideEffect = read.question();
    
                                typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                                potions.updatePotion(
                                    new CouragePotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, audacityBonus, sideEffect)
                                );
                                break;
                            
                            case "Poções de Distorção Temporal":
                                console.log("Digite o fator dilatação: 1-5");
                                timeDilationFactor = read.questionInt();
    
                                console.log("Digite os paradoxos possíveis: ");
                                possibleParadoxes = read.question();
    
                                typeDescription = dataTypesPotions.find(t => t.code === type)?.description || "";
    
                                potions.updatePotion(
                                    new TimeDilationPotion(id, name, description, typeDescription, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, timeDilationFactor, possibleParadoxes)
                                );
                                break;
                        }
    
                    } else {
                        console.log(`A poção número: ${id} não foi encontrada!`);
                    }
                    break;
                
                case 5:
                    console.log("Digite o número da poção: ")
                    id = read.questionInt();
    
                    potions.deletePotion(id);
                    break;
                
                default:
                    break;
            }
        }
    } catch (error) {
        throw new Error(`Erro ao rodar o projeto! => ${(error as Error).message}`);
    }
}

