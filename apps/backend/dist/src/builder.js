"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builder = exports.prisma = void 0;
const core_1 = __importDefault(require("@pothos/core"));
const plugin_prisma_1 = __importDefault(require("@pothos/plugin-prisma"));
const client_1 = require("@prisma/client");
const graphql_scalars_1 = require("graphql-scalars");
require("dotenv/config");
const adapter_libsql_1 = require("@prisma/adapter-libsql");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
}
const adapter = new adapter_libsql_1.PrismaLibSql({ url: connectionString });
exports.prisma = new client_1.PrismaClient({ adapter });
const dmmf = client_1.Prisma.dmmf;
dmmf.datamodel.models.forEach((model) => {
    if (!model.uniqueIndexes)
        model.uniqueIndexes = [];
    if (!model.primaryKey)
        model.primaryKey = null;
    model.fields.forEach((field) => {
        if (field.name === "id") {
            field.isId = true;
        }
    });
});
exports.builder = new core_1.default({
    plugins: [plugin_prisma_1.default],
    prisma: {
        client: exports.prisma,
        dmmf: dmmf,
    },
});
exports.builder.addScalarType("DateTime", graphql_scalars_1.DateTimeResolver, {});
exports.builder.queryType({});
exports.builder.mutationType({});
