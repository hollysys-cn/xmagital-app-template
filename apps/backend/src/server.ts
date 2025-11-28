import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema";
import { prisma } from "./builder";

const server = new ApolloServer({
  schema,
});

async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => ({
      prisma,
    }),
  });
  console.log(`🚀  Server ready at: ${url}`);
}

export { server };

if (process.env.NODE_ENV !== "test") {
  main();
}
