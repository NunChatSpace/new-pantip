<script>
    import { onMount } from "svelte";
    import { currentMenu } from "../store";
    import Gadget from "../components/menus/Gadget.svelte";
    import BangRak from "../components/menus/BangRak.svelte";
    import House from "../components/menus/House.svelte";
    import Lumpini from "../components/menus/Lumpini.svelte";
    import Beauty from "../components/menus/Beauty.svelte";
    import Jatujak from "../components/menus/Jatujak.svelte";
    import All from "../components/menus/All.svelte";
    import BluePlanet from "../components/menus/BluePlanet.svelte";
    import Food from "../components/menus/Food.svelte";
    import Silom from "../components/menus/Silom.svelte";
    import Horoscope from "../components/menus/Horoscope.svelte";
    import Library from "../components/menus/Library.svelte";
    import Writer from "../components/menus/Writer.svelte";
    import Region from "../components/menus/Region.svelte";
    import GreenZone from "../components/menus/GreenZone.svelte";
    import Gallery from "../components/menus/Gallery.svelte";
    import TvShow from "../components/menus/TvShow.svelte";
    import Sinthorn from "../components/menus/Sinthorn.svelte";
    import { fly } from "svelte/transition";

    /**
     * @type {any}
     */
    let data;
    onMount(async () => {
        data = await fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((json) => {
                return json.slice(0, 100);
            });
    });
    let currentComponent = [$currentMenu];
    $: currentComponent = [$currentMenu];
</script>

{#if $currentMenu === 1}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Gadget></Gadget>
    </div>
{:else if $currentMenu === 2}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <BangRak></BangRak>
    </div>
{:else if $currentMenu === 3}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <House></House>
    </div>
{:else if $currentMenu === 4}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Lumpini></Lumpini>
    </div>
{:else if $currentMenu === 5}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Beauty></Beauty>
    </div>
{:else if $currentMenu === 6}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Jatujak></Jatujak>
    </div>
{:else if $currentMenu === 7}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <All></All>
    </div>
{:else if $currentMenu === 8}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <BluePlanet></BluePlanet>
    </div>
{:else if $currentMenu === 9}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Food></Food>
    </div>
{:else if $currentMenu === 10}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Silom></Silom>
    </div>
{:else if $currentMenu === 11}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Horoscope></Horoscope>
    </div>
{:else if $currentMenu === 12}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Library></Library>
    </div>
{:else if $currentMenu === 13}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Writer></Writer>
    </div>
{:else if $currentMenu === 14}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Region></Region>
    </div>
{:else if $currentMenu === 15}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <GreenZone></GreenZone>
    </div>
{:else if $currentMenu === 16}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Gallery></Gallery>
    </div>
{:else if $currentMenu === 17}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <TvShow></TvShow>
    </div>
{:else if $currentMenu === 18}
    <div transition:fly={{ x: -100, duration: 500 }}>
        <Sinthorn></Sinthorn>
    </div>
{/if}
