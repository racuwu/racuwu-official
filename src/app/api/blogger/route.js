import { NextResponse } from 'next/server';

// Replace with your Blogger API key and blog ID
export async function GET(req) {
  const BLOG_ID = "3304424457514773202";
  const API_KEY = "AIzaSyDz2_M1AVfldpnsY78nE3WiKSY4szBGsYc";
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&fetchBodies=true&maxResults=50`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch from Blogger');
    const data = await res.json();
    return NextResponse.json({ posts: data.items || [] });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
