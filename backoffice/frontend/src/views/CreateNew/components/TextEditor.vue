<template>
  <div class="text-editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar row">
            <a
            class="menu-button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
            >
                <i class="material-icons">format_bold</i>
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
            >
                <i class="material-icons">format_italic</i>
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
            >
                <i class="material-icons">strikethrough_s</i>
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
            >
                <i class="material-icons">format_underline</i>
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
            >
            H1
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
            >
            H2
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
            >
            H3
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
            >
                <i class="material-icons">format_list_bulleted</i>
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
            >
                <i class="material-icons">format_list_numbered</i>
            </a>

            <a
            class="menu-button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
            >
                <i class="material-icons">keyboard_tab</i>
            </a>

            <a
            class="menu-button"
            @click="commands.horizontal_rule"
            >
                <i class="material-icons">remove</i>
            </a>

            <a
            class="menu-button"
            @click="commands.undo"
            >
                <i class="material-icons">undo</i>
            </a>

            <a
            class="menu-button"
            @click="commands.redo"
            >
                <i class="material-icons">redo</i>
            </a>

        </div>
    </editor-menu-bar>
    <editor-content class="editor-content" :editor="editor" />
  </div>
</template>

<script lang="ts">
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { getModule } from "vuex-module-decorators"
import CreateNewModule from "../CreateNewModule"
import Store from "@/store"

const createNewState = getModule(CreateNewModule, Store)

@Component({
  components: {
    EditorMenuBar,
    EditorContent
  }
})
export default class TextEditor extends Vue {

  editor = new Editor({
    extensions: [
      new Blockquote(),
      new BulletList(),
      new HardBreak(),
      new Heading({ levels: [1, 2, 3] }),
      new HorizontalRule(),
      new ListItem(),
      new OrderedList(),
      new TodoItem(),
      new TodoList(),
      new Link(),
      new Bold(),
      new Italic(),
      new Strike(),
      new Underline(),
      new History(),
    ],
    onUpdate: ({ getHTML }) => {
      createNewState.setText(getHTML())
    },
  })
  
}

</script>

<style>
.text-editor {
    margin-top: 1em;
}

.editor-content {
    height: 15em;
    margin-top: 1em;
}

.ProseMirror {
    border: 1px solid #0000008f;    
    border-radius: 3px;
    height: 13em;
    margin: 0;
    overflow-y: scroll;
    word-wrap: break-word;
    padding: 1em;
}

.material-icons {
    font-size: 1em !important;
}

.menu-button {
    padding: 1em;
    cursor: pointer;
}

.menu-button:hover {
    background-color: #eeeeee;
}

.is-active {
    background-color: #e0e0e0;
}

</style>
