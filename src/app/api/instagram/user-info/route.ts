import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username } = body;

    // Validate input
    if (!username || typeof username !== 'string') {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      );
    }

    // Clean username
    const cleanUsername = username.replace('@', '').trim();

    if (cleanUsername.length === 0) {
      return NextResponse.json(
        { error: 'Invalid username' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RAPIDAPI_KEY) {
      console.error('RAPIDAPI_KEY not configured');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    // Call RapidAPI
    const options = {
      method: 'POST',
      url: 'https://instagram120.p.rapidapi.com/api/instagram/userInfo',
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'instagram120.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        username: cleanUsername
      }
    };

    const response = await axios.request(options);

    return NextResponse.json(response.data);

  } catch (error) {
    console.error('Instagram API error:', error);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const data = error.response?.data;

      switch (status) {
        case 401:
          return NextResponse.json(
            { error: 'API authentication failed' },
            { status: 401 }
          );
        case 403:
          return NextResponse.json(
            { error: 'API quota exceeded' },
            { status: 403 }
          );
        case 404:
          return NextResponse.json(
            { error: 'Profile not found' },
            { status: 404 }
          );
        case 429:
          return NextResponse.json(
            { error: 'Rate limit exceeded. Please try again later.' },
            { status: 429 }
          );
        default:
          return NextResponse.json(
            { error: data?.message || 'Failed to fetch profile data' },
            { status: status || 500 }
          );
      }
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

