<script>
    import Text from "./Text.svelte";
    import Search from "./Search.svelte";
    import Filter from "./Filter.svelte";
    import UserInfo from "./UserInfo.svelte";
    import { onDestroy, onMount } from "svelte";
    import { PLATFORM_MOBILE, PLATFORM_TABLET, platform } from "../store";

    let isMobile = false;
    const resizeHandler = () => {
        if (typeof window !== "undefined") {
            isMobile = window.innerWidth < 500;
        }
    };

    onMount(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", resizeHandler);
            // Call once to get initial width
            resizeHandler();
        }
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", resizeHandler);
        }
    });
</script>

{#if $platform === PLATFORM_MOBILE}
    <div class="search-container">
        <Search></Search>
    </div>
    <div class="line"></div>
{:else if $platform === PLATFORM_TABLET}
    <div class="search-container">
        <Search></Search>
    </div>
    <div class="line"></div>
    <Filter></Filter>
{:else}
    <div class=" grid grid-cols-7 grid-flow-col gap-1">
        <div class="col-span-1" style="background-color:#ff385c;">
            <img
                src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
                alt="pantip-logo"
            />
        </div>
        <div class="col-span-5">
            <div class="flex gap-1 justify-center">
                <Text>Home</Text>
                <Text>My Feed</Text>
                <Text>Pantip Pick</Text>
                <Text>Pantip Hitz</Text>
                <Text>Explore</Text>
            </div>
        </div>

        <div class="col-span-1">
            <UserInfo></UserInfo>
        </div>
    </div>
    <div class="search-container">
        <Search></Search>
    </div>
    <div class="line"></div>
    <Filter></Filter>
{/if}

<style>
    .search-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 90%;
        margin: 0 auto; /* Added to center the container horizontally */
    }

    .line {
        margin-top: 20px;
        border-bottom: 0.5px solid #dddddd;
    }
</style>
