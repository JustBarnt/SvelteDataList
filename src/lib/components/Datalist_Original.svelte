<script lang="ts">
    import { createEventDispatcher } from "svelte";

    /** Data to display in <li> for DataList*/
    export let dataArray: string[] | null;
    /** Define label name */
    export let labelName = "Untitled";
    /** Define the label for attribute to link the label and the form*/
    export let labelFor = "untitled";
    /** Search filter */
    export const currentSearch = "";
    
    const dispatch = createEventDispatcher();

    /** Needed variables to setup filter functionality*/
    let filteredArray: typeof dataArray = null;

    /** Reactive variable picks up when the bound search term has changed and fitlers/empties the filter as so */
    $: currentSearch !== "" ? filteredArray = filterData(currentSearch, dataArray) : filteredArray = null;

    function updateInput(event: Event)
    {
        /** When users clicks get `event.target.parent`, find input element and update its value with `event.target.value`*/
        const li = event.target as HTMLLIElement;
        const value = li.textContent;
        const input = document.querySelector(`input[name=${labelFor}]`) as HTMLInputElement;
        
        if(value) input.value = value;
    }
    
    /** Returns a updated array of dataArray with only results matching the filter based of the value
    * @param searchFor - string to filter data results
    * @param data - an array of strings
    * @return Array string of filtered items
    */
    function filterData(searchFor:string, data: typeof dataArray)
    {
        if(data === null) return null;

        data.reduce((result: string[], items: string) =>
        {
            let match = items.toLowerCase().includes(searchFor.toLowerCase());
            if(match) result.push(items);
            return result;
        }, [""]);	

        return data;
    }
</script>



<label class="label relative" for={labelFor}>
    <span>{labelName}:</span>
    <slot name="input"> </slot>
    <div id={labelFor} data-list-content class="hidden variant-form-material !bg-surface-500/60 w-full h-fit max-h-40 overflow-x-hidden overflow-y-auto absolute origin-top top-full z-[999]">
        {#if dataArray !== null}
            <ul class="m-0 p-0">
                {#if filteredArray !== null && filteredArray instanceof Array}
                    {#each filteredArray as data}
                        <li class="text-white p-1.5 list-none hover:variant-soft-secondary" on:click={updateInput} on:keypress>{data}</li>
                    {/each}
                {:else}
                    {#each dataArray as data}
                        <li class="text-white p-1.5" on:click={updateInput} on:keypress>{data}</li>
                    {/each}
                {/if}
            </ul>
        {:else}
            <!-- placeholder if data isn't ready-->
            <ul class="placeholders">
                <li class="placeholder animate-pulse"></li>
                <li class="placeholder animate-pulse"></li>
                <li class="placeholder animate-pulse"></li>
            </ul>
        {/if}
    </div>
</label>