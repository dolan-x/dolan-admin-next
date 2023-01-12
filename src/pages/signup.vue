<script setup lang="ts">
const router = useRouter();
const { t } = useI18n();

const user = reactive({
  username: "",
  password: "",
});

let isLoading = $ref(false);

const onSignup = async () => {
  isLoading = true;
  const { res } = await useAPIFetch<any>("users/signup", {
    method: "POST",
    body: user,
  });
  if (res && res.success) {
    router.push("/login");
  }
  isLoading = false;
};
</script>

<template>
  <div
    h="full"
    w="full"
  >
    <VForm :disabled="isLoading" @keyup.native.enter="onSignup">
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
          <VBtn color="primary" to="/login" variant="outlined">
            {{ t('login.login') }}
          </VBtn>
          <VBtn color="primary" :loading="isLoading" @click="onSignup">
            {{ t('login.signup') }}
          </VBtn>
        </div>
      </VContainer>
    </VForm>
  </div>
</template>
