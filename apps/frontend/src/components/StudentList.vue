<script setup lang="ts">
import {
  useGetStudentsQuery,
  useDeleteStudentMutation,
} from "../graphql/generated";
import { ElMessage, ElMessageBox } from "element-plus";
import { computed } from "vue";

const emit = defineEmits(["edit"]);

const { result, loading, refetch } = useGetStudentsQuery();
const { mutate: deleteStudent } = useDeleteStudentMutation();

const students = computed(() => result.value?.students ?? []);

const handleDelete = async (id: string) => {
  try {
    await ElMessageBox.confirm("确定要删除该学生吗？", "警告", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    });

    await deleteStudent({ id });
    ElMessage.success("删除成功");
    refetch();
  } catch (e) {
    if (e !== "cancel") {
      ElMessage.error("删除失败");
    }
  }
};

const handleEdit = (student: any) => {
  emit("edit", student);
};

defineExpose({ refetch });
</script>

<template>
  <div class="student-list">
    <el-table
      v-loading="loading"
      :data="students"
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label="姓名"
      />
      <el-table-column
        prop="age"
        label="年龄"
      />
      <el-table-column
        prop="gender"
        label="性别"
      />
      <el-table-column
        prop="enrollmentDate"
        label="入学日期"
      >
        <template #default="{ row }">
          {{ new Date(row.enrollmentDate).toLocaleDateString() }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
      >
        <template #default="{ row }">
          <el-button
            size="small"
            @click="handleEdit(row)"
          >
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(row.id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
