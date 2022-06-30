<script lang="ts">
    import NoteTileList from '../components/note-tile-list.svelte';
    import CreateNoteForm from '../components/create-note-form.svelte';
    import {Note} from '../model/note';

    let notes: Note[] = [
        {title: 'Note 1', content: 'This is the content of note 1'},
        {title: 'Note 2', content: 'This is the content of note 1'},
        {title: 'Note 3', content: 'This is the content of note 1'},
        {title: 'Note 4', content: 'This is the content of note 1'},
    ];

    function createNote(e: CustomEvent<Note>) {
        notes = [...notes, e.detail];
    }

    function removeNote(e: CustomEvent<Note>) {
        const notesCopy = notes.slice();
        notesCopy.splice(notes.indexOf(e.detail), 1);

        notes = notesCopy;
    }
</script>

<style lang="scss">
  .page {
    margin: auto;
    max-width: 800px;
  }

  .create-note-form {
    margin-top: 36px;
    padding-bottom: 24px;
    margin-bottom: 24px;

    border-bottom: 1px solid gray;
  }
</style>

<div class="page">
    <div class="create-note-form">
        <CreateNoteForm on:noteSubmitted={createNote}/>
    </div>
    <NoteTileList notes={notes} on:noteRemoved={removeNote}/>
</div>