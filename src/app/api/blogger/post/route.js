import { NextResponse } from 'next/server';

// Replace with your Blogger API key and blog ID
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get('id');

  if (!postId) {
    return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
  }

  const BLOG_ID = "3304424457514773202";
  const API_KEY = "AIzaSyDz2_M1AVfldpnsY78nE3WiKSY4szBGsYc";
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch the article from Blogger');
    const data = await res.json();
    return NextResponse.json({ post: data });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
