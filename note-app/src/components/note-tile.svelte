<script lang="ts">
    import {Note} from '../model/note';
    import {createEventDispatcher} from 'svelte';

    export let note: Note

    const dispatcher = createEventDispatcher<{noteRemoved: Note}>()

    function removeNote() {
        dispatcher('noteRemoved', note);
    }
</script>

<style lang="scss">
  .note-tile {
    padding: 16px;
    border: 1px solid gray;

    .title-bar {
      margin-bottom: 12px;
      display: flex;

      .remove-button, .title {
        vertical-align: middle;
      }

      .title {
        font-size: 20px;
        font-weight: bolder;
        flex: 1;
      }
    }

  }
</style>

<div class="note-tile">
    <div class="title-bar">
        <span class="title">{note.title}</span>
        <button class="remove-button" on:click={removeNote}>x</button>
    </div>
    <div class="content">{note.content}</div>
</div>