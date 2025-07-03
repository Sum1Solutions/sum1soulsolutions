# Sum1SoulSolutions.com - A belief system for the rest of us

This project is a web application that displays a playlist from a specified source. It uses a Cloudflare Worker to securely handle API requests to the playlist provider.

## How it works

The application is built with React and Vite. The frontend makes requests to a Cloudflare Worker, which then fetches the playlist data from the source API. This setup ensures that the API key is not exposed on the client-side.

## Getting Started

To use this project for your own playlist, follow these steps:

### Prerequisites

- Node.js and npm installed
- A Cloudflare account

### Development Workflow

This project uses a Gitflow-based workflow with two main branches:

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
