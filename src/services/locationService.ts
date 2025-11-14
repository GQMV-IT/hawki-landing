// Location interface with marketing message
export interface Location {
  ddd: string;
  city: string;
  state: string;
  region: string;
  country: string;
  message: string;
}

/**
 * Comprehensive location data organized by country code
 * Contains location info and marketing messages for each area code
 */
export const locationsByCountry: Record<string, Record<string, Location>> = {
  // Brazil (+55)
  '55': {
    // São Paulo
    '11': { ddd: '11', city: 'São Paulo', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Em São Paulo, paciente some no metrô, mas com nosso tráfego pago ninguém escapa do seu consultório!' },
    '12': { ddd: '12', city: 'São José dos Campos', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Vale do Paraíba sem tecnologia? Só se for outro planeta! Faça sua clínica bombar com marketing digital de outro mundo.' },
    '13': { ddd: '13', city: 'Santos', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Pacientes na Baixada Santista vêm em ondas! Surfe essa maré próspera com estratégias digitais bem humoradas.' },
    '14': { ddd: '14', city: 'Bauru', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Bauru não é só sanduíche: coloque seu consultório no mapa do centro-oeste paulista com nosso tráfego pago!' },
    '15': { ddd: '15', city: 'Sorocaba', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Em Sorocaba, seu faturamento sobe mais rápido que chaminé de fábrica, com nosso marketing digital especial.' },
    '16': { ddd: '16', city: 'Ribeirão Preto', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Ribeirão Preto: aqui o agronegócio cresce e sua agenda de pacientes também, com estratégias dignas do interior!' },
    '17': { ddd: '17', city: 'São José do Rio Preto', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Em São José do Rio Preto até o calor não espanta paciente. Faça o pessoal te achar antes do sorvete derreter!' },
    '18': { ddd: '18', city: 'Presidente Prudente', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Presidente Prudente: na fronteira o crescimento é certo, e paciente satisfeito é que nem rodovia, só aumenta.' },
    '19': { ddd: '19', city: 'Campinas', state: 'SP', region: 'Sudeste', country: 'Brasil', message: 'Em Campinas, o marketing é forte! Multiplique seu consultório com resultados mais rápidos que bandejão da Unicamp.' },
    
    // Rio de Janeiro
    '21': { ddd: '21', city: 'Rio de Janeiro', state: 'RJ', region: 'Sudeste', country: 'Brasil', message: 'Clínica no Rio? Seu consultório pode ser mais procurado que praia no sábado! Venha conquistar a Cidade Maravilhosa.' },
    '22': { ddd: '22', city: 'Campos dos Goytacazes', state: 'RJ', region: 'Sudeste', country: 'Brasil', message: 'Campos dos Goytacazes: enche o tanque e o consultório com nosso combustível digital para novos pacientes!' },
    '24': { ddd: '24', city: 'Volta Redonda', state: 'RJ', region: 'Sudeste', country: 'Brasil', message: 'Em Volta Redonda o aço é forte, mas sua presença digital pode ser ainda mais – venha derreter a concorrência.' },
  
    // Minas Gerais
    '31': { ddd: '31', city: 'Belo Horizonte', state: 'MG', region: 'Sudeste', country: 'Brasil', message: 'Em BH, pão de queijo pode faltar, paciente nunca! Domine o mercado com tráfego pago crocante.' },
    '32': { ddd: '32', city: 'Juiz de Fora', state: 'MG', region: 'Sudeste', country: 'Brasil', message: 'Juiz de Fora é próspera, mas sua clínica será ainda mais famosa que o famoso pastel da feira!' },
    '33': { ddd: '33', city: 'Governador Valadares', state: 'MG', region: 'Sudeste', country: 'Brasil', message: 'Governador Valadares: faça sua clínica decolar igual vaga de trem pro Vale do Rio Doce.' },
    '34': { ddd: '34', city: 'Uberlândia', state: 'MG', region: 'Sudeste', country: 'Brasil', message: 'Uberlândia: triangule o sucesso e preencha sua agenda com pacientes famintos (por sorrisos novos).' },
    '35': { ddd: '35', city: 'Poços de Caldas', state: 'MG', region: 'Sudeste', country: 'Brasil', message: 'Poços de Caldas, cidade das águas, mas paciente aqui só flui pro seu consultório.' },
    '37': { ddd: '37', city: 'Divinópolis', state: 'MG', region: 'Sudeste', country: 'Brasil', message: 'Divinópolis: sua agenda cheia no ritmo acelerado do Centro-Oeste mineiro – sem precisar de samba-enredo!' },
    '38': { ddd: '38', city: 'Montes Claros', state: 'MG', region: 'Sudeste', country: 'Brasil', message: 'Em Montes Claros, sua concorrência vai ficar abismada com tanto paciente sorrindo.' },
    
    // Espírito Santo
    '27': { ddd: '27', city: 'Vitória', state: 'ES', region: 'Sudeste', country: 'Brasil', message: 'Vitória na capital do Espírito Santo mesmo antes de atender! Traga o Porto pra sua porta com tráfego pago.' },
    '28': { ddd: '28', city: 'Cachoeiro de Itapemirim', state: 'ES', region: 'Sudeste', country: 'Brasil', message: 'Cachoeiro: no Sul do ES, só não pode faltar paciente no seu consultório – o resto a gente resolve no digital.' },
    
    // Paraná
    '41': { ddd: '41', city: 'Curitiba', state: 'PR', region: 'Sul', country: 'Brasil', message: 'Curitiba é fria, mas o marketing aqui esquenta qualquer consultório! Venha dominar o polo das araucárias.' },
    '42': { ddd: '42', city: 'Ponta Grossa', state: 'PR', region: 'Sul', country: 'Brasil', message: 'Em Ponta Grossa só perde paciente quem escorregar na estratégia. Vem com a gente!' },
    '43': { ddd: '43', city: 'Londrina', state: 'PR', region: 'Sul', country: 'Brasil', message: 'Londrina pode ser universitária, mas seu marketing tem que ser nota 10: traga a galera pro seu consultório.' },
    '44': { ddd: '44', city: 'Maringá', state: 'PR', region: 'Sul', country: 'Brasil', message: 'Maringá: cresça mais rápido que sombra de árvore no Bosque 2, com tráfego pago do bom.' },
    '45': { ddd: '45', city: 'Foz do Iguaçu', state: 'PR', region: 'Sul', country: 'Brasil', message: 'Foz do Iguaçu: a concorrência cai das cataratas com seu marketing digital turbinado.' },
    '46': { ddd: '46', city: 'Francisco Beltrão', state: 'PR', region: 'Sul', country: 'Brasil', message: 'Em Francisco Beltrão, só cai quem não tem estratégia. Cresça firme no sudoeste!' },
    
    // Santa Catarina
    '47': { ddd: '47', city: 'Joinville', state: 'SC', region: 'Sul', country: 'Brasil', message: 'Joinville: sua clínica cheia até em dia de chuva! O marketing é a dança dos resultados.' },
    '48': { ddd: '48', city: 'Florianópolis', state: 'SC', region: 'Sul', country: 'Brasil', message: 'Floripa atrai turistas, você atrai pacientes – seja a praia favorita dos sorrisos catarinenses.' },
    '49': { ddd: '49', city: 'Chapecó', state: 'SC', region: 'Sul', country: 'Brasil', message: 'Chapecó: agro é pop, e clínica cheia também! Cresça no oeste com estratégia e bom humor.' },
    
    // Rio Grande do Sul
    '51': { ddd: '51', city: 'Porto Alegre', state: 'RS', region: 'Sul', country: 'Brasil', message: 'Porto Alegre – gaúcho gosta de chimarrão e novidade. Seu consultório vai virar assunto de churrasco!' },
    '53': { ddd: '53', city: 'Pelotas', state: 'RS', region: 'Sul', country: 'Brasil', message: 'Pelotas tem doce famoso, mas sua clínica pode ser o próximo meme da cidade!' },
    '54': { ddd: '54', city: 'Caxias do Sul', state: 'RS', region: 'Sul', country: 'Brasil', message: 'Caxias do Sul: faça fila de pacientes igual a galera faz na Festa da Uva.' },
    '55': { ddd: '55', city: 'Santa Maria', state: 'RS', region: 'Sul', country: 'Brasil', message: 'Santa Maria, centro do RS: seu consultório no topo! Só não vale cobrar carreteiro.' },
    
    // Distrito Federal e Goiás
    '61': { ddd: '61', city: 'Brasília', state: 'DF', region: 'Centro-Oeste', country: 'Brasil', message: 'Brasília: só não garantimos fila no Congresso, mas no seu consultório, pode apostar!' },
    '62': { ddd: '62', city: 'Goiânia', state: 'GO', region: 'Centro-Oeste', country: 'Brasil', message: 'Goiânia: seu digital bombando mais que show sertanejo na pecuária!' },
    '63': { ddd: '63', city: 'Palmas', state: 'TO', region: 'Norte', country: 'Brasil', message: 'Palmas: agenda mais quente que a cidade! Coloque fogo no seu crescimento.' },
    '64': { ddd: '64', city: 'Rio Verde', state: 'GO', region: 'Centro-Oeste', country: 'Brasil', message: 'Rio Verde: coloque sua clínica no topo do agro com marketing que brota paciente.' },
    
    // Mato Grosso
    '65': { ddd: '65', city: 'Cuiabá', state: 'MT', region: 'Centro-Oeste', country: 'Brasil', message: 'Cuiabá: com nosso marketing, calor só na sala de espera cheia!' },
    '66': { ddd: '66', city: 'Rondonópolis', state: 'MT', region: 'Centro-Oeste', country: 'Brasil', message: 'Rondonópolis: conquiste mais pacientes que caminhão na BR.' },
    
    // Mato Grosso do Sul
    '67': { ddd: '67', city: 'Campo Grande', state: 'MS', region: 'Centro-Oeste', country: 'Brasil', message: 'Campo Grande: multiplique pacientes como capivaras no parque!' },
    
    // Acre
    '68': { ddd: '68', city: 'Rio Branco', state: 'AC', region: 'Norte', country: 'Brasil', message: 'Rio Branco: chega de sumir do mapa, faça sua clínica aparecer pra valer com marketing irreverente.' },
    
    // Rondônia
    '69': { ddd: '69', city: 'Porto Velho', state: 'RO', region: 'Norte', country: 'Brasil', message: 'Porto Velho: paciente na sua porta como barco no Madeira, sempre chegando.' },
    
    // Bahia
    '71': { ddd: '71', city: 'Salvador', state: 'BA', region: 'Nordeste', country: 'Brasil', message: 'Salvador: traga axé pra agenda da sua clínica com marketing digital arretado!' },
    '73': { ddd: '73', city: 'Ilhéus', state: 'BA', region: 'Nordeste', country: 'Brasil', message: 'Ilhéus: coco, cacau e clínica cheia? Só com estratégia boa e gosto de quero mais.' },
    '74': { ddd: '74', city: 'Juazeiro', state: 'BA', region: 'Nordeste', country: 'Brasil', message: 'Juazeiro: faça chover paciente no São Francisco com nosso tráfego pago.' },
    '75': { ddd: '75', city: 'Feira de Santana', state: 'BA', region: 'Nordeste', country: 'Brasil', message: 'Feira de Santana: segundo maior, mas com marketing de primeira – não fique fora da feira!' },
    '77': { ddd: '77', city: 'Vitória da Conquista', state: 'BA', region: 'Nordeste', country: 'Brasil', message: 'Vitória da Conquista: conquiste pacientes igual vitória do Bode, só alegria!' },
    
    // Sergipe
    '79': { ddd: '79', city: 'Aracaju', state: 'SE', region: 'Nordeste', country: 'Brasil', message: 'Aracaju: menor capital, mas seu consultório pode fazer barulho igual trio na orla!' },
    
    // Pernambuco
    '81': { ddd: '81', city: 'Recife', state: 'PE', region: 'Nordeste', country: 'Brasil', message: 'Recife: coloque sua clínica no frevo do marketing, só alegria no carnaval de pacientes!' },
    '82': { ddd: '82', city: 'Maceió', state: 'AL', region: 'Nordeste', country: 'Brasil', message: 'Maceió: clínica cheia igual praia bonita, só com marketing digital à beira-mar.' },
    '83': { ddd: '83', city: 'João Pessoa', state: 'PB', region: 'Nordeste', country: 'Brasil', message: 'João Pessoa: além de por do sol bonito, clínica com agenda cheia. Tudo com tráfego pago divertido.' },
    '84': { ddd: '84', city: 'Natal', state: 'RN', region: 'Nordeste', country: 'Brasil', message: 'Natal: paciente certo é aquele que navega melhor que buggy nas dunas, sempre chegando à sua clínica.' },
    '85': { ddd: '85', city: 'Fortaleza', state: 'CE', region: 'Nordeste', country: 'Brasil', message: 'Fortaleza: traga energia de praia lotada pro seu consultório, faça sucesso na terra do sol!' },
    '86': { ddd: '86', city: 'Teresina', state: 'PI', region: 'Nordeste', country: 'Brasil', message: 'Teresina: única capital do Nordeste sem praia, mas com paciente de sobra – vem de marketing divertido.' },
    '87': { ddd: '87', city: 'Petrolina', state: 'PE', region: 'Nordeste', country: 'Brasil', message: 'Petrolina: paciente brota igual uva, com estratégias doces e certeiras.' },
    '88': { ddd: '88', city: 'Juazeiro do Norte', state: 'CE', region: 'Nordeste', country: 'Brasil', message: 'Juazeiro do Norte: cliente devoto e agenda abençoada, só com digital bem humorado.' },
    '89': { ddd: '89', city: 'Picos', state: 'PI', region: 'Nordeste', country: 'Brasil', message: 'Picos: segundo maior não precisa ser segundo em nada, só se for número de pacientes!' },
    
    // Pará
    '91': { ddd: '91', city: 'Belém', state: 'PA', region: 'Norte', country: 'Brasil', message: 'Belém: seu consultório bombando mais que açaí no Ver-o-Peso!' },
    '92': { ddd: '92', city: 'Manaus', state: 'AM', region: 'Norte', country: 'Brasil', message: 'Manaus: atraia pacientes na velocidade do rio, sempre lotando seu consultório na Amazônia.' },
    '93': { ddd: '93', city: 'Santarém', state: 'PA', region: 'Norte', country: 'Brasil', message: 'Santarém: turismo e paciente, tudo junto e misturado no Oeste paraense.' },
    '94': { ddd: '94', city: 'Marabá', state: 'PA', region: 'Norte', country: 'Brasil', message: 'Marabá: aqui o ouro é paciente novo, conquiste a mina de ouro com tráfego pago.' },
    '95': { ddd: '95', city: 'Boa Vista', state: 'RR', region: 'Norte', country: 'Brasil', message: 'Boa Vista: tão longe, mas paciente pertinho. Venha brilhar com a clínica mais nortista.' },
    '96': { ddd: '96', city: 'Macapá', state: 'AP', region: 'Norte', country: 'Brasil', message: 'Macapá: de um lado Brasil, do outro Guiana – mas paciente certo só vem com marketing de respeito.' },
    '97': { ddd: '97', city: 'Tefé', state: 'AM', region: 'Norte', country: 'Brasil', message: 'Tefé: paciente emergente é o novo peixe do dia, só pescando com estratégia digital.' },
    
    // Maranhão
    '98': { ddd: '98', city: 'São Luís', state: 'MA', region: 'Nordeste', country: 'Brasil', message: 'São Luís: multiplique pacientes como bumba meu boi: colorido e animado, só alegria!' },
    '99': { ddd: '99', city: 'Imperatriz', state: 'MA', region: 'Nordeste', country: 'Brasil', message: 'Imperatriz: traga poder de imperador pra sua agenda, domine o Maranhão com nosso marketing.' },
  },
  // Add more countries here as needed
  // '1': { ... }, // USA/Canada
  // '351': { ... }, // Portugal
};

/**
 * Backward compatibility: Legacy location map (Brazil only)
 * @deprecated Use locationsByCountry instead
 */
export const dddLocations: Record<string, Omit<Location, 'message'>> = Object.entries(locationsByCountry['55']).reduce((acc, [ddd, location]) => {
  const { message, ...rest } = location;
  acc[ddd] = rest;
  return acc;
}, {} as Record<string, Omit<Location, 'message'>>);

/**
 * Extract country code from phone number
 * @param phone Phone number string (e.g., "+55 (11) 98765-4321")
 * @returns Country code as string or null
 */
export const extractCountryCode = (phone: string): string | null => {
  // Match pattern: +XX or +XXX at the start
  const match = phone.trim().match(/^\+(\d{1,3})/);
  return match ? match[1] : null;
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
 * Get location information from DDD (Brazil only, for backward compatibility)
 * @param ddd Brazilian area code as string (2 digits)
 * @returns Location object or null if not found
 */
export const getLocationFromDDD = (phone: string): Location | null => {
  const countryCode = extractCountryCode(phone);
  const ddd = extractDDD(phone);
  if (!countryCode || !ddd) {
    return null;
  }

  return getLocation(countryCode, ddd);
};

/**
 * Get location information by country code and area code
 * @param countryCode Country code (e.g., '55' for Brazil)
 * @param ddd Area code as string
 * @returns Location object or null if not found
 */
export const getLocation = (countryCode: string, ddd: string): Location | null => {
  return locationsByCountry[countryCode]?.[ddd] || null;
};

/**
 * Get pre-generated marketing message for a location
 * @param countryCode Country code (e.g., '55' for Brazil)
 * @param ddd Area code as string
 * @returns Marketing message or null if not found
 */
export const getLocationMessage = (countryCode: string, ddd: string): string | null => {
  return locationsByCountry[countryCode]?.[ddd]?.message || null;
};

/**
 * Generate location-specific marketing message
 * Only returns messages for countries with defined location messages
 * @param phone Phone number with country code and area code
 * @param onChunk Callback function to handle each text chunk
 * @returns Promise that resolves when streaming is complete
 */
export const generateLocationMessage = async (
  phone: string,
  onChunk: (text: string) => void
): Promise<void> => {
  const countryCode = extractCountryCode(phone);
  const ddd = extractDDD(phone);

  if (!countryCode || !ddd) {
    throw new Error('Could not extract country code or area code from phone number');
  }

  // Check if we have location data for this country
  if (!locationsByCountry[countryCode]) {
    throw new Error(`Location messages not available for country code +${countryCode}`);
  }

  const location = getLocation(countryCode, ddd);
  
  if (!location) {
    throw new Error(`No location found for country +${countryCode} and area code ${ddd}`);
  }

  onChunk(location.message);
};

