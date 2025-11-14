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
 * Get location information from DDD
 * @param ddd Area code as string
 * @returns Location object or null if not found
 */
export const getLocationFromDDD = (ddd: string): Location | null => {
  return dddLocations[ddd] || null;
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

  const location = getLocationFromDDD(ddd);
  
  if (!location) {
    throw new Error(`Location not found for DDD ${ddd}`);
  }

  const prompt = `A clínica está localizada em ${location.city} - ${location.state}, na região ${location.region} do Brasil.

Explique em uma mensagem extremamemente curta (máximo de 20 palavras) como a Hawki pode ajudar clínicas odontológicas especificamente em ${location.city} a aumentar o faturamento através de marketing digital e tráfego pago.

Mencione características ou oportunidades específicas da região ${location.region} ou de ${location.city} que tornam nossos serviços especialmente valiosos.`;

  try {
    const response = await fetch('/api/text/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system: "Você é um consultor de marketing digital da Hawki especializado em clínicas odontológicas. Crie mensagens muito curtas (máximo 20 palavras), diretas e personalizadas por região. Não use emojis ou markdown. Seja profissional e mencione aspectos específicos da localização.",
        prompt,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate message');
    }

    // Handle streaming response
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error('No response body');
    }

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      onChunk(chunk);
    }

  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate location message');
  }
};

