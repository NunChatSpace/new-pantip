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
    export let label = "";
    let color = "#717171";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="flex flex-col"
    style="color: {color};"
    on:mouseenter={() => (color = "black")}
    on:mouseleave={() => (color = "#717171")}
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
