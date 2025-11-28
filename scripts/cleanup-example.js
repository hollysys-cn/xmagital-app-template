const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");

const filesToRemove = [
  "apps/backend/src/schema/student.ts",
  "apps/frontend/src/graphql/student.graphql",
  "apps/frontend/src/components/StudentList.vue",
  "apps/frontend/src/components/StudentForm.vue",
  "apps/frontend/src/views/StudentView.vue",
];

const filesToEdit = [
  {
    path: "apps/backend/src/schema/index.ts",
    replacements: [
      { from: 'import "./student";\n', to: "" },
      { from: 'import "./student";', to: "" },
    ],
  },
  {
    path: "apps/frontend/src/router/index.ts",
    replacements: [
      {
        from: `    {
      path: "/students",
      name: "students",
      component: () => import("../views/StudentView.vue"),
    },`,
        to: "",
      },
    ],
  },
  {
    path: "apps/frontend/src/App.vue",
    replacements: [
      {
        from: '<el-menu-item index="/students">学生管理</el-menu-item>',
        to: "",
      },
    ],
  },
  {
    path: "apps/backend/prisma/schema.prisma",
    replacements: [
      {
        from: `model Student {
  id             String   @id @default(cuid())
  name           String
  age            Int
  gender         String
  enrollmentDate DateTime
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}`,
        to: "",
      },
    ],
  },
];

console.log("Starting cleanup...");

// Remove files
filesToRemove.forEach((file) => {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed: ${file}`);
  } else {
    console.log(`File not found (skipped): ${file}`);
  }
});

// Edit files
filesToEdit.forEach((file) => {
  const filePath = path.join(rootDir, file.path);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    file.replacements.forEach((replacement) => {
      if (content.includes(replacement.from)) {
        content = content.replace(replacement.from, replacement.to);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Updated: ${file.path}`);
    } else {
      console.log(`No changes needed for: ${file.path}`);
    }
  } else {
    console.log(`File not found (skipped): ${file.path}`);
  }
});

// Clean up migrations
const migrationsDir = path.join(rootDir, "apps/backend/prisma/migrations");
if (fs.existsSync(migrationsDir)) {
  fs.rmSync(migrationsDir, { recursive: true, force: true });
  console.log("Removed migrations directory");
}

console.log(
  'Cleanup complete. Please run "pnpm prisma migrate dev" in apps/backend to reset the database.'
);
