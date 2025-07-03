// Handle all routes for SPA
const handler = async (request) => {
  // Get the URL from the request
  const url = new URL(request.url);
  
  // If this is an API route, continue with the request
  if (url.pathname.startsWith('/api/')) {
    return fetch(request);
  }
  
  // For all other routes, serve the index.html file
  return fetch(new URL('/index.html', request.url));
};

export const onRequest = [handler];
