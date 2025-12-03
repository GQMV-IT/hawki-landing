import { NextResponse } from 'next/server';

interface IpApiResponse {
  status: string;
  city: string;
  regionName: string;
  country: string;
  message?: string;
}

export async function GET(request: Request) {
  try {
    // Get client IP from headers (works with most hosting providers)
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwarded?.split(',')[0] ?? realIp ?? '';

    // Use ip-api.com for geolocation (free, no API key required)
    // If no IP is available (localhost), it will use the server's IP
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

