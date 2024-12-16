# TONs of Dungeons 🗺️💰

TONs of Dungeons game integrates both casual gaming and play-to-earn mechanics, appealing to players who enjoy light strategy and earning real-world or virtual assets (e.g., crypto or tokens in the TON ecosystem).

## Setup

Set env variables

```bash
VITE_CONVEX_URL=
```

Go to [convex.com](https://www.convex.dev/) and create a new project. This will be you backend

```bash
npx convex dev
```

## Setup ngrok for local development

1. Install ngrok globally and create an account on ngrok and get the authtoken

```bash
brew install ngrok/ngrok/ngrok
ngrok config add-authtoken <your_auth_token>
```

2. Start ngrok

Set the domain to the domain created in the ngrok account

```bash
ngrok http --domain=[DOMAIN] https://localhost:5173/

```

3. Go to Telegram Bot Father -> Bot Settings -> Edit menu button URL and set it to the ngrok URL
