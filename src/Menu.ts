import read from "readline-sync";
import { dataMenu } from "./utils/dataMenu";
import { dataTypesPotions } from "./utils/dataTypesPotions";
import { PotionController } from "./controllers/PotionController";
import { LovePotion } from "./models/LovePotion";
import { ChaosPotion } from "./models/ChaosPotion";
import { MelancholyPotion } from "./models/MelancholyPotion";
import { CouragePotion } from "./models/CouragePotion";
import { TimeDilationPotion } from "./models/TimeDistortionPotion";

export function main() {

    let inputOperation: number;
    let id, quantity, price, romanticIntensity, destructionLevel, effectDuration, emotionalDepth, audacityBonus, timeDilationFactor: number;
    let name, description, type, flavor, principalEffect, sideEffects, howToUse, ingredients, target, memoryTrigger, sideEffect, possibleParadoxes: string;

    let test: string | undefined;

    let potions: PotionController = new PotionController();


    // // Teste de simulação para não ficar imputando na mão no console
    // console.log("\nCriar Contas\n");

    // let cc1: CurrencyAccount = new CurrencyAccount(accounts.generateIdAccount(), 123, 1, "João da Silva", 1000, 100.0);
    // accounts.registerAccount(cc1);

    // let cc2: CurrencyAccount = new CurrencyAccount(accounts.generateIdAccount(), 124, 1, "Maria da Silva", 2000, 100.0);
    // accounts.registerAccount(cc2);

    // let cp1: SalvingAccount = new SalvingAccount(accounts.generateIdAccount(), 125, 2, "Mariana dos Santos", 4000, 12);
    // accounts.registerAccount(cp1);

    // let cp2: SalvingAccount = new SalvingAccount(accounts.generateIdAccount(), 125, 2, "Juliana Ramos", 8000, 15);
    // accounts.registerAccount(cp2);
    // // Final do teste de simulação, esse trecho pode ser apagado depois se necessário


    while (true) {

        console.log(`
*****************************************************

              Geração Poções Líquidas
            O que você quer fazer hoje?

*****************************************************

${dataMenu.map((operation) =>`${operation.code} - ${operation.description}`).join('\n')}

*****************************************************`);

        console.log("Entre com a opção desejada: ");
        inputOperation = read.questionInt();
        const operation = dataMenu.find((operation) => operation.code === inputOperation);

        if (!operation) {
            console.log("\nOperação não existe, por favor, escolha uma opção válida: ");
            continue;
        }

        if (operation.code === 6) {
            console.log("\nO Boticário agradece seu contato, volte sempre!");
            process.exit(0);
            /* encerra o programa manualmente (se houver código abaixo fora do escopo não vai mais rodar, e o arg é um código de saída
             o 0 por exemplo significa saída sem erros, se fosse 1 seria com erro genérico e existem outros códigos também) */
        }

        switch (operation.code) {
            case 1:
                console.log(`\n${operation.description}`);

                // console.log("Digite o id: ")
                // agency = read.questionInt();

                // gerar Id automático

                console.log(`Digite o tipo da poção: 
${dataTypesPotions.map((type) => `${type.code} - ${type.description}`).join('\n')}`);
                type = read.questionInt();

                console.log("Digite o nome: ");
                name = read.question();

                console.log("Digite a descrição: ");
                description = read.question();

                console.log("Digite a quantidade: ");
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
                        console.log("Digite a intensidade romântica: ");
                        romanticIntensity = read.questionInt();
                        
                        console.log("Digite o seu alvo (Pessoa) - Não obrigatório: ");
                        target = read.question();
                        
                        test = dataTypesPotions.find(t => t.code === type)?.description;

                        potions.registerPotion(
                            new LovePotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, romanticIntensity, target)
                        );
                        break;
                    
                    case 2:
                        console.log("Digite o nível de destruição: ");
                        destructionLevel = read.questionInt();

                        console.log("Digite a duração do efeito: ");
                        effectDuration = read.questionInt();

                        potions.registerPotion(
                            new ChaosPotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, destructionLevel, effectDuration)
                        );
                        break;
                    
                    case 3:
                        console.log("Digite a profundidade emocional: ");
                        emotionalDepth = read.questionInt();

                        console.log("Digite os gatilhos: ");
                        memoryTrigger = read.question();

                        potions.registerPotion(
                            new MelancholyPotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, emotionalDepth, memoryTrigger)
                        );
                        break;
                    
                    case 4:
                        console.log("Digite o bônus de audácia: ");
                        audacityBonus = read.questionInt();

                        console.log("Digite os efeitos: ");
                        sideEffect = read.question();

                        potions.registerPotion(
                            new CouragePotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, audacityBonus, sideEffect)
                        );
                        break;
                    
                    case 5:
                        console.log("Digite o fator dilatação: ");
                        timeDilationFactor = read.questionInt();

                        console.log("Digite os paradoxos possíveis: ");
                        possibleParadoxes = read.question();

                        potions.registerPotion(
                            new TimeDilationPotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, timeDilationFactor, possibleParadoxes)
                        );
                        break;
                }

                break;

            case 2:
                console.log(`\n${operation.description}`);
                potions.listAllPotions();
                break;
            
            case 3:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da poção: ");
                id = read.questionInt();

                potions.findPotionById(id);
                break;
            
            case 4:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da poção: ");
                id = read.questionInt();

                let potion = potions.findPotionById(id);

                if (!!potion) {
                
                    // type = potion.type;

                    console.log("Digite o nome: ");
                    name = read.question();

                    console.log("Digite a descrição: ");
                    description = read.question();

                    console.log("Digite a quantidade: ");
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
                            console.log("Digite a intensidade romântica: ");
                            romanticIntensity = read.questionInt();
                            
                            console.log("Digite o seu alvo (Pessoa) - Não obrigatório: ");
                            target = read.question();
                            
                            test = dataTypesPotions.find(t => t.code === type)?.description;

                            potions.registerPotion(
                                new LovePotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, romanticIntensity, target)
                            );
                            break;
                        
                        case 2:
                            console.log("Digite o nível de destruição: ");
                            destructionLevel = read.questionInt();

                            console.log("Digite a duração do efeito: ");
                            effectDuration = read.questionInt();

                            potions.registerPotion(
                                new ChaosPotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, destructionLevel, effectDuration)
                            );
                            break;
                        
                        case 3:
                            console.log("Digite a profundidade emocional: ");
                            emotionalDepth = read.questionInt();

                            console.log("Digite os gatilhos: ");
                            memoryTrigger = read.question();

                            potions.registerPotion(
                                new MelancholyPotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, emotionalDepth, memoryTrigger)
                            );
                            break;
                        
                        case 4:
                            console.log("Digite o bônus de audácia: ");
                            audacityBonus = read.questionInt();

                            console.log("Digite os efeitos: ");
                            sideEffect = read.question();

                            potions.registerPotion(
                                new CouragePotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, audacityBonus, sideEffect)
                            );
                            break;
                        
                        case 5:
                            console.log("Digite o fator dilatação: ");
                            timeDilationFactor = read.questionInt();

                            console.log("Digite os paradoxos possíveis: ");
                            possibleParadoxes = read.question();

                            potions.registerPotion(
                                new TimeDilationPotion(potions.generateidPotion(), name, description, test, quantity, flavor, principalEffect, sideEffects, howToUse, ingredients, price, timeDilationFactor, possibleParadoxes)
                            );
                            break;
                    }

                } else {
                    console.log(`A poção número: ${id} não foi encontrada!`);
                }
                break;
            
            case 5:
                console.log(`\n${operation.description}`);
                console.log("Digite o número da poção: ")
                id = read.questionInt();

                potions.deletePotion(id);
                break;
            
            default:
                break;
        }
    }
};
