<script lang="ts">
    import {Note} from '../model/note';
    import NoteTile from './note-tile.svelte';
    import {createEventDispatcher} from 'svelte';

    export let notes: Note[];

    const dispatcher = createEventDispatcher<{noteRemoved: Note}>()
    function removeNote(e: CustomEvent<Note>) {
        dispatcher('noteRemoved', e.detail);
    }
</script>

<style lang="scss">
  .note-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
</style>

<div class="note-list">
    {#each notes as note}
        <NoteTile note={note} on:noteRemoved={removeNote}/>
    {/each}
</div>

