import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { Prisma, PrismaClient } from "@prisma/client";
import { DateTimeResolver } from "graphql-scalars";
import "dotenv/config";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaLibSql({ url: connectionString });

export const prisma = new PrismaClient({ adapter });

const dmmf = Prisma.dmmf;
dmmf.datamodel.models.forEach((model: any) => {
  if (!model.uniqueIndexes) model.uniqueIndexes = [];
  if (!model.primaryKey) model.primaryKey = null;

  model.fields.forEach((field: any) => {
    if (field.name === "id") {
      field.isId = true;
    }
  });
});

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Context: {
    prisma: PrismaClient;
  };
  Scalars: {
    DateTime: {
      Input: Date;
      Output: Date;
    };
  };
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
    dmmf: dmmf,
  },
});

builder.addScalarType("DateTime", DateTimeResolver, {});

builder.queryType({});
builder.mutationType({});
