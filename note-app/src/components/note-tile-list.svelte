<script lang="ts">
    import {Note} from '../model/note';
    import NoteTile from './note-tile.svelte';

    export let notes: Note[];
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
        <NoteTile note={note} on:noteRemoved/>
    {/each}
</div>

