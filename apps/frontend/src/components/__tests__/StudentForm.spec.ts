import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import StudentForm from "../StudentForm.vue";
import ElementPlus from "element-plus";

// Mock the generated hooks
const createMutate = vi.fn().mockResolvedValue({});
const updateMutate = vi.fn().mockResolvedValue({});

vi.mock("../../graphql/generated", () => ({
  useCreateStudentMutation: () => ({
    mutate: createMutate,
    loading: { value: false },
  }),
  useUpdateStudentMutation: () => ({
    mutate: updateMutate,
    loading: { value: false },
  }),
}));

describe("StudentForm.vue", () => {
  it("renders create form by default", () => {
    const wrapper = mount(StudentForm, {
      global: {
        plugins: [ElementPlus],
      },
    });
    expect(wrapper.find("button").text()).toContain("创建");
  });

  it("renders update form when student prop is provided", () => {
    const wrapper = mount(StudentForm, {
      props: {
        student: {
          id: "1",
          name: "Test",
          age: 20,
          gender: "男",
          enrollmentDate: "2023-01-01",
        },
      },
      global: {
        plugins: [ElementPlus],
      },
    });
    expect(wrapper.find("button").text()).toContain("更新");
    // Check if input values are set
    // Note: Element Plus inputs might need specific selectors or checking v-model data
    expect((wrapper.vm as any).formData.name).toBe("Test");
  });
});
