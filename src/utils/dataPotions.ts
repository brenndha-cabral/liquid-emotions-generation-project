export const dataPotions = [
  {
    code: 1,
    description: "Poções de Afeto",
    potions: [
      {
        id: 101,
        name: "Amor Destilado",
        description: "Elixir rubi viscoso com reflexos dourados, destilado em alambiques de cobre banhados a prata",
        type: "Afeto",
        quantity: 30,
        flavor: "Doce de framboesa com notas de baunilha",
        principalEffect: "Aquece o peito e causa suave obsessão por 1h",
        sideEffects: "Pupilas dilatadas, risos espontâneos",
        howToUse: "Tome 1 dose (6ml) com champagne ou sob luar",
        ingredients: "Pétalas de rosas lunares colhidas na primavera",
        price: 80,
        romanticIntensity: 8,
        target: "Alvo não definido!"
      },
      {
        id: 102,
        name: "Paixão Distilada",
        description: "Licor vermelho-sangue fumegante em frasco em formato de coração",
        type: "Afeto",
        quantity: 20,
        flavor: "Rosa negra + ferro + chocolate amargo",
        principalEffect: "Atrai olhares por 2h (varia conforme padrões locais)",
        sideEffects: "Rubor facial, juramentos de amor eterno",
        howToUse: "Aplique no pescoço como perfume ou beba em gole único",
        ingredients: "Corações de dragão juvenil, vinho vampírico envelhecido",
        price: 300,
        romanticIntensity: 9,
        target: "alvo não definido"
      }
    ]
  },
  {
    code: 2,
    description: "Poções de Caos",
    potions: [
      {
        id: 201,
        name: "Raiva Fermentada",
        description: "Líquido âmbar efervescente com bolhas vulcânicas, armazenado em ampola de vidro reforçado",
        type: "Caos",
        quantity: 15,
        flavor: "Pimenta fantasma + carvão ativado",
        principalEffect: "Transforma insultos em arte verbal por 45min",
        sideEffects: "Fumaça saindo das orelhas, objetos quebrados acidentalmente",
        howToUse: "Agite vigorosamente e tome puro em situações de irritação",
        ingredients: "Unhas de grifo, pó de meteorito, lágrimas de troll",
        price: 60,
        destructionLevel: 3,
        effectDuration: 45
      },
      {
        id: 202,
        name: "Inveja Envelhecida",
        description: "Líquido verde-esmeralda com sedimentos de olho seco, envelhecido em barril de espelho quebrado",
        type: "Caos",
        quantity: 25,
        flavor: "Limão fermentado + grama recém-cortada",
        principalEffect: "Permite copiar talentos alheios (37% menos eficaz)",
        sideEffects: "Dentes rangendo, elogios sarcásticos",
        howToUse: "Ingerir enquanto observa alguém com habilidades desejadas",
        ingredients: "Fragmentos de diplomas falsos, suco de limão amaldiçoado",
        price: 150,
        destructionLevel: 2,
        effectDuration: 60
      }
    ]
  },
  {
    code: 3,
    description: "Poções de Melancolia",
    potions: [
      {
        id: 301,
        name: "Nostalgia em Gotas",
        description: "Xarope âmbar com flocos de memória visíveis, engarrafado em vidro fosco",
        type: "Melancolia",
        quantity: 50,
        flavor: "Algodão-doce + poeira de VHS",
        principalEffect: "Revive memórias aleatórias em detalhes vívidos",
        sideEffects: "Lábios cantando jingles antigos involuntariamente",
        howToUse: "Diluir 2 gotas em chá de camomila ao ouvir vinil riscado",
        ingredients: "Lágrimas de comediantes aposentados, fitas cassete derretidas",
        price: 120,
        emotionalDepth: "profunda",
        memoryTrigger: "infância"
      },
      {
        id: 302,
        name: "Melancolia Macerada",
        description: "Licor azul-turquesa com partículas brilhantes que dançam quando agitado",
        type: "Melancolia",
        quantity: 20,
        flavor: "Uva verde + lágrima de cineasta",
        principalEffect: "Transforma tristeza em arte (sonetos ou pinturas)",
        sideEffects: "Chuva localizada, atração por gatos pretos",
        howToUse: "Inalar vapores enquanto ouve jazz em tom menor",
        ingredients: "Pétalas de flor noturna maceradas por 7 luas",
        price: 90,
        emotionalDepth: "média",
        memoryTrigger: "perdas"
      }
    ]
  },
  {
    code: 4,
    description: "Poções de Coragem",
    potions: [
      {
        id: 401,
        name: "Coragem Infusa",
        description: "Líquido dourado borbulhante como champagne, em recipiente à prova de explosões",
        type: "Coragem",
        quantity: 10,
        flavor: "Canela + pólvora + bala de goma",
        principalEffect: "Remove todos os medos por 30min (incluindo os úteis)",
        sideEffects: "Voz mais grave, impulsos heroicos perigosos",
        howToUse: "Bater no peito 3x antes de ingerir em situações de perigo",
        ingredients: "Pelos de leão, suor de gladiador, 3 mentiras convincentes",
        price: 200,
        audacityBonus: 5,
        sideEffectDescription: "20% chance de desafiar alguém para duelo"
      }
    ]
  },
  {
    code: 5,
    description: "Poções de Distorção Temporal",
    potions: [
      {
        id: 501,
        name: "Tédio Decantado",
        description: "Água cinza absolutamente estática, vendida em galão industrial",
        type: "Distorção Temporal",
        quantity: 5000,
        flavor: "Papelão molhado (sem glúten)",
        principalEffect: "Faz 1h parecer 8h de tédio produtivo",
        sideEffects: "Bocejos contagiantes, relógios defeituosos",
        howToUse: "Misturar com café para efeitos controlados",
        ingredients: "Água estagnada de relógios de sol quebrados",
        price: 10,
        timeDilationFactor: 0.125,
        possibleParadoxes: ["Envelhecer enquanto o mundo permanece igual"]
      },
      {
        id: 502,
        name: "Euforia Gasosa",
        description: "Névoa dourada auto-pressurizada que evapora se exposta ao ar",
        type: "Distorção Temporal",
        quantity: 1,
        flavor: "Algodão doce + ozônio + glitter comestível",
        principalEffect: "30min de alegria distorcida (riso garantido)",
        sideEffects: "Pupilas em ♡, compras impulsivas de ursos infláveis",
        howToUse: "Inalar profundamente perto de flores ou após más notícias",
        ingredients: "Risadas de bebês capturadas em garrafas, névoa de aurora boreal",
        price: 500,
        timeDilationFactor: 1.8,
        possibleParadoxes: ["Lembranças de futuros alternativos"]
      }
    ]
  }
];