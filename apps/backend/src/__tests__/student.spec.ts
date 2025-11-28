import { describe, it, expect } from "vitest";
import { server } from "../server";
import { prisma } from "../builder";

describe("Student Resolver", () => {
  it("fetches students", async () => {
    const response = await server.executeOperation(
      {
        query: "query { students { id name } }",
      },
      {
        contextValue: { prisma },
      }
    );

    expect(response.body.kind).toBe("single");
    if (response.body.kind === "single") {
      expect(response.body.singleResult.errors).toBeUndefined();
      expect(Array.isArray(response.body.singleResult.data?.students)).toBe(
        true
      );
    }
  });

  it("creates a student", async () => {
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

    const response = await server.executeOperation(
      {
        query: mutation,
      },
      {
        contextValue: { prisma },
      }
    );

    expect(response.body.kind).toBe("single");
    if (response.body.kind === "single") {
      expect(response.body.singleResult.errors).toBeUndefined();
      expect((response.body.singleResult.data?.createStudent as any).name).toBe(
        "Test Student"
      );
    }
  });
});
