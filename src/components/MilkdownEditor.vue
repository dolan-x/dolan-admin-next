<script setup lang="ts">
import { Editor, rootCtx } from "@milkdown/core";
import { VueEditor, useEditor } from "@milkdown/vue";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { milkdownPlugins } from "@dolan-x/milkdown-plugins";

import "material-icons/iconfont/outlined.css";
import "prism-themes/themes/prism-nord.css";
import "katex/dist/katex.min.css";

let { modelValue } = $defineModel<{
  modelValue: string
}>();

const editor = useEditor((root) => {
  const editor = Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root);
      ctx.get(listenerCtx)
        .markdownUpdated((_ctx, markdown, _prevMarkdown) => {
          modelValue = markdown;
        });
    })
    .use(listener);
  milkdownPlugins.forEach(p => editor.use(p));
  return editor;
}).editor;
</script>

<template>
  <VueEditor :editor="editor" />
</template>
