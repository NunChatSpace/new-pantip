<script>
    import {
        Smartphone,
        Heart,
        Home,
        Fence,
        Pipette,
        Store,
        Star,
        Earth,
        CookingPot,
        UsersRound,
        Clover,
        Library,
        Pen,
        Route,
        Trees,
        Images,
        Tv,
        Camera,
    } from "lucide-svelte";
    import { currentMenu } from "../store";
    import { onMount } from "svelte";
    export let label = "";
    export let id = 0;

    let color = $currentMenu === id ? "black" : "#717171";
    $: color = $currentMenu === id ? "black" : "#717171";

    onMount(() => {
        console.log("currentMenu", $currentMenu, id);
    });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="flex flex-col"
    style="color: {color};"
    on:mouseenter={() => (color = "black")}
    on:mouseleave={() => {
        if ($currentMenu !== id) {
            color = "#717171";
        }
    }}
    on:click={() => {
        console.log("onclick", id, $currentMenu);
        $currentMenu = id;
    }}
>
    <div class="flex justify-center">
        {#if label === "แก็ดเจ็ต"}
            <Smartphone {color} />
        {:else if label === "บางรัก"}
            <Heart {color} />
        {:else if label === "ชายคา"}
            <Home {color} />
        {:else if label === "สวนลุมพินี"}
            <Fence {color} />
        {:else if label === "โต๊ะเครื่องแป้ง"}
            <Pipette {color} />
        {:else if label === "จตุจักร"}
            <Store {color} />
        {:else if label === "รวมมิตร"}
            <Star {color} />
        {:else if label === "บลูแพลนเน็ต"}
            <Earth {color} />
        {:else if label === "ก้นครัว"}
            <CookingPot {color} />
        {:else if label === "สีลม"}
            <UsersRound {color} />
        {:else if label === "พรหมชาติ"}
            <Clover {color} />
        {:else if label === "ห้องสมุด"}
            <Library {color} />
        {:else if label === "ถนนนักเขียน"}
            <Pen {color} />
        {:else if label === "ภูมิภาค"}
            <Route {color} />
        {:else if label === "กรีนโซน"}
            <Trees {color} />
        {:else if label === "แกลเลอรี่"}
            <Images {color} />
        {:else if label === "บางขุนพรหม"}
            <Tv {color} />
        {:else if label === "สินธร"}
            <Camera {color} />
        {:else}
            <slot />
        {/if}
    </div>
    {#if label}
        <span class="icon-label flex justify-center" style="color: {color};"
            >{label}</span
        >
    {/if}
</div>

<style>
    .icon-label {
        padding-top: 10px;
        font-size: 10px;
        font-family: "Montserrat", sans-serif;
    }
</style>
