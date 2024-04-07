<script>
    import { onMount } from "svelte";
    import Search from "../components/Search.svelte";

    let data;
    onMount(async () => {
        data = await fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => {
                return json.slice(0, 100);
            });

        console.log("data", data);
    });
</script>

{#if data}
    <div class="flex justify-center">
        <div class="grid grid-cols-4 gap-4 mt-10" style="width: 90%;">
            {#each data as d}
                <div class="flex flex-col items-center">
                    <img
                        src={d.thumbnailUrl}
                        alt={d.title}
                        class="w-20 h-20 rounded-full"
                    />
                    <p class="text-sm">{d.title}</p>
                </div>
            {/each}
        </div>
    </div>
{/if}
