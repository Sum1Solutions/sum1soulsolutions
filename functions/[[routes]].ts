import type { PagesFunction } from '@cloudflare/workers-types';

// Handle all routes for SPA
export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  
  // If this is an API route, continue with the request
  if (url.pathname.startsWith('/api/')) {
    return context.next();
  }
  
  // For all other routes, serve the index.html file
  return context.env.ASSETS.fetch(context.request);
};
