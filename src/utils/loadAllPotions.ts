import { PotionController } from "../controllers/PotionController";
import { LovePotion } from "../models/LovePotion";
import { ChaosPotion } from "../models/ChaosPotion";
import { MelancholyPotion } from "../models/MelancholyPotion";
import { TimeDilationPotion } from "../models/TimeDistortionPotion";
import { CouragePotion } from "../models/CouragePotion";

export function registerSamplePotions(potions: PotionController): void {
    console.log("\nCadastrando poções de exemplo...");

    const lovePotion1 = new LovePotion(
        potions.generateIdPotion(),
        "Amor Destilado Premium",
        "Elixir rubi com cristais de quartzo rosa",
        "Poções de Afeto",
        30,
        "Framboesa com champanhe",
        "Aumenta a atração por 24h",
        "Pupilas dilatadas",
        "Tomar antes do encontro",
        "Pétalas de rosas, mel de fada",
        150.0,
        9,
        "alma gêmea"
    );

    const lovePotion2 = new LovePotion(
        potions.generateIdPotion(),
        "Paixão Ardente",
        "Licor vermelho que brilha no escuro",
        "Poções de Afeto",
        20,
        "Canela com pimenta",
        "Aumenta o desejo físico",
        "Rubor facial intenso",
        "Aplicar no pescoço como perfume",
        "Essência de dragão, pó de rubi",
        200.0,
        8,
        "objeto de desejo"
    );

    const chaosPotion1 = new ChaosPotion(
        potions.generateIdPotion(),
        "Raiva Vulcânica",
        "Líquido âmbar que ferve sozinho",
        "Poções de Caos",
        15,
        "Pimenta fantasma",
        "Transforma raiva em arte",
        "Fumaça pelas orelhas",
        "Agitar e gritar palavras obscuras",
        "Lágrimas de troll, pó de vulcão",
        85.0,
        4,
        60
    );

    const chaosPotion2 = new ChaosPotion(
        potions.generateIdPotion(),
        "Inveja Corrosiva",
        "Líquido verde que corre metais",
        "Poções de Caos",
        25,
        "Limão azedo",
        "Permite copiar habilidades",
        "Dentes rangendo",
        "Tomar enquanto observa o alvo",
        "Suco de limão amaldiçoado",
        120.0,
        3,
        45
    );

    const melancholyPotion1 = new MelancholyPotion(
        potions.generateIdPotion(),
        "Nostalgia em Garrafa",
        "Xarope âmbar com memórias visíveis",
        "Poções de Melancolia",
        50,
        "Algodão-doce velho",
        "Revive lembranças esquecidas",
        "Cantar músicas antigas",
        "Tomar com chá de camomila",
        "Lágrimas de poeta, tinta velha",
        110.0,
        5,
        "infância"
    );

    const melancholyPotion2 = new MelancholyPotion(
        potions.generateIdPotion(),
        "Tristeza Cristalizada",
        "Água prateada com flocos que dançam",
        "Poções de Melancolia",
        20,
        "Chuva de abril",
        "Transforma dor em arte",
        "Chuva localizada",
        "Inalar vapores ouvindo jazz",
        "Lágrimas de cineasta",
        90.0,
        3,
        "perdas"
    );

    const couragePotion1 = new CouragePotion(
        potions.generateIdPotion(),
        "Coragem do Leão",
        "Líquido dourado que borbulha heroicamente",
        "Poções de Coragem",
        10,
        "Canela com pólvora",
        "Remove todos os medos por 30min",
        "Voz mais grave",
        "Bater no peito 3x antes de usar",
        "Pelos de leão, suor de gladiador",
        180.0,
        7,
        "Pode desafiar para duelos"
    );

    const couragePotion2 = new CouragePotion(
        potions.generateIdPotion(),
        "Audácia Instantânea",
        "Shot que explode em contato com a língua",
        "Poções de Coragem",
        5,
        "Pimenta com álcool",
        "+5 de audácia em situações sociais",
        "Falar sem filtro",
        "Tomar de gole antes da ação",
        "Essência de dragão, café concentrado",
        150.0,
        5,
        "Gagueira temporária"
    );

    const timePotion1 = new TimeDilationPotion(
        potions.generateIdPotion(),
        "Tédio Decantado",
        "Água cinza absolutamente estática",
        "Poções de Distorção Temporal",
        5000,
        "Papelão molhado",
        "Faz 1h parecer 8h",
        "Relógios param",
        "Misturar com café",
        "Água de relógio quebrado",
        10.0,
        0.125,
        "Envelhecer sozinho"
    );

    const timePotion2 = new TimeDilationPotion(
        potions.generateIdPotion(),
        "Euforia Gasosa",
        "Névoa dourada que evapora rápido",
        "Poções de Distorção Temporal",
        1,
        "Algodão-doce com ozônio",
        "30min de alegria intensa",
        "Pupilas em coração",
        "Inalar perto de flores",
        "Risadas de bebês",
        500.0,
        1.8,
        "Memórias de futuros alternativos"
    );

    const samplePotions = [
        lovePotion1, lovePotion2,
        chaosPotion1, chaosPotion2,
        melancholyPotion1, melancholyPotion2,
        couragePotion1, couragePotion2,
        timePotion1, timePotion2
    ];

    samplePotions.forEach(potion => {
        potions.registerPotion(potion);
    });
}