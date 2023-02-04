<script setup lang="ts">
import * as monaco from "monaco-editor";
import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";

const {
  theme = "vs",
  language = "json",
} = $defineProps<{
  theme?: "vs" | "vs-dark"
  language?: string
}>();
let { modelValue } = $defineModel<{
  modelValue: string
}>();
const editContainer = $ref<HTMLDivElement | null>(null);

self.MonacoEnvironment = {
  getWorker() {
    return new JsonWorker();
  },
};
let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null;

watch(
  () => modelValue,
  (value) => {
    if (value !== monacoEditor?.getValue() && monacoEditor) {
      monacoEditor.setValue(value);
    }
  },
);

watch(
  () => theme,
  () => {
    monacoEditor?.updateOptions({ theme });
  },
);

onMounted(() => {
  monacoEditor = monaco.editor.create(editContainer!, {
    value: modelValue,
    readOnly: false,
    selectOnLineNumbers: true,
    language,
    theme,
    tabSize: 2,
  });
  monacoEditor.onDidChangeModelContent(() => {
    const currenValue = monacoEditor?.getValue();
    modelValue = currenValue || "";
  });
});
</script>

<template>
  <div ref="editContainer" min-h="600px" w="full" />
</template>
