import { NextRequest, NextResponse } from 'next/server';

interface SheetData {
  name: string;
  phone: string;
  instagram: string;
  followers?: number;
  following?: number;
  posts?: number;
  biography?: string;
  isVerified?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const data: SheetData = await request.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.instagram) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, instagram' },
        { status: 400 }
      );
    }

    // Check for required environment variable
    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!appsScriptUrl) {
      console.error('Missing GOOGLE_APPS_SCRIPT_URL environment variable');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Send data to Google Apps Script
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Apps Script responded with status: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    return NextResponse.json(
      { error: 'Failed to write to Google Sheet' },
      { status: 500 }
    );
  }
}
