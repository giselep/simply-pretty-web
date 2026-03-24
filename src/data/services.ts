import {
  Heart,
  Flame,
  Sparkles,
  Smile,
} from "lucide-react";

import imgRelaxantes from "@/assets/services/massagens-relaxantes.jpg";
import imgTerapeuticas from "@/assets/services/massagens-terapeuticas.jpg";
import imgEsteticas from "@/assets/services/massagens-esteticas.jpg";
import imgFaciais from "@/assets/services/massagens-faciais.jpg";

export interface ServiceData {
  slug: string;
  icon: typeof Heart;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  whoCanDo: string;
  image: string;
  treatments: string[];
}

export const services: ServiceData[] = [
  {
    slug: "massagens-relaxantes",
    icon: Heart,
    title: "Massagens Relaxantes",
    shortDesc: "Ideais para aliviar o stress e a tensão do dia a dia, proporcionando relaxamento profundo ao corpo e à mente.",
    longDesc: "As nossas massagens relaxantes são pensadas para proporcionar um momento de tranquilidade absoluta. Utilizamos técnicas suaves e envolventes que atuam no sistema nervoso, reduzindo os níveis de cortisol e promovendo a libertação de endorfinas. Cada sessão é personalizada de acordo com as suas necessidades, num ambiente acolhedor com aromaterapia e música relaxante. Seja através de pedras quentes, velas aromáticas ou técnicas ayurvédicas, o objetivo é sempre o mesmo: restaurar o seu equilíbrio interior e devolver-lhe a sensação de bem-estar pleno.",
    benefits: [
      "Redução do stress e da ansiedade",
      "Alívio de tensões musculares superficiais",
      "Melhoria da qualidade do sono",
      "Estimulação da circulação sanguínea",
      "Libertação de endorfinas naturais",
      "Relaxamento profundo do corpo e da mente",
      "Hidratação e nutrição da pele",
    ],
    whoCanDo: "As massagens relaxantes são indicadas para todas as pessoas que sentem o peso do stress diário e procuram um momento de pausa e recuperação. Ideal para quem sofre de insónia, ansiedade ou simplesmente precisa de um momento só para si. Não recomendado para pessoas com febre, infecções cutâneas ativas ou condições médicas graves sem orientação médica.",
    image: imgRelaxantes,
    treatments: [
      "Massagem relaxante tradicional – movimentos suaves para reduzir o stress",
      "Massagem com pedras quentes – calor que relaxa profundamente os músculos",
      "Massagem com velas aromáticas – combina hidratação e aromaterapia",
      "Massagem ayurvédica (Abhyanga) – com óleos quentes e movimentos contínuos",
      "Massagem sueca – técnica clássica de relaxamento muscular",
      "Massagem sensorial – estimula os sentidos com toques suaves",
    ],
  },
  {
    slug: "massagens-terapeuticas",
    icon: Flame,
    title: "Massagens Terapêuticas",
    shortDesc: "Indicadas para dores musculares, recuperação física e promoção da saúde através de técnicas especializadas.",
    longDesc: "As massagens terapêuticas do Bouquet D'Afetos são realizadas por profissionais qualificados que utilizam técnicas especializadas para tratar dores musculares, lesões desportivas e desequilíbrios posturais. Cada sessão começa com uma avaliação personalizada para identificar os pontos de tensão e definir o protocolo mais adequado. Trabalhamos com técnicas como shiatsu, reflexologia podal, liberação miofascial e massagem tailandesa, sempre com foco na recuperação e no bem-estar integral do corpo. Os resultados incluem alívio da dor, maior mobilidade e prevenção de lesões futuras.",
    benefits: [
      "Alívio eficaz de dores musculares e articulares",
      "Recuperação acelerada de lesões desportivas",
      "Melhoria da postura e mobilidade",
      "Redução de inchaço e retenção de líquidos",
      "Equilíbrio energético do corpo",
      "Prevenção de lesões recorrentes",
      "Estímulo da circulação linfática",
    ],
    whoCanDo: "Indicadas para pessoas com dores crónicas, atletas em recuperação, quem sofre de problemas posturais ou retenção de líquidos. Ideal para quem procura um tratamento mais profundo e direcionado. Consulte o seu médico antes do tratamento se tiver condições como hérnias, osteoporose ou problemas cardiovasculares.",
    image: imgTerapeuticas,
    treatments: [
      "Massagem terapêutica – alívio de dores musculares",
      "Massagem desportiva – recuperação e prevenção de lesões",
      "Drenagem linfática – reduz inchaço e retenção de líquidos",
      "Massagem modeladora – ajuda na redução de medidas",
      "Shiatsu – pressão em pontos energéticos",
      "Reflexologia podal – estímulo de pontos nos pés",
      "Liberação miofascial – trata tensões profundas",
      "Massagem tailandesa – alongamentos + pressão",
    ],
  },
  {
    slug: "massagens-esteticas",
    icon: Sparkles,
    title: "Massagens Estéticas",
    shortDesc: "Focadas na estética corporal, firmeza da pele e melhoria da aparência através de técnicas especializadas.",
    longDesc: "As massagens estéticas do Bouquet D'Afetos combinam técnicas manuais e instrumentais para promover resultados visíveis na aparência do corpo. Utilizamos ferramentas como hastes de bambu na bambuterapia, ventosas na ventosaterapia e técnicas específicas de modelagem corporal. Cada protocolo é desenhado para atuar em áreas específicas, combatendo a celulite, promovendo a firmeza da pele, estimulando a circulação e auxiliando na eliminação de toxinas. Os tratamentos são realizados num ambiente profissional e confortável, garantindo resultados progressivos e duradouros.",
    benefits: [
      "Redução visível da celulite",
      "Melhoria da firmeza e elasticidade da pele",
      "Estimulação da circulação sanguínea",
      "Auxílio na redução de medidas",
      "Eliminação de toxinas do organismo",
      "Modelagem e contorno corporal",
      "Pele mais lisa e tonificada",
    ],
    whoCanDo: "Indicadas para pessoas que desejam melhorar a aparência da pele e do corpo de forma natural e não invasiva. Ideal para quem combate a celulite, flacidez ou deseja manter o corpo tonificado. Não recomendado para gestantes, pessoas com varizes graves, infecções cutâneas ou condições circulatórias sem acompanhamento médico.",
    image: imgEsteticas,
    treatments: [
      "Massagem anticelulite",
      "Massagem redutora",
      "Bambuterapia – usa hastes de bambu",
      "Ventosaterapia – melhora circulação e firmeza",
      "Massagem firmadora",
      "Massagem detox corporal",
    ],
  },
  {
    slug: "massagens-faciais",
    icon: Smile,
    title: "Massagens Faciais",
    shortDesc: "Voltadas para a beleza, rejuvenescimento e saúde da pele do rosto com técnicas profissionais.",
    longDesc: "As massagens faciais do Bouquet D'Afetos são tratamentos especializados que combinam técnicas manuais com ferramentas como Gua Sha e rollers de jade para promover o rejuvenescimento e a saúde da pele do rosto. Cada sessão é personalizada de acordo com o tipo de pele e as necessidades específicas de cada cliente. Trabalhamos desde a limpeza profunda até tratamentos anti-idade avançados, passando por drenagem linfática facial e massagens hidratantes. O resultado é uma pele mais luminosa, firme e saudável, com aspecto rejuvenescido e natural.",
    benefits: [
      "Rejuvenescimento natural da pele",
      "Redução de inchaço e olheiras",
      "Limpeza profunda dos poros",
      "Estimulação da produção de colágeno",
      "Melhoria da textura e luminosidade",
      "Hidratação profunda da pele",
      "Efeito lifting natural e imediato",
    ],
    whoCanDo: "Indicadas para todas as pessoas que desejam cuidar da saúde e aparência da pele do rosto. Ideal para quem procura rejuvenescimento, hidratação ou tratamento de imperfeições. Recomenda-se cautela em peles com rosácea ativa, dermatite severa ou queimaduras solares recentes.",
    image: imgFaciais,
    treatments: [
      "Limpeza de pele profunda – remove impurezas e cravos",
      "Massagem facial relaxante",
      "Drenagem linfática facial – reduz inchaço",
      "Lifting facial manual – efeito rejuvenescedor",
      "Massagem com pedras (Gua Sha)",
      "Massagem com rollers de jade",
      "Massagem anti-idade",
      "Massagem hidratante facial",
    ],
  },
];
