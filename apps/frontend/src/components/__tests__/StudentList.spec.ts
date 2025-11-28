import { mount, flushPromises } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import StudentList from "../StudentList.vue";
import ElementPlus from "element-plus";

vi.mock("../../graphql/generated", () => ({
  useGetStudentsQuery: () => ({
    result: {
      value: {
        students: [
          {
            id: "1",
            name: "John Doe",
            age: 20,
            gender: "男",
            enrollmentDate: "2023-01-01",
          },
        ],
      },
    },
    loading: { value: false },
    refetch: vi.fn(),
  }),
  useDeleteStudentMutation: () => ({
    mutate: vi.fn(),
  }),
}));

describe("StudentList.vue", () => {
  it("renders student list", async () => {
    const wrapper = mount(StudentList, {
      global: {
        plugins: [ElementPlus],
      },
    });
    await flushPromises();
    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("20");
    expect(wrapper.text()).toContain("男");
  });
});
