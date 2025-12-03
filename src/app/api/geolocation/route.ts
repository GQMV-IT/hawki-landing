import { NextResponse } from 'next/server';

interface IpApiResponse {
  status: string;
  city: string;
  regionName: string;
  country: string;
  message?: string;
}

/**
 * Check if an IP address is private/local (can't be geolocated)
 */
function isPrivateIp(ip: string): boolean {
  const cleanIp = ip.trim();
  
  return (
    cleanIp.startsWith('10.') ||
    cleanIp.startsWith('192.168.') ||
    cleanIp.startsWith('127.') ||
    cleanIp.startsWith('172.16.') ||
    cleanIp.startsWith('172.17.') ||
    cleanIp.startsWith('172.18.') ||
    cleanIp.startsWith('172.19.') ||
    cleanIp.startsWith('172.20.') ||
    cleanIp.startsWith('172.21.') ||
    cleanIp.startsWith('172.22.') ||
    cleanIp.startsWith('172.23.') ||
    cleanIp.startsWith('172.24.') ||
    cleanIp.startsWith('172.25.') ||
    cleanIp.startsWith('172.26.') ||
    cleanIp.startsWith('172.27.') ||
    cleanIp.startsWith('172.28.') ||
    cleanIp.startsWith('172.29.') ||
    cleanIp.startsWith('172.30.') ||
    cleanIp.startsWith('172.31.') ||
    cleanIp === 'localhost' ||
    cleanIp === '::1'
  );
}

export async function GET(request: Request) {
  try {
    // Get client IP from headers (works with most hosting providers)
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const rawIp = forwarded?.split(',')[0]?.trim() ?? realIp?.trim() ?? '';

    // If IP is private/local, don't pass it - let ip-api.com detect the public IP automatically
    const ip = rawIp && !isPrivateIp(rawIp) ? rawIp : '';

    // Use ip-api.com for geolocation (free, no API key required)
    // Without an IP parameter, it uses the requester's public IP
    const apiUrl = ip ? `http://ip-api.com/json/${ip}` : 'http://ip-api.com/json/';
    
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch geolocation data');
    }

    const data: IpApiResponse = await response.json();

    if (data.status === 'fail') {
      throw new Error(data.message || 'Geolocation lookup failed');
    }

    return NextResponse.json({
      city: data.city,
      region: data.regionName,
      country: data.country,
    });
  } catch (error) {
    console.error('Geolocation error:', error);
    return NextResponse.json(
      { error: 'Failed to get location' },
      { status: 500 }
    );
  }
}

