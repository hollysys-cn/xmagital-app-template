"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const server_1 = require("../server");
const builder_1 = require("../builder");
(0, vitest_1.describe)("Student Resolver", () => {
    (0, vitest_1.it)("fetches students", async () => {
        const response = await server_1.server.executeOperation({
            query: "query { students { id name } }",
        }, {
            contextValue: { prisma: builder_1.prisma },
        });
        (0, vitest_1.expect)(response.body.kind).toBe("single");
        if (response.body.kind === "single") {
            (0, vitest_1.expect)(response.body.singleResult.errors).toBeUndefined();
            (0, vitest_1.expect)(Array.isArray(response.body.singleResult.data?.students)).toBe(true);
        }
    });
    (0, vitest_1.it)("creates a student", async () => {
        const mutation = `
      mutation {
        createStudent(input: {
          name: "Test Student",
          age: 20,
          gender: "男",
          enrollmentDate: "2023-09-01T00:00:00.000Z"
        }) {
          id
          name
        }
      }
    `;
        const response = await server_1.server.executeOperation({
            query: mutation,
        }, {
            contextValue: { prisma: builder_1.prisma },
        });
        (0, vitest_1.expect)(response.body.kind).toBe("single");
        if (response.body.kind === "single") {
            (0, vitest_1.expect)(response.body.singleResult.errors).toBeUndefined();
            (0, vitest_1.expect)((response.body.singleResult.data?.createStudent).name).toBe("Test Student");
        }
    });
});
