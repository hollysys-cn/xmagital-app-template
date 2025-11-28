"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentInput = exports.CreateStudentInput = exports.Student = void 0;
const builder_1 = require("../builder");
exports.Student = builder_1.builder.prismaObject("Student", {
    fields: (t) => ({
        id: t.exposeID("id"),
        name: t.exposeString("name"),
        age: t.exposeInt("age"),
        gender: t.exposeString("gender"),
        enrollmentDate: t.expose("enrollmentDate", { type: "DateTime" }),
        createdAt: t.expose("createdAt", { type: "DateTime" }),
        updatedAt: t.expose("updatedAt", { type: "DateTime" }),
    }),
});
exports.CreateStudentInput = builder_1.builder.inputType("CreateStudentInput", {
    fields: (t) => ({
        name: t.string({ required: true }),
        age: t.int({ required: true }),
        gender: t.string({ required: true }),
        enrollmentDate: t.field({ type: "DateTime", required: true }),
    }),
});
exports.UpdateStudentInput = builder_1.builder.inputType("UpdateStudentInput", {
    fields: (t) => ({
        name: t.string(),
        age: t.int(),
        gender: t.string(),
        enrollmentDate: t.field({ type: "DateTime" }),
    }),
});
builder_1.builder.queryField("students", (t) => t.prismaField({
    type: [exports.Student],
    resolve: (query, _root, _args, ctx) => ctx.prisma.student.findMany({
        ...query,
        orderBy: { createdAt: "desc" },
    }),
}));
builder_1.builder.queryField("student", (t) => t.prismaField({
    type: exports.Student,
    nullable: true,
    args: {
        id: t.arg.id({ required: true }),
    },
    resolve: (query, _root, args, ctx) => ctx.prisma.student.findUnique({
        ...query,
        where: { id: String(args.id) },
    }),
}));
builder_1.builder.mutationField("createStudent", (t) => t.prismaField({
    type: exports.Student,
    args: {
        input: t.arg({ type: exports.CreateStudentInput, required: true }),
    },
    resolve: (query, _root, args, ctx) => ctx.prisma.student.create({
        ...query,
        data: {
            name: args.input.name,
            age: args.input.age,
            gender: args.input.gender,
            enrollmentDate: args.input.enrollmentDate,
        },
    }),
}));
builder_1.builder.mutationField("updateStudent", (t) => t.prismaField({
    type: exports.Student,
    args: {
        id: t.arg.id({ required: true }),
        input: t.arg({ type: exports.UpdateStudentInput, required: true }),
    },
    resolve: (query, _root, args, ctx) => ctx.prisma.student.update({
        ...query,
        where: { id: String(args.id) },
        data: {
            name: args.input.name ?? undefined,
            age: args.input.age ?? undefined,
            gender: args.input.gender ?? undefined,
            enrollmentDate: args.input.enrollmentDate ?? undefined,
        },
    }),
}));
builder_1.builder.mutationField("deleteStudent", (t) => t.prismaField({
    type: exports.Student,
    args: {
        id: t.arg.id({ required: true }),
    },
    resolve: (query, _root, args, ctx) => ctx.prisma.student.delete({
        ...query,
        where: { id: String(args.id) },
    }),
}));
