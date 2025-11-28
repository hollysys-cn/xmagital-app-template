"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./schema");
const builder_1 = require("./builder");
const server = new server_1.ApolloServer({
    schema: schema_1.schema,
});
exports.server = server;
async function main() {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
        context: async () => ({
            prisma: builder_1.prisma,
        }),
    });
    console.log(`🚀  Server ready at: ${url}`);
}
if (process.env.NODE_ENV !== "test") {
    main();
}
