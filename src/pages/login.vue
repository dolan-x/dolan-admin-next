<script setup lang="ts">
const router = useRouter();
const { t } = useI18n();
const token = useToken();
const toast = useToast();

const user = reactive({
  username: "",
  password: "",
});

let isLoading = $ref(false);

const onLogin = async () => {
  isLoading = true;
  const { res, error } = await useAPIFetch<any>("users/login", {
    method: "POST",
    body: user,
  });
  if (error) {
    toast.error(res.message);
  }
  if (res && res.success) {
    token.value = res.data.token;
    toast.success(t("login.login-success"));
    router.push("/");
  }
  isLoading = false;
};
</script>

<template>
  <div
    h="full"
    w="full"
  >
    <VForm :disabled="isLoading" @keyup.native.enter="onLogin">
      <VContainer max-w="[450px]">
        <VTextField
          v-model="user.username"
          :label="t('login.username')"
          required
          :rules="[value => !!value || t('login.username-missing')]"
        />
        <VTextField
          v-model="user.password"
          :label="t('login.password')"
          required
          :rules="[value => !!value || t('login.password-missing')]"
          type="password"
        />
        <div flex="~" justify="between">
          <VBtn color="primary" to="/signup" variant="outlined">
            {{ t('login.signup') }}
          </VBtn>
          <VBtn color="primary" :loading="isLoading" @click="onLogin">
            {{ t('login.login') }}
          </VBtn>
        </div>
      </VContainer>
    </VForm>
  </div>
</template>
