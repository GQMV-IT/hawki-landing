// Location interface
export interface Location {
  ddd: string;
  state: string;
  region: string;
  country: string;
}

/**
 * Marketing messages organized by country code and state
 * Each state has a unique marketing message
 */
export const messagesByCountryAndState: Record<string, Record<string, string>> = {
  // Brazil (+55)
  '55': {
    SP: 'São Paulo é gigante em oportunidades! Destaque sua clínica com marketing digital que funciona no estado mais competitivo do Brasil.',
    RJ: 'Rio de Janeiro é referência em estilo! Faça sua clínica brilhar no estado maravilhoso com marketing de resultado.',
    MG: 'Minas Gerais é tradição e inovação! Domine o mercado mineiro com marketing digital de qualidade.',
    ES: 'Espírito Santo é vitória garantida! Faça sua clínica decolar com marketing digital capixaba de resultado.',
    PR: 'Paraná é desenvolvido e sua clínica merece estar no topo! Marketing digital paranaense que aquece resultados.',
    SC: 'Santa Catarina é qualidade de vida! Encha sua clínica com marketing digital catarinense de resultado.',
    RS: 'Rio Grande do Sul é tradição e inovação! Faça seu consultório virar referência gaúcha com marketing digital.',
    DF: 'Distrito Federal é poder e influência! Faça sua clínica dominar a capital com marketing digital estratégico.',
    GO: 'Goiás é pujante e próspero! Faça seu consultório bombar no estado com marketing digital que funciona.',
    TO: 'Tocantins é o mais jovem e promissor! Coloque fogo no crescimento da sua clínica com estratégias digitais.',
    MT: 'Mato Grosso é gigante em oportunidades! Com nosso marketing, sua sala de espera sempre cheia.',
    MS: 'Mato Grosso do Sul é potência! Multiplique pacientes com marketing digital sul-mato-grossense.',
    AC: 'Acre é Brasil! Faça sua clínica aparecer no mapa com marketing digital acreano de resultado.',
    RO: 'Rondônia em crescimento constante! Faça pacientes chegarem ao seu consultório com estratégias digitais.',
    BA: 'Bahia é alegria e prosperidade! Traga axé pra agenda da sua clínica com marketing digital baiano arretado.',
    SE: 'Sergipe é pequeno mas poderoso! Faça seu consultório fazer barulho no estado com marketing digital.',
    PE: 'Pernambuco é cultura e negócios! Coloque sua clínica no frevo do marketing, só alegria de pacientes em PE.',
    AL: 'Alagoas é paraíso nordestino! Encha sua clínica com marketing digital alagoano à beira-mar.',
    PB: 'Paraíba é beleza natural! Agenda cheia na PB com estratégias de tráfego pago divertidas e eficientes.',
    RN: 'Rio Grande do Norte é sol o ano todo! Faça pacientes navegarem direto para sua clínica no RN.',
    CE: 'Ceará é energia pura! Traga a força cearense pro seu consultório, faça sucesso na terra do sol.',
    PI: 'Piauí é autêntico e próspero! Pacientes de sobra para sua clínica com marketing digital piauiense.',
    PA: 'Pará é Amazônia de oportunidades! Faça seu consultório bombar no estado com marketing digital paraense.',
    AM: 'Amazonas é grandeza amazônica! Atraia pacientes em velocidade para sua clínica no maior estado brasileiro.',
    RR: 'Roraima é o extremo norte brasileiro! Faça sua clínica brilhar no estado mais setentrional do Brasil.',
    AP: 'Amapá é Brasil equatorial! Pacientes certos chegam ao seu consultório com marketing digital amapaense.',
    MA: 'Maranhão é diversidade cultural! Multiplique pacientes no estado com marketing digital colorido e animado.',
  },
  // Add more countries here as needed
  // '1': { ... }, // USA/Canada
  // '351': { ... }, // Portugal
};

/**
 * Comprehensive location data organized by country code
 * Contains location info for each area code
 */
export const locationsByCountry: Record<string, Record<string, Location>> = {
  // Brazil (+55)
  '55': {
    // São Paulo
    '11': {
      ddd: '11',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '12': {
      ddd: '12',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '13': {
      ddd: '13',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '14': {
      ddd: '14',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '15': {
      ddd: '15',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '16': {
      ddd: '16',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '17': {
      ddd: '17',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '18': {
      ddd: '18',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '19': {
      ddd: '19',
      state: 'SP',
      region: 'Sudeste',
      country: 'Brasil',
    },

    // Rio de Janeiro
    '21': {
      ddd: '21',
      state: 'RJ',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '22': {
      ddd: '22',
      state: 'RJ',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '24': {
      ddd: '24',
      state: 'RJ',
      region: 'Sudeste',
      country: 'Brasil',
    },

    // Minas Gerais
    '31': {
      ddd: '31',
      state: 'MG',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '32': {
      ddd: '32',
      state: 'MG',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '33': {
      ddd: '33',
      state: 'MG',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '34': {
      ddd: '34',
      state: 'MG',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '35': {
      ddd: '35',
      state: 'MG',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '37': {
      ddd: '37',
      state: 'MG',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '38': {
      ddd: '38',
      state: 'MG',
      region: 'Sudeste',
      country: 'Brasil',
    },

    // Espírito Santo
    '27': {
      ddd: '27',
      state: 'ES',
      region: 'Sudeste',
      country: 'Brasil',
    },
    '28': {
      ddd: '28',
      state: 'ES',
      region: 'Sudeste',
      country: 'Brasil',
    },

    // Paraná
    '41': {
      ddd: '41',
      state: 'PR',
      region: 'Sul',
      country: 'Brasil',
    },
    '42': {
      ddd: '42',
      state: 'PR',
      region: 'Sul',
      country: 'Brasil',
    },
    '43': {
      ddd: '43',
      state: 'PR',
      region: 'Sul',
      country: 'Brasil',
    },
    '44': {
      ddd: '44',
      state: 'PR',
      region: 'Sul',
      country: 'Brasil',
    },
    '45': {
      ddd: '45',
      state: 'PR',
      region: 'Sul',
      country: 'Brasil',
    },
    '46': {
      ddd: '46',
      state: 'PR',
      region: 'Sul',
      country: 'Brasil',
    },

    // Santa Catarina
    '47': {
      ddd: '47',
      state: 'SC',
      region: 'Sul',
      country: 'Brasil',
    },
    '48': {
      ddd: '48',
      state: 'SC',
      region: 'Sul',
      country: 'Brasil',
    },
    '49': {
      ddd: '49',
      state: 'SC',
      region: 'Sul',
      country: 'Brasil',
    },

    // Rio Grande do Sul
    '51': {
      ddd: '51',
      state: 'RS',
      region: 'Sul',
      country: 'Brasil',
    },
    '53': {
      ddd: '53',
      state: 'RS',
      region: 'Sul',
      country: 'Brasil',
    },
    '54': {
      ddd: '54',
      state: 'RS',
      region: 'Sul',
      country: 'Brasil',
    },
    '55': {
      ddd: '55',
      state: 'RS',
      region: 'Sul',
      country: 'Brasil',
    },

    // Distrito Federal e Goiás
    '61': {
      ddd: '61',
      state: 'DF',
      region: 'Centro-Oeste',
      country: 'Brasil',
    },
    '62': {
      ddd: '62',
      state: 'GO',
      region: 'Centro-Oeste',
      country: 'Brasil',
    },
    '63': {
      ddd: '63',
      state: 'TO',
      region: 'Norte',
      country: 'Brasil',
    },
    '64': {
      ddd: '64',
      state: 'GO',
      region: 'Centro-Oeste',
      country: 'Brasil',
    },

    // Mato Grosso
    '65': {
      ddd: '65',
      state: 'MT',
      region: 'Centro-Oeste',
      country: 'Brasil',
    },
    '66': {
      ddd: '66',
      state: 'MT',
      region: 'Centro-Oeste',
      country: 'Brasil',
    },

    // Mato Grosso do Sul
    '67': {
      ddd: '67',
      state: 'MS',
      region: 'Centro-Oeste',
      country: 'Brasil',
    },

    // Acre
    '68': {
      ddd: '68',
      state: 'AC',
      region: 'Norte',
      country: 'Brasil',
    },

    // Rondônia
    '69': {
      ddd: '69',
      state: 'RO',
      region: 'Norte',
      country: 'Brasil',
    },

    // Bahia
    '71': {
      ddd: '71',
      state: 'BA',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '73': {
      ddd: '73',
      state: 'BA',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '74': {
      ddd: '74',
      state: 'BA',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '75': {
      ddd: '75',
      state: 'BA',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '77': {
      ddd: '77',
      state: 'BA',
      region: 'Nordeste',
      country: 'Brasil',
    },

    // Sergipe
    '79': {
      ddd: '79',
      state: 'SE',
      region: 'Nordeste',
      country: 'Brasil',
    },

    // Pernambuco
    '81': {
      ddd: '81',
      state: 'PE',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '82': {
      ddd: '82',
      state: 'AL',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '83': {
      ddd: '83',
      state: 'PB',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '84': {
      ddd: '84',
      state: 'RN',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '85': {
      ddd: '85',
      state: 'CE',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '86': {
      ddd: '86',
      state: 'PI',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '87': {
      ddd: '87',
      state: 'PE',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '88': {
      ddd: '88',
      state: 'CE',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '89': {
      ddd: '89',
      state: 'PI',
      region: 'Nordeste',
      country: 'Brasil',
    },

    // Pará
    '91': {
      ddd: '91',
      state: 'PA',
      region: 'Norte',
      country: 'Brasil',
    },
    '92': {
      ddd: '92',
      state: 'AM',
      region: 'Norte',
      country: 'Brasil',
    },
    '93': {
      ddd: '93',
      state: 'PA',
      region: 'Norte',
      country: 'Brasil',
    },
    '94': {
      ddd: '94',
      state: 'PA',
      region: 'Norte',
      country: 'Brasil',
    },
    '95': {
      ddd: '95',
      state: 'RR',
      region: 'Norte',
      country: 'Brasil',
    },
    '96': {
      ddd: '96',
      state: 'AP',
      region: 'Norte',
      country: 'Brasil',
    },
    '97': {
      ddd: '97',
      state: 'AM',
      region: 'Norte',
      country: 'Brasil',
    },

    // Maranhão
    '98': {
      ddd: '98',
      state: 'MA',
      region: 'Nordeste',
      country: 'Brasil',
    },
    '99': {
      ddd: '99',
      state: 'MA',
      region: 'Nordeste',
      country: 'Brasil',
    },
  },
  // Add more countries here as needed
  // '1': { ... }, // USA/Canada
  // '351': { ... }, // Portugal
};

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

  // Get message from state
  const message = messagesByCountryAndState[countryCode]?.[location.state];

  if (!message) {
    throw new Error(`No message found for state ${location.state} in country +${countryCode}`);
  }

  onChunk(message);
};
