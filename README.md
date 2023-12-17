# [Next.js 13](https://beta.nextjs.org/) with [Relay](https://relay.dev/)

A simple app to illustrate how Relay works with NextJS 13, and how can compile the needed data from separate components into one general, optimized query.

Heavily inspired by: https://github.com/Roshanjossey/nextjs-13-relay by https://github.com/Roshanjossey


### PREREQUESITES
You should have created a project with a DB at Supabase, this should have one table called "books" which should have the following fields:
* id (auto created)
* createed_at (auto created)
* name
* author


### 1. Install dependencies
```bash
npm install
```

### 2. Add Supabase URL and ANON key
Copy `.env.example` an rename to `.env` in the root of your project. Get the URL and ANONKEY to your supabase project and paste it in the env file.

.env
```env
SUPABASE_URL=
SUPABASE_ANON_KEY=
```


### 3. Fetch your GraphQL schema from Supabase DB
We need to create a GraphQL schema from your Postgres database at supabase, this is done by running the command:
```bash
npm run codegen:fetch
```
Then inspect that everything is successfull and that your schema is saved at graphql/schema/schema.graphql.
This will be used both by codegen to generate the Types needed to keep your project typed based on your database schema, and will also be used by Relay to create the Relay-query and fetch data from your database.

#### 4. Create typescript files
By running the following command codegen will create a folder "gpl" which will contain the Type files based on your GraphQL schema.
```bash
npm run codegen
```

### 4. Generate the queries
Finally, it's time to let relay create the "optimized query" which will collect all the queries from your different components, and collect it into one general query, which will be saved in the __generated__ folder, and be kind of like the "blueprint" of which requests that need to be made for your app.

```bash
npm run relay
```

### 4. Start the server
```bash
npm run dev
```


You should see the app running in `http://localhost:3000`and seeing the data from your books database displayed on the page.

