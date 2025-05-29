import { NextResponse } from 'next/server';

// Replace with your Blogger API key and blog ID
export async function GET(req) {
  const BLOG_ID = "2635223598249333700";
  const API_KEY = "AIzaSyDz2_M1AVfldpnsY78nE3WiKSY4szBGsYc";
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&fetchBodies=true&maxResults=50`;

  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      },
      cache: 'no-store' // Disable caching to ensure fresh data
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Blogger API error:', errorData);
      throw new Error(`Failed to fetch from Blogger: ${res.status}`);
    }
    
    const data = await res.json();
    
    if (!data || !Array.isArray(data.items)) {
      console.error('Invalid data structure from Blogger API:', data);
      throw new Error('Invalid response from Blogger API');
    }
    
    return NextResponse.json({ posts: data.items });
  } catch (e) {
    console.error('Error in blogger API route:', e);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', details: e.message }, 
      { status: 500 }
    );
  }
}
