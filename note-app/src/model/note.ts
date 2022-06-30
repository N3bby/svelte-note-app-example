
// Class, but I'm going to use it only as a type
// For some reason svelte doesn't want to import a type (the compiler removes it or something?)
export class Note {
    title!: string;
    content!: string;
}