<script setup lang="ts">
import { ref, watch, computed } from "vue";
import {
  useCreateStudentMutation,
  useUpdateStudentMutation,
} from "../graphql/generated";
import { ElMessage } from "element-plus";
import type { FormInstance } from "element-plus";

const props = defineProps<{
  student?: any;
}>();

const emit = defineEmits(["success", "cancel"]);

const formRef = ref<FormInstance>();
const formData = ref({
  name: "",
  age: 18,
  gender: "男",
  enrollmentDate: new Date().toISOString(),
});

const isEdit = computed(() => !!props.student);

watch(
  () => props.student,
  (newVal) => {
    if (newVal) {
      formData.value = {
        name: newVal.name,
        age: newVal.age,
        gender: newVal.gender,
        enrollmentDate: newVal.enrollmentDate,
      };
    } else {
      formData.value = {
        name: "",
        age: 18,
        gender: "男",
        enrollmentDate: new Date().toISOString(),
      };
    }
  },
  { immediate: true }
);

const rules = {
  name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "change" }],
  enrollmentDate: [
    { required: true, message: "请选择入学日期", trigger: "change" },
  ],
};

const { mutate: createStudent, loading: createLoading } =
  useCreateStudentMutation();
const { mutate: updateStudent, loading: updateLoading } =
  useUpdateStudentMutation();

const loading = computed(() => createLoading.value || updateLoading.value);

const handleSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid) => {
    if (valid) {
      try {
        const inputDate = new Date(formData.value.enrollmentDate).toISOString();

        if (isEdit.value && props.student) {
          await updateStudent({
            id: props.student.id,
            input: {
              name: formData.value.name,
              age: formData.value.age,
              gender: formData.value.gender,
              enrollmentDate: inputDate,
            },
          });
          ElMessage.success("更新成功");
        } else {
          await createStudent({
            input: {
              name: formData.value.name,
              age: formData.value.age,
              gender: formData.value.gender,
              enrollmentDate: inputDate,
            },
          });
          ElMessage.success("创建成功");
        }
        emit("success");
      } catch (e) {
        console.error(e);
        ElMessage.error(isEdit.value ? "更新失败" : "创建失败");
      }
    }
  });
};
</script>

<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input-number v-model="formData.age" :min="1" :max="100" />
    </el-form-item>
    <el-form-item label="性别" prop="gender">
      <el-radio-group v-model="formData.gender">
        <el-radio value="男"> 男 </el-radio>
        <el-radio value="女"> 女 </el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="入学日期" prop="enrollmentDate">
      <el-date-picker
        v-model="formData.enrollmentDate"
        type="date"
        placeholder="选择日期"
        style="width: 100%"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        :loading="loading"
        @click="handleSubmit(formRef)"
      >
        {{ isEdit ? "更新" : "创建" }}
      </el-button>
      <el-button @click="$emit('cancel')"> 取消 </el-button>
    </el-form-item>
  </el-form>
</template>
