<script>
    import Datalist from "$lib/components/Datalist.svelte";
	
	let name = 'world';
	let dataArray = ["Edge", "Chrome", "FireFox", "Opera", "Safari", "Brave", "Edge", "Chrome", "FireFox", "Opera", "Safari", "Brave"];
	let emptyData = [];
	
	$: dataListProps = {
		dataArray: dataArray,
		labelName: "Browser List",
		labelFor: "browsers",
	};
	
	 $: dataListProps2 = {
		dataArray: null,
	};
</script>

<!-- TODO: Need to implement search function -->

<div class="card variant-soft-primary p-4 w-1/3">
	<form class="form" autocomplete="off">
		<Datalist {...dataListProps}>
			<svelte:fragment slot="input">
				<input class="w-full input variant-form-material" name={dataListProps.labelFor} data-list title="datalist-input" type="search" />
			</svelte:fragment>
		</Datalist>
	</form>
</div>