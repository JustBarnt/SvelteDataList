<script>
	import { AppShell } from "@skeletonlabs/skeleton";
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../app.postcss';
</script>

<AppShell slotPageContent="flex items-center justify-center">
	<slot />
</AppShell>
