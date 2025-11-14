'use client';

import { useState, useEffect, ChangeEvent } from 'react';

interface CountryCode {
  code: string;
  flag: string;
  dialCode: string;
}

const countryCodes: CountryCode[] = [
  { code: 'BR', flag: '🇧🇷', dialCode: '+55' },
  { code: 'US', flag: '🇺🇸', dialCode: '+1' },
  { code: 'PT', flag: '🇵🇹', dialCode: '+351' },
  { code: 'ES', flag: '🇪🇸', dialCode: '+34' },
  { code: 'AR', flag: '🇦🇷', dialCode: '+54' },
  { code: 'MX', flag: '🇲🇽', dialCode: '+52' },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  id?: string;
}

export default function PhoneInput({
  value,
  onChange,
  placeholder = '(11) 98765-4321',
  required = false,
  className = '',
  id,
}: PhoneInputProps) {
  // Initialize country based on existing value or default to Brazil
  const getInitialCountry = (): CountryCode => {
    if (value) {
      const country = countryCodes.find(c => value.startsWith(c.dialCode));
      if (country) return country;
    }
    return countryCodes[0]; // Default to Brazil
  };

  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(getInitialCountry());

  // Initialize value with country code if empty
  useEffect(() => {
    if (!value || value.trim() === '') {
      onChange(`${selectedCountry.dialCode} `);
    }
  }, []); // Only run on mount

  // Format phone number as (XX) XXXXX-XXXX
  const formatPhoneNumber = (input: string): string => {
    // Remove all non-numeric characters
    const numbers = input.replace(/\D/g, '');
    
    // Limit to 11 digits (Brazilian format: 2 for area code + 9 for number)
    const limited = numbers.slice(0, 11);
    
    // Format based on length
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 7) {
      // (XX) XXXXX
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else {
      // (XX) XXXXX-XXXX
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    
    // Store the full value with country code
    const fullValue = `${selectedCountry.dialCode} ${formatted}`;
    onChange(fullValue);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const country = countryCodes.find(c => c.dialCode === e.target.value);
    if (country) {
      setSelectedCountry(country);
      
      // Update the value with new country code
      const phoneOnly = value.replace(/^\+\d+\s*/, ''); // Remove old country code
      const fullValue = `${country.dialCode} ${phoneOnly}`;
      onChange(fullValue);
    }
  };

  // Extract phone number without country code for display
  const displayValue = value.replace(/^\+\d+\s*/, '');

  return (
    <div className={`flex gap-2 ${className}`}>
      {/* Country Code Selector */}
      <select
        value={selectedCountry.dialCode}
        onChange={handleCountryChange}
        className="px-3 py-3 border-2 border-gray-300 rounded-xl focus:border-[#659fcf] focus:outline-none transition-colors cursor-pointer"
        style={{ minWidth: '100px' }}
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.dialCode}>
            {country.flag} {country.dialCode}
          </option>
        ))}
      </select>

      {/* Phone Number Input */}
      <input
        id={id}
        type="text"
        value={displayValue}
        onChange={handlePhoneChange}
        placeholder={placeholder}
        required={required}
        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#659fcf] focus:outline-none transition-colors"
        inputMode="numeric"
      />
    </div>
  );
}

