// Brazilian DDD (area code) to location mapping
export interface Location {
  ddd: string;
  city: string;
  state: string;
  region: string;
}

export const dddLocations: Record<string, Location> = {
  // São Paulo
  '11': { ddd: '11', city: 'São Paulo', state: 'SP', region: 'Sudeste' },
  '12': { ddd: '12', city: 'São José dos Campos', state: 'SP', region: 'Sudeste' },
  '13': { ddd: '13', city: 'Santos', state: 'SP', region: 'Sudeste' },
  '14': { ddd: '14', city: 'Bauru', state: 'SP', region: 'Sudeste' },
  '15': { ddd: '15', city: 'Sorocaba', state: 'SP', region: 'Sudeste' },
  '16': { ddd: '16', city: 'Ribeirão Preto', state: 'SP', region: 'Sudeste' },
  '17': { ddd: '17', city: 'São José do Rio Preto', state: 'SP', region: 'Sudeste' },
  '18': { ddd: '18', city: 'Presidente Prudente', state: 'SP', region: 'Sudeste' },
  '19': { ddd: '19', city: 'Campinas', state: 'SP', region: 'Sudeste' },
  
  // Rio de Janeiro
  '21': { ddd: '21', city: 'Rio de Janeiro', state: 'RJ', region: 'Sudeste' },
  '22': { ddd: '22', city: 'Campos dos Goytacazes', state: 'RJ', region: 'Sudeste' },
  '24': { ddd: '24', city: 'Volta Redonda', state: 'RJ', region: 'Sudeste' },
  
  // Minas Gerais
  '31': { ddd: '31', city: 'Belo Horizonte', state: 'MG', region: 'Sudeste' },
  '32': { ddd: '32', city: 'Juiz de Fora', state: 'MG', region: 'Sudeste' },
  '33': { ddd: '33', city: 'Governador Valadares', state: 'MG', region: 'Sudeste' },
  '34': { ddd: '34', city: 'Uberlândia', state: 'MG', region: 'Sudeste' },
  '35': { ddd: '35', city: 'Poços de Caldas', state: 'MG', region: 'Sudeste' },
  '37': { ddd: '37', city: 'Divinópolis', state: 'MG', region: 'Sudeste' },
  '38': { ddd: '38', city: 'Montes Claros', state: 'MG', region: 'Sudeste' },
  
  // Espírito Santo
  '27': { ddd: '27', city: 'Vitória', state: 'ES', region: 'Sudeste' },
  '28': { ddd: '28', city: 'Cachoeiro de Itapemirim', state: 'ES', region: 'Sudeste' },
  
  // Paraná
  '41': { ddd: '41', city: 'Curitiba', state: 'PR', region: 'Sul' },
  '42': { ddd: '42', city: 'Ponta Grossa', state: 'PR', region: 'Sul' },
  '43': { ddd: '43', city: 'Londrina', state: 'PR', region: 'Sul' },
  '44': { ddd: '44', city: 'Maringá', state: 'PR', region: 'Sul' },
  '45': { ddd: '45', city: 'Foz do Iguaçu', state: 'PR', region: 'Sul' },
  '46': { ddd: '46', city: 'Francisco Beltrão', state: 'PR', region: 'Sul' },
  
  // Santa Catarina
  '47': { ddd: '47', city: 'Joinville', state: 'SC', region: 'Sul' },
  '48': { ddd: '48', city: 'Florianópolis', state: 'SC', region: 'Sul' },
  '49': { ddd: '49', city: 'Chapecó', state: 'SC', region: 'Sul' },
  
  // Rio Grande do Sul
  '51': { ddd: '51', city: 'Porto Alegre', state: 'RS', region: 'Sul' },
  '53': { ddd: '53', city: 'Pelotas', state: 'RS', region: 'Sul' },
  '54': { ddd: '54', city: 'Caxias do Sul', state: 'RS', region: 'Sul' },
  '55': { ddd: '55', city: 'Santa Maria', state: 'RS', region: 'Sul' },
  
  // Distrito Federal e Goiás
  '61': { ddd: '61', city: 'Brasília', state: 'DF', region: 'Centro-Oeste' },
  '62': { ddd: '62', city: 'Goiânia', state: 'GO', region: 'Centro-Oeste' },
  '64': { ddd: '64', city: 'Rio Verde', state: 'GO', region: 'Centro-Oeste' },
  
  // Mato Grosso
  '65': { ddd: '65', city: 'Cuiabá', state: 'MT', region: 'Centro-Oeste' },
  '66': { ddd: '66', city: 'Rondonópolis', state: 'MT', region: 'Centro-Oeste' },
  
  // Mato Grosso do Sul
  '67': { ddd: '67', city: 'Campo Grande', state: 'MS', region: 'Centro-Oeste' },
  
  // Acre
  '68': { ddd: '68', city: 'Rio Branco', state: 'AC', region: 'Norte' },
  
  // Rondônia
  '69': { ddd: '69', city: 'Porto Velho', state: 'RO', region: 'Norte' },
  
  // Bahia
  '71': { ddd: '71', city: 'Salvador', state: 'BA', region: 'Nordeste' },
  '73': { ddd: '73', city: 'Ilhéus', state: 'BA', region: 'Nordeste' },
  '74': { ddd: '74', city: 'Juazeiro', state: 'BA', region: 'Nordeste' },
  '75': { ddd: '75', city: 'Feira de Santana', state: 'BA', region: 'Nordeste' },
  '77': { ddd: '77', city: 'Vitória da Conquista', state: 'BA', region: 'Nordeste' },
  
  // Sergipe
  '79': { ddd: '79', city: 'Aracaju', state: 'SE', region: 'Nordeste' },
  
  // Pernambuco
  '81': { ddd: '81', city: 'Recife', state: 'PE', region: 'Nordeste' },
  '87': { ddd: '87', city: 'Petrolina', state: 'PE', region: 'Nordeste' },
  
  // Alagoas
  '82': { ddd: '82', city: 'Maceió', state: 'AL', region: 'Nordeste' },
  
  // Paraíba
  '83': { ddd: '83', city: 'João Pessoa', state: 'PB', region: 'Nordeste' },
  
  // Rio Grande do Norte
  '84': { ddd: '84', city: 'Natal', state: 'RN', region: 'Nordeste' },
  
  // Ceará
  '85': { ddd: '85', city: 'Fortaleza', state: 'CE', region: 'Nordeste' },
  '88': { ddd: '88', city: 'Juazeiro do Norte', state: 'CE', region: 'Nordeste' },
  
  // Piauí
  '86': { ddd: '86', city: 'Teresina', state: 'PI', region: 'Nordeste' },
  '89': { ddd: '89', city: 'Picos', state: 'PI', region: 'Nordeste' },
  
  // Maranhão
  '98': { ddd: '98', city: 'São Luís', state: 'MA', region: 'Nordeste' },
  '99': { ddd: '99', city: 'Imperatriz', state: 'MA', region: 'Nordeste' },
  
  // Pará
  '91': { ddd: '91', city: 'Belém', state: 'PA', region: 'Norte' },
  '93': { ddd: '93', city: 'Santarém', state: 'PA', region: 'Norte' },
  '94': { ddd: '94', city: 'Marabá', state: 'PA', region: 'Norte' },
  
  // Amazonas
  '92': { ddd: '92', city: 'Manaus', state: 'AM', region: 'Norte' },
  '97': { ddd: '97', city: 'Tefé', state: 'AM', region: 'Norte' },
  
  // Roraima
  '95': { ddd: '95', city: 'Boa Vista', state: 'RR', region: 'Norte' },
  
  // Amapá
  '96': { ddd: '96', city: 'Macapá', state: 'AP', region: 'Norte' },
  
  // Tocantins
  '63': { ddd: '63', city: 'Palmas', state: 'TO', region: 'Norte' },
};

/**
 * Pre-generated location-specific marketing messages
 * Each message is tailored to the specific city and region characteristics
 */
export const locationMessages: Record<string, string> = {
  // São Paulo
  '11': 'Em São Paulo, paciente some no metrô, mas com nosso tráfego pago ninguém escapa do seu consultório!',
  '12': 'Vale do Paraíba sem tecnologia? Só se for outro planeta! Faça sua clínica bombar com marketing digital de outro mundo.',
  '13': 'Pacientes na Baixada Santista vêm em ondas! Surfe essa maré próspera com estratégias digitais bem humoradas.',
  '14': 'Bauru não é só sanduíche: coloque seu consultório no mapa do centro-oeste paulista com nosso tráfego pago!',
  '15': 'Em Sorocaba, seu faturamento sobe mais rápido que chaminé de fábrica, com nosso marketing digital especial.',
  '16': 'Ribeirão Preto: aqui o agronegócio cresce e sua agenda de pacientes também, com estratégias dignas do interior!',
  '17': 'Em São José do Rio Preto até o calor não espanta paciente. Faça o pessoal te achar antes do sorvete derreter!',
  '18': 'Presidente Prudente: na fronteira o crescimento é certo, e paciente satisfeito é que nem rodovia, só aumenta.',
  '19': 'Em Campinas, o marketing é forte! Multiplique seu consultório com resultados mais rápidos que bandejão da Unicamp.',
  
  // Rio de Janeiro
  '21': 'Clínica no Rio? Seu consultório pode ser mais procurado que praia no sábado! Venha conquistar a Cidade Maravilhosa.',
  '22': 'Campos dos Goytacazes: enche o tanque e o consultório com nosso combustível digital para novos pacientes!',
  '24': 'Em Volta Redonda o aço é forte, mas sua presença digital pode ser ainda mais – venha derreter a concorrência.',
  
  // Minas Gerais
  '31': 'Em BH, pão de queijo pode faltar, paciente nunca! Domine o mercado com tráfego pago crocante.',
  '32': 'Juiz de Fora é próspera, mas sua clínica será ainda mais famosa que o famoso pastel da feira!',
  '33': 'Governador Valadares: faça sua clínica decolar igual vaga de trem pro Vale do Rio Doce.',
  '34': 'Uberlândia: triangule o sucesso e preencha sua agenda com pacientes famintos (por sorrisos novos).',
  '35': 'Poços de Caldas, cidade das águas, mas paciente aqui só flui pro seu consultório.',
  '37': 'Divinópolis: sua agenda cheia no ritmo acelerado do Centro-Oeste mineiro – sem precisar de samba-enredo!',
  '38': 'Em Montes Claros, sua concorrência vai ficar abismada com tanto paciente sorrindo.',
  
  // Espírito Santo
  '27': 'Vitória na capital do Espírito Santo mesmo antes de atender! Traga o Porto pra sua porta com tráfego pago.',
  '28': 'Cachoeiro: no Sul do ES, só não pode faltar paciente no seu consultório – o resto a gente resolve no digital.',
  
  // Paraná
  '41': 'Curitiba é fria, mas o marketing aqui esquenta qualquer consultório! Venha dominar o polo das araucárias.',
  '42': 'Em Ponta Grossa só perde paciente quem escorregar na estratégia. Vem com a gente!',
  '43': 'Londrina pode ser universitária, mas seu marketing tem que ser nota 10: traga a galera pro seu consultório.',
  '44': 'Maringá: cresça mais rápido que sombra de árvore no Bosque 2, com tráfego pago do bom.',
  '45': 'Foz do Iguaçu: a concorrência cai das cataratas com seu marketing digital turbinado.',
  '46': 'Em Francisco Beltrão, só cai quem não tem estratégia. Cresça firme no sudoeste!',
  
  // Santa Catarina
  '47': 'Joinville: sua clínica cheia até em dia de chuva! O marketing é a dança dos resultados.',
  '48': 'Floripa atrai turistas, você atrai pacientes – seja a praia favorita dos sorrisos catarinenses.',
  '49': 'Chapecó: agro é pop, e clínica cheia também! Cresça no oeste com estratégia e bom humor.',
  
  // Rio Grande do Sul
  '51': 'Porto Alegre – gaúcho gosta de chimarrão e novidade. Seu consultório vai virar assunto de churrasco!',
  '53': 'Pelotas tem doce famoso, mas sua clínica pode ser o próximo meme da cidade!',
  '54': 'Caxias do Sul: faça fila de pacientes igual a galera faz na Festa da Uva.',
  '55': 'Santa Maria, centro do RS: seu consultório no topo! Só não vale cobrar carreteiro.',
  
  // Distrito Federal e Goiás
  '61': 'Brasília: só não garantimos fila no Congresso, mas no seu consultório, pode apostar!',
  '62': 'Goiânia: seu digital bombando mais que show sertanejo na pecuária!',
  '64': 'Rio Verde: coloque sua clínica no topo do agro com marketing que brota paciente.',
  
  // Mato Grosso
  '65': 'Cuiabá: com nosso marketing, calor só na sala de espera cheia!',
  '66': 'Rondonópolis: conquiste mais pacientes que caminhão na BR.',
  
  // Mato Grosso do Sul
  '67': 'Campo Grande: multiplique pacientes como capivaras no parque!',
  
  // Acre
  '68': 'Rio Branco: chega de sumir do mapa, faça sua clínica aparecer pra valer com marketing irreverente.',
  
  // Rondônia
  '69': 'Porto Velho: paciente na sua porta como barco no Madeira, sempre chegando.',
  
  // Bahia
  '71': 'Salvador: traga axé pra agenda da sua clínica com marketing digital arretado!',
  '73': 'Ilhéus: coco, cacau e clínica cheia? Só com estratégia boa e gosto de quero mais.',
  '74': 'Juazeiro: faça chover paciente no São Francisco com nosso tráfego pago.',
  '75': 'Feira de Santana: segundo maior, mas com marketing de primeira – não fique fora da feira!',
  '77': 'Vitória da Conquista: conquiste pacientes igual vitória do Bode, só alegria!',
  
  // Sergipe
  '79': 'Aracaju: menor capital, mas seu consultório pode fazer barulho igual trio na orla!',
  
  // Pernambuco
  '81': 'Recife: coloque sua clínica no frevo do marketing, só alegria no carnaval de pacientes!',
  '87': 'Petrolina: paciente brota igual uva, com estratégias doces e certeiras.',
  
  // Alagoas
  '82': 'Maceió: clínica cheia igual praia bonita, só com marketing digital à beira-mar.',
  
  // Paraíba
  '83': 'João Pessoa: além de por do sol bonito, clínica com agenda cheia. Tudo com tráfego pago divertido.',
  
  // Rio Grande do Norte
  '84': 'Natal: paciente certo é aquele que navega melhor que buggy nas dunas, sempre chegando à sua clínica.',
  
  // Ceará
  '85': 'Fortaleza: traga energia de praia lotada pro seu consultório, faça sucesso na terra do sol!',
  '88': 'Juazeiro do Norte: cliente devoto e agenda abençoada, só com digital bem humorado.',
  
  // Piauí
  '86': 'Teresina: única capital do Nordeste sem praia, mas com paciente de sobra – vem de marketing divertido.',
  '89': 'Picos: segundo maior não precisa ser segundo em nada, só se for número de pacientes!',
  
  // Maranhão
  '98': 'São Luís: multiplique pacientes como bumba meu boi: colorido e animado, só alegria!',
  '99': 'Imperatriz: traga poder de imperador pra sua agenda, domine o Maranhão com nosso marketing.',
  
  // Pará
  '91': 'Belém: seu consultório bombando mais que açaí no Ver-o-Peso!',
  '93': 'Santarém: turismo e paciente, tudo junto e misturado no Oeste paraense.',
  '94': 'Marabá: aqui o ouro é paciente novo, conquiste a mina de ouro com tráfego pago.',
  
  // Amazonas
  '92': 'Manaus: atraia pacientes na velocidade do rio, sempre lotando seu consultório na Amazônia.',
  '97': 'Tefé: paciente emergente é o novo peixe do dia, só pescando com estratégia digital.',
  
  // Roraima
  '95': 'Boa Vista: tão longe, mas paciente pertinho. Venha brilhar com a clínica mais nortista.',
  
  // Amapá
  '96': 'Macapá: de um lado Brasil, do outro Guiana – mas paciente certo só vem com marketing de respeito.',
  
  // Tocantins
  '63': 'Palmas: agenda mais quente que a cidade! Coloque fogo no seu crescimento.',
};

/**
 * Extract DDD from phone number
 * @param phone Phone number in format "+55 (XX) XXXXX-XXXX"
 * @returns DDD (area code) as string or null
 */
export const extractDDD = (phone: string): string | null => {
  // Match pattern: (XX) where XX is 2 digits
  const match = phone.match(/\((\d{2})\)/);
  return match ? match[1] : null;
};

/**
 * Get pre-generated marketing message for a DDD
 * @param ddd Area code as string
 * @returns Marketing message or null if not found
 */
export const getLocationMessage = (ddd: string): string | null => {
  return locationMessages[ddd] || null;
};

/**
 * Generate location-specific marketing message using AI
 * @param phone Phone number with DDD
 * @param onChunk Callback function to handle each text chunk
 * @returns Promise that resolves when streaming is complete
 */
export const generateLocationMessage = async (
  phone: string,
  onChunk: (text: string) => void
): Promise<void> => {
  const ddd = extractDDD(phone);

  if (!ddd) {
    throw new Error('Could not extract DDD from phone number');
  }

  onChunk(getLocationMessage(ddd) || '');
};

