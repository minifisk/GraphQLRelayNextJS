# [Next.js 13](https://beta.nextjs.org/) with [Relay](https://relay.dev/)

### 1. Install dependencies
```bash
npm install
```

### 2. Add GitHub personal token

Copy `.env.example` an rename to `.env` in the root of your project. [Get a personal access token with your GitHub account ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)

.env
```env
NEXT_PUBLIC_REACT_APP_GITHUB_AUTH_TOKEN=<token you create above>
```

### 3. Generate the queries
Run the command to compile which requests need to be called for the nested components
```bash
npm run relay
```

### 4. Start the server
```bash
npm run dev
```


You should see the app running in `http://localhost:3000`# GraphQLRelayNextJS

