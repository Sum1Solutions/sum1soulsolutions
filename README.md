# Sum1SoulSolutions.com

A modern web application built with React and Vite, deployed on Cloudflare Pages.

## Features

- Fast, responsive UI built with React
- Optimized production builds with Vite
- SPA (Single Page Application) routing
- Cloudflare Pages deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- A Cloudflare account (for deployment)

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This project is configured for deployment on Cloudflare Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

- `/src` - Application source code
- `/public` - Static assets
- `/dist` - Production build output (generated during build)
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

*   `master`: This is the production branch. It reflects the live version of the site.
*   `develop`: This is the main development branch. All new features and bug fixes should be branched from `develop` and merged back into it. The `develop` branch is automatically deployed to a preview environment on Cloudflare Pages.

### Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Sum1Solutions/sum1soulsolutions.git
    cd sum1soulsolutions
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**

    Create a `.env` file in the root of the project and add the following, replacing `your_youtube_api_key` with your actual YouTube API key:

    ```bash
    cp env.example .env
    ```

4.  **Get an API Key:**

    You will need an API key from the service that hosts your playlist (e.g., YouTube). Follow their documentation to obtain a key.

4.  **Configure the Cloudflare Worker:**

    The Cloudflare Worker needs your API key to make requests. Set it as a secret in your Cloudflare dashboard or using the `wrangler` CLI:

    ```bash
    npx wrangler secret put API_KEY
    ```

    You will be prompted to enter the value of your API key.

5.  **Run the project locally:**

    To start the development server, run:

    ```bash
    npm run dev
    ```

    This will start the Vite development server for the frontend and a local instance of the Cloudflare Worker.

6.  **Deploy the project:**

    To deploy the application to Cloudflare Pages and the worker to Cloudflare Workers, run:

    ```bash
    npm run deploy
    ```
