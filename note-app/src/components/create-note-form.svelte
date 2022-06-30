<script lang="ts">
    import {Note} from '../model/note';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher<{ 'noteSubmitted': Note }>();

    function onSubmit(e: Event) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const note: Note = {
            title: formData.get('title') as string,
            content: formData.get('content') as string
        };
        dispatch('noteSubmitted', note);
    }
</script>

<style lang="scss">
  .create-note-form {
    .field {
      label {
        display: inline-block;
        width: 64px;
        font-weight: bolder;
        vertical-align: top;
      }

      input, textarea {
        width: 200px;
      }

      margin-bottom: 16px;
    }

    textarea {
      resize: vertical;
      height: 50px;
    }

    .submit-button {
      width: 208px;
      margin-left: 67px;
    }
  }
</style>

<h2>Create a note</h2>
<form class="create-note-form" on:submit|preventDefault={onSubmit}>
    <div class="field">
        <label for="title">Title:</label>
        <input id="title" name="title" type="text">
    </div>
    <div class="field">
        <label for="content">Content:</label>
        <textarea id="content" name="content"></textarea>
    </div>
    <input class="submit-button" type="submit">
</form>