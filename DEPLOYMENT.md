# Cloudflare Pages Deployment Guide

This guide explains how to deploy this React application to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js and npm installed locally

## Deployment Steps

### 1. Push to Git Repository

Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Deploy to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Go to **Pages** > **Create a project**
3. Connect your Git provider and select your repository
4. Configure the build settings:
   - **Framework preset**: Create React App (or Vite if available)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or the root of your project)
5. Click **Save and Deploy**

### 3. Configure Custom Domain (Optional)

1. In your Cloudflare Pages project, go to **Settings** > **Custom domains**
2. Click **Add a custom domain**
3. Enter your domain (e.g., `example.com`)
4. Follow the instructions to update your DNS settings

### 4. Environment Variables (If Needed)

If your app requires environment variables:

1. In your Cloudflare Pages project, go to **Settings** > **Environment variables**
2. Add your variables in the format `VITE_*` (for Vite)
3. Rebuild your site for changes to take effect

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

- If you see a 404 error on page refresh, ensure your `_routes.json` and `_redirects` files are correctly configured
- Check the deployment logs in the Cloudflare dashboard for build errors
- Make sure all required environment variables are set in the Cloudflare Pages settings
