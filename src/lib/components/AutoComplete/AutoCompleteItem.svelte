<script lang="ts">
    import { getContext } from "svelte";
    // Types
    import type { CssClasses } from "@skeletonlabs/skeleton";

    // Props 
    /** Set the group binding for the radio values. */
    export let group: any;
    /** Set name for value of input. */
    export let name: string;
    /** Set the value of the input. */
    export let value: any;

    // Context
    export let rounded: CssClasses = getContext("rounded");
    export let hover: CssClasses = getContext("hover");
    export let padding: CssClasses = getContext("padding");

    // Classes
    const cBase: string = 'px-4 py-2 cursor-pointer';
    const cLabel: string = 'flex space-x-4';
    

    // Local
    let elemInput: HTMLElement;


    function updateInput(event: Event)
    {
        /** When users clicks get `event.target.parent`, find input element and update its value with `event.target.value`*/
        console.log(event.target)
    }
    
    /** Returns a updated array of dataArray with only results matching the filter based of the value
    * @param searchFor - string to filter data results
    * @param data - an array of strings
    * @return Array string of filtered items
    */
    function filterData(searchFor:string, data: any[])
    {
        if(data === null) return null;

        data.reduce((result: any[], items: string) =>
        {
            let match = items.toLowerCase().includes(searchFor.toLowerCase());
            if(match) result.push(items);
            return result;
        }, []);	

        return data;
    }

    // A11y Key Down Handler
    function onKeyDown(event: KeyboardEvent): void 
    {
        if(['Enter', 'Space'].includes(event.code)){
            event.preventDefault();
            elemInput.click();
        }
    }

    // Reactive
    $: selected = group === value;
    $: classesActive = selected ? hover : '';
    $: classesBase = `${cBase} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ''}`
    $: classesLabel = `${cLabel}`;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<label 
    for={name}
    class="datalist-item {classesBase}"
    role="option"
    aria-selected={selected}
    tabindex="0"
    data-testid="datalist-item"
    on:keydown={onkeydown}
    on:keydown
    on:keyup
    on:keypress
>
    <!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
    <div class="h-0 w-0 overflow-hidden">
        <select id={name} {value} tabindex="-1" on:click>
            {#each group as values} 
                <option value="{values.toLowerCase()}">{values}</option>
            {/each}
        </select>
    </div>

    <!-- NOTE: I believe I will need to do the same selector:focus+div trick to make this items toggle between hidden and flex
               I can get more information perhaps from Chris. 
    -->
    <div class="datalist-label {classesLabel}">
        <div class="datalist-label-content flex-1">
            <slot />
        </div>
    </div>
</label>