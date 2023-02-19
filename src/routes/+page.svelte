<script lang="ts">
    import AutoComplete from "$lib/components/AutoComplete/AutoComplete.svelte";
    import AutoCompleteItem from "$lib/components/AutoComplete/AutoCompleteItem.svelte";
	
	let dataArray = ["Edge", "Chrome", "FireFox", "Opera", "Safari", "Brave"];
</script>


<div class="card variant-soft-primary p-4 w-1/3">
	<AutoComplete name="searchbox"> <!-- Takes a slot for the input? -->
		<svelte:fragment slot="input">
			<input class="input" name="browsers" data-testid="datalist-search" type="search" />
		</svelte:fragment>
		<AutoCompleteItem bind:group={dataArray} value="browsers" name="browsers" > <!-- Bind array of data to groups, so select options populate? Then loop through each here to create styleable options? Add on:click event that updates the input vlaue to be the selected item? -->
			{#each dataArray as data}
				<li>{data}</li>
			{/each}
		</AutoCompleteItem>
	</AutoComplete>
</div>