<script setup lang="ts">
//
</script>

<template>
  <VContainer class="fill-height">
    <VResponsive class="align-center d-flex fill-height text-center">
      <VImg
        contain
        height="300"
        src="@/assets/logo.svg"
      />

      <div class="font-weight-light mb-n1 text-body-2">
        Welcome to
      </div>

      <h1 class="font-weight-bold text-h2">
        Vuetify
      </h1>

      <div class="py-14" />

      <VRow class="align-center d-flex justify-center">
        <VCol cols="auto">
          <VBtn
            href="https://next.vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <VIcon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </VBtn>
        </VCol>

        <VCol cols="auto">
          <VBtn
            color="primary"
            href="https://next.vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <VIcon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </VBtn>
        </VCol>

        <VCol cols="auto">
          <VBtn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <VIcon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </VBtn>
        </VCol>
      </VRow>
    </VResponsive>
  </VContainer>
</template>
