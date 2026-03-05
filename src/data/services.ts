import {
  Sparkles,
  Syringe,
  Droplets,
  Heart,
  Flower2,
  Star,
  Gem,
  ShieldCheck,
  Palette,
} from "lucide-react";

import imgMicroagulhamento from "@/assets/services/microagulhamento.jpg";
import imgBotox from "@/assets/services/botox.jpg";
import imgLimpezaDePele from "@/assets/services/limpeza-de-pele.jpg";
import imgPeim from "@/assets/services/peim.jpg";
import imgIntradermoterapia from "@/assets/services/intradermoterapia.jpg";
import imgMesoterapia from "@/assets/services/mesoterapia.jpg";
import imgPreenchimentoFacial from "@/assets/services/preenchimento-facial.jpg";
import imgBioestimulador from "@/assets/services/bioestimulador-de-colageno.jpg";
import imgCamuflagem from "@/assets/services/camuflagem-regenerativa.jpg";

export interface ServiceData {
  slug: string;
  icon: typeof Sparkles;
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  whoCanDo: string;
  image: string;
}

export const services: ServiceData[] = [
  {
    slug: "microagulhamento",
    icon: Sparkles,
    title: "Microagulhamento",
    shortDesc: "Estimula o organismo a produzir colágeno e elastina para firmeza e renovação da pele.",
    longDesc: "O microagulhamento é um procedimento estético minimamente invasivo que utiliza microagulhas para criar microperfurações controladas na pele. Essas micro-lesões estimulam o processo natural de cicatrização do corpo, promovendo a produção de colágeno e elastina — proteínas essenciais para manter a pele firme, lisa e jovem. O tratamento é altamente eficaz para tratar cicatrizes de acne, rugas finas, poros dilatados, manchas e estrias. Os resultados são progressivos e naturais, com melhora visível da textura e luminosidade da pele após as primeiras sessões.",
    benefits: [
      "Estimula a produção natural de colágeno e elastina",
      "Reduz cicatrizes de acne e marcas na pele",
      "Melhora a textura e uniformidade da pele",
      "Diminui poros dilatados",
      "Atenua linhas finas e rugas",
      "Aumenta a absorção de ativos cosméticos",
      "Resultados naturais e progressivos",
    ],
    whoCanDo: "O microagulhamento é indicado para homens e mulheres adultos que desejam melhorar a qualidade da pele. É ideal para quem possui cicatrizes de acne, rugas finas, poros dilatados, manchas ou estrias. Não é recomendado para gestantes, pessoas com infecções ativas na pele, queloides ou doenças autoimunes sem acompanhamento médico.",
    image: imgMicroagulhamento,
  },
  {
    slug: "botox",
    icon: Syringe,
    title: "Botox",
    shortDesc: "Tratamento estético rápido e seguro que deixa a aparência mais jovem e natural.",
    longDesc: "O Botox (toxina botulínica) é um dos procedimentos estéticos mais realizados no mundo. Ele age relaxando temporariamente os músculos faciais responsáveis pelas rugas de expressão, como as linhas da testa, pés de galinha e rugas entre as sobrancelhas. O procedimento é rápido, praticamente indolor e não requer tempo de recuperação. Os resultados começam a aparecer em 3 a 7 dias e duram de 4 a 6 meses, proporcionando uma aparência rejuvenescida e natural, sem perder a expressividade do rosto.",
    benefits: [
      "Suaviza rugas e linhas de expressão",
      "Procedimento rápido (15-30 minutos)",
      "Sem necessidade de repouso pós-procedimento",
      "Resultados naturais sem perder expressividade",
      "Efeito preventivo contra novas rugas",
      "Pode tratar hiperidrose (suor excessivo)",
      "Resultados visíveis em poucos dias",
    ],
    whoCanDo: "Indicado para adultos a partir dos 25 anos que desejam prevenir ou tratar rugas de expressão. Ideal para quem busca um procedimento rápido e sem tempo de recuperação. Contraindicado para gestantes, lactantes, pessoas com doenças neuromusculares e alergia aos componentes da fórmula.",
    image: imgBotox,
  },
  {
    slug: "limpeza-de-pele",
    icon: Droplets,
    title: "Limpeza de Pele",
    shortDesc: "Indicada para todos os tipos de pele, mantendo-a equilibrada e bonita.",
    longDesc: "A limpeza de pele profissional é um tratamento essencial para a saúde e beleza da pele. O procedimento inclui higienização, esfoliação, extração de comedões (cravos) e miliums, tonificação e hidratação profunda. Utilizamos produtos de alta qualidade e técnicas avançadas que respeitam a sensibilidade de cada tipo de pele. A limpeza de pele regular ajuda a prevenir acne, controlar a oleosidade, remover células mortas e impurezas, deixando a pele com aspecto saudável, luminoso e renovado.",
    benefits: [
      "Remove cravos, miliums e impurezas profundas",
      "Desobstrui os poros para melhor respiração da pele",
      "Controla a oleosidade e previne acne",
      "Renova e uniformiza a textura da pele",
      "Prepara a pele para melhor absorção de cosméticos",
      "Estimula a circulação sanguínea local",
      "Proporciona aspecto saudável e luminoso",
    ],
    whoCanDo: "A limpeza de pele é indicada para todas as pessoas, independentemente do tipo de pele — oleosa, seca, mista ou sensível. É recomendada a partir da adolescência. Recomenda-se cautela em peles com rosácea ativa, dermatite severa ou queimaduras solares recentes.",
    image: imgLimpezaDePele,
  },
  {
    slug: "peim",
    icon: Heart,
    title: "PEIM",
    shortDesc: "Tratamento estético para reduzir ou eliminar vasinhos aparentes nas pernas.",
    longDesc: "O PEIM (Programa Estético para Insuficiência Microcirculatória) é um tratamento inovador e não invasivo voltado para o tratamento de microvasos (vasinhos) nas pernas. Diferente da escleroterapia convencional, o PEIM utiliza uma técnica de aplicação específica com substâncias que promovem a melhora da microcirculação local, reduzindo progressivamente os vasinhos sem necessidade de procedimentos cirúrgicos. O tratamento é seguro, eficaz e proporciona resultados estéticos excelentes, devolvendo a confiança para usar roupas que exponham as pernas.",
    benefits: [
      "Reduz e elimina vasinhos aparentes",
      "Procedimento não cirúrgico e minimamente invasivo",
      "Melhora a circulação sanguínea local",
      "Sem necessidade de afastamento das atividades",
      "Resultados progressivos e duradouros",
      "Tratamento seguro e bem tolerado",
      "Melhora a autoestima e confiança",
    ],
    whoCanDo: "Indicado para homens e mulheres que apresentam microvasos (vasinhos) nas pernas e desejam melhorar a aparência. Não é recomendado para gestantes, pessoas com trombose venosa profunda ativa, infecções cutâneas no local ou alergia aos componentes utilizados.",
    image: imgPeim,
  },
  {
    slug: "intradermoterapia",
    icon: Flower2,
    title: "Intradermoterapia",
    shortDesc: "Pele mais hidratada, firme e luminosa. Estimula crescimento capilar.",
    longDesc: "A intradermoterapia é uma técnica que consiste na aplicação de substâncias bioativas diretamente na camada dérmica da pele através de microinjeções. No tratamento facial, promove hidratação profunda, firmeza e luminosidade, com um efeito glow imediato. No tratamento capilar, estimula o crescimento dos fios, fortalece os folículos e combate a queda. Os ativos são personalizados de acordo com a necessidade de cada paciente, garantindo resultados eficazes e específicos para cada caso.",
    benefits: [
      "Hidratação profunda e duradoura da pele",
      "Efeito glow e luminosidade imediata",
      "Estimula o crescimento capilar",
      "Fortalece os folículos e reduz a queda",
      "Melhora a firmeza e elasticidade",
      "Tratamento personalizado por paciente",
      "Resultados visíveis desde a primeira sessão",
    ],
    whoCanDo: "Indicada para pessoas que desejam melhorar a qualidade da pele facial ou tratar queda capilar. Ideal para quem busca hidratação profunda, luminosidade ou fortalecimento dos cabelos. Contraindicada para gestantes, pessoas com infecções no local, alergia aos componentes ou distúrbios de coagulação não controlados.",
    image: imgIntradermoterapia,
  },
  {
    slug: "mesoterapia",
    icon: Star,
    title: "Mesoterapia",
    shortDesc: "Trata flacidez, celulite, gordura localizada e rejuvenescimento facial.",
    longDesc: "A mesoterapia é um tratamento versátil que utiliza microinjeções de vitaminas, aminoácidos, minerais e medicamentos diretamente na mesodérmica (camada média da pele). É amplamente utilizada para tratar celulite, gordura localizada, flacidez e para rejuvenescimento facial. As substâncias injetadas atuam diretamente no local desejado, potencializando os resultados com dosagens menores. O tratamento é personalizado, combinando diferentes ativos de acordo com a necessidade de cada paciente, proporcionando resultados progressivos e naturais.",
    benefits: [
      "Reduz celulite e gordura localizada",
      "Combate a flacidez corporal e facial",
      "Promove rejuvenescimento da pele",
      "Atuação direta no local tratado",
      "Protocolo personalizado por paciente",
      "Melhora a circulação e drenagem linfática",
      "Resultados progressivos e duradouros",
    ],
    whoCanDo: "A mesoterapia é indicada para adultos que desejam tratar celulite, gordura localizada, flacidez ou rejuvenescer a pele. Não é recomendada para gestantes, lactantes, pessoas com diabetes descompensada, doenças cardíacas graves ou alergia aos componentes utilizados.",
    image: imgMesoterapia,
  },
  {
    slug: "preenchimento-facial",
    icon: Gem,
    title: "Preenchimento Facial",
    shortDesc: "Restaura volume, suaviza rugas e realça contornos com ácido hialurônico.",
    longDesc: "O preenchimento facial com ácido hialurônico é um procedimento estético que visa restaurar o volume facial perdido com o envelhecimento, suavizar rugas profundas e realçar contornos do rosto. O ácido hialurônico é uma substância naturalmente presente no nosso organismo, o que torna o procedimento extremamente seguro e biocompatível. Pode ser aplicado nos lábios, maçãs do rosto, queixo, mandíbula e sulcos nasolabiais, proporcionando resultados imediatos, naturais e harmoniosos. Os efeitos duram de 12 a 18 meses.",
    benefits: [
      "Restaura volume facial perdido com a idade",
      "Suaviza rugas e sulcos profundos",
      "Realça contornos do rosto harmoniosamente",
      "Resultados imediatos e naturais",
      "Substância biocompatível e segura",
      "Procedimento rápido com pouco desconforto",
      "Efeitos duradouros (12-18 meses)",
    ],
    whoCanDo: "Indicado para adultos que desejam restaurar volume facial, suavizar rugas profundas ou harmonizar os contornos do rosto. Ideal a partir dos 30 anos ou quando há perda de volume evidente. Contraindicado para gestantes, lactantes, pessoas com infecções ativas no local, doenças autoimunes ou alergia ao ácido hialurônico.",
    image: imgPreenchimentoFacial,
  },
  {
    slug: "bioestimulador-de-colageno",
    icon: ShieldCheck,
    title: "Bioestimulador de Colágeno",
    shortDesc: "Melhora firmeza e elasticidade combatendo flacidez de forma natural.",
    longDesc: "O bioestimulador de colágeno é um tratamento que estimula a produção natural de colágeno pelo próprio organismo. Diferente do preenchimento, que adiciona volume imediatamente, o bioestimulador age de forma gradual, melhorando a qualidade da pele ao longo do tempo. As substâncias utilizadas (como ácido poli-L-lático ou hidroxiapatita de cálcio) são injetadas na derme profunda, estimulando os fibroblastos a produzirem novo colágeno. O resultado é uma pele mais firme, elástica e com aspecto rejuvenescido de forma natural e progressiva.",
    benefits: [
      "Estimula a produção natural de colágeno",
      "Combate flacidez de forma progressiva",
      "Melhora firmeza e elasticidade da pele",
      "Resultados naturais e duradouros (até 2 anos)",
      "Tratamento do rosto, pescoço, colo e mãos",
      "Melhora a qualidade e textura da pele",
      "Efeito rejuvenescedor gradual",
    ],
    whoCanDo: "Indicado para homens e mulheres a partir dos 30 anos que apresentam sinais de flacidez e desejam melhorar a firmeza da pele. Ideal para quem busca resultados naturais e progressivos. Contraindicado para gestantes, lactantes, pessoas com doenças autoimunes ativas ou infecções no local de aplicação.",
    image: imgBioestimulador,
  },
  {
    slug: "camuflagem-regenerativa",
    icon: Palette,
    title: "Camuflagem Regenerativa",
    shortDesc: "Microagulhamento e pigmentação para estrias, cicatrizes e manchas.",
    longDesc: "A camuflagem regenerativa é uma técnica inovadora que combina microagulhamento com pigmentação para tratar estrias, cicatrizes e manchas na pele. O procedimento utiliza pigmentos biocompatíveis que são implantados na camada dérmica, camuflando imperfeições enquanto estimula simultaneamente a regeneração natural da pele. O resultado é uma pele com aparência uniforme e natural, devolvendo a confiança e o bem-estar. O tratamento é personalizado de acordo com o tom de pele e a condição a ser tratada, garantindo resultados harmoniosos.",
    benefits: [
      "Camufla estrias brancas e vermelhas",
      "Disfarça cicatrizes cirúrgicas e de acne",
      "Uniformiza o tom da pele em manchas",
      "Estimula a regeneração natural da pele",
      "Resultados naturais e de longa duração",
      "Pigmentos biocompatíveis e seguros",
      "Melhora significativa da autoestima",
    ],
    whoCanDo: "Indicada para pessoas com estrias, cicatrizes ou manchas que desejam melhorar a aparência da pele. Ideal para quem já tentou outros tratamentos sem resultados satisfatórios. Contraindicada para gestantes, pessoas com queloides ativos, infecções cutâneas no local ou alergia aos pigmentos utilizados.",
    image: imgCamuflagem,
  },
];
