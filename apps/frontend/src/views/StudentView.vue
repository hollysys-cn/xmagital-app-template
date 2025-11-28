<script setup lang="ts">
import { ref } from "vue";
import StudentList from "../components/StudentList.vue";
import StudentForm from "../components/StudentForm.vue";

const dialogVisible = ref(false);
const currentStudent = ref<any>(null);
const listRef = ref<InstanceType<typeof StudentList>>();

const handleAdd = () => {
  currentStudent.value = null;
  dialogVisible.value = true;
};

const handleEdit = (student: any) => {
  currentStudent.value = student;
  dialogVisible.value = true;
};

const handleSuccess = () => {
  dialogVisible.value = false;
  listRef.value?.refetch();
};
</script>

<template>
  <div class="student-view">
    <div class="header">
      <h2>学生管理</h2>
      <el-button
        type="primary"
        @click="handleAdd"
      >
        添加学生
      </el-button>
    </div>

    <StudentList
      ref="listRef"
      @edit="handleEdit"
    />

    <el-dialog
      v-model="dialogVisible"
      :title="currentStudent ? '编辑学生' : '添加学生'"
      width="500px"
      destroy-on-close
    >
      <StudentForm
        :student="currentStudent"
        @success="handleSuccess"
        @cancel="dialogVisible = false"
      />
    </el-dialog>
  </div>
</template>

<style scoped>
.student-view {
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
