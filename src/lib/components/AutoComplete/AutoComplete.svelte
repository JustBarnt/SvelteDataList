<script lang="ts">
    import { setContext } from "svelte";
    // Types
    import type { CssClasses } from "@skeletonlabs/skeleton";

    // Props
    /** Set unique name of the input */
    export let name: string;

    // Props (Styles)
    /** Provides classes to set vertical spacing. */
    export let spacing: CssClasses = `space-y-1`;
    /** Provides classes to set border radius styles. */
    export let rounded: CssClasses = `rounded-token`;
    /** Provides classes to set input styles. */
    export let input: CssClasses = `input`;

    // Props (styles) - Items only
    /** Provides classses to set hover background styles. */
    export let hover: CssClasses = 'hover:variant-soft';
    /** Provides classes to set padding styles. */
    export let padding: CssClasses = 'px-4 py-2';
    /** Provides classes to set display styles */
    export let display: CssClasses = `hidden`;

    // Props (a11y)
    export let labelledby: string = ''; 

    // Context
    setContext("rounded", rounded);
    setContext("hover", hover);
    setContext("padding", padding);
    setContext("display", display);

    // Classes
    const cBase: string = 'cursor-pointer -outline-offset-[3px]';

    // Reactive
    $: classesBase = `${cBase} ${spacing} ${rounded} ${$$props.class ?? ''}`;

</script>

<div class="{classesBase}" role="searchbox" aria-labelledby={labelledby} data-testid="datalist">
    <slot name="input"/>
    <slot/>
</div>