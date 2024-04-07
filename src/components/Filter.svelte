<script>
    import { onMount } from "svelte";
    import IconLabel from "./IconLabel.svelte";
    import { ChevronLeft, ChevronRight } from "lucide-svelte";

    let forumList = [
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-gadget.svg",
            title: "แก็ดเจ็ต",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-bangrak.svg",
            title: "บางรัก",
        },
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-home.svg",
            title: "ชายคา",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-lumpini.svg",
            title: "สวนลุมพินี",
        },
        {
            imageurl: "https://ptcdn.info/mobile/icon_room/pt-forum-beauty.svg",
            title: "โต๊ะเครื่องแป้ง",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-jatujak.svg",
            title: "จตุจักร",
        },
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-all.svg",
            title: "รวมมิตร",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-blueplanet.svg",
            title: "บลูแพลนเน็ต",
        },
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-food.svg",
            title: "ก้นครัว",
        },
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-silom.svg",
            title: "สีลม",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-horoscope.svg",
            title: "พรหมชาติ",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-library.svg",
            title: "ห้องสมุด",
        },
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-writer.svg",
            title: "ถนนนักเขียน",
        },
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-region.svg",
            title: "ภูมิภาค",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-greenzone.svg",
            title: "กรีนโซน",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-gallery.svg",
            title: "แกลเลอรี่",
        },
        {
            imageUrl: "https://ptcdn.info/mobile/icon_room/pt-forum-tvshow.svg",
            title: "บางขุนพรหม",
        },
        {
            imageUrl:
                "https://ptcdn.info/mobile/icon_room/pt-forum-sinthorn.svg",
            title: "สินธร",
        },
    ];

    let atStart = true;
    let atEnd = false;

    let scrollContainer;
    let maxScrollLeft = 0;
    const scrollLeft = () => {
        scrollContainer.scrollLeft -= 100;
    };

    const scrollRight = () => {
        scrollContainer.scrollLeft += 100;
        atEnd =
            scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
            scrollContainer.scrollWidth;

        console.log(
            "scrollContainer.scrollLeft",
            scrollContainer.scrollLeft,
            scrollContainer.offsetWidth,
            scrollContainer.clientWidth,
            scrollContainer.scrollWidth
        );
    };

    onMount(() => {
        maxScrollLeft =
            scrollContainer.scrollWidth - scrollContainer.offsetWidth;
        scrollContainer.addEventListener("scroll", (e) => {
            if (e.target.scrollLeft >= maxScrollLeft) {
                const _left = e.target.scrollLeft;
                const _offsetWidth = scrollContainer.offsetWidth;
                const _scrollWidth = scrollContainer.scrollWidth;
                atEnd = _left + _offsetWidth >= _scrollWidth;
                atStart = false;
                return;
            } else {
                atEnd = false;
                atStart = false;
            }

            if (e.target.scrollLeft === 0) {
                atEnd = false;
                atStart = true;
            }
        });
    });
</script>

<div class="flex justify-center items-center mx-auto" style="width: 90%;">
    {#if !atStart}
        <button
            class="chevron chevron-left"
            type="button"
            on:click={scrollLeft}
        >
            <ChevronLeft size={16}></ChevronLeft>
        </button>
    {:else}
        <div style="width: 32px; height: 32px;"></div>
    {/if}
    <div
        class="flex gap-4 pt-4 scroll-container"
        style="overflow-x: auto; white-space: nowrap;"
        bind:this={scrollContainer}
    >
        {#each forumList as forum}
            <IconLabel label={forum.title}></IconLabel>
        {/each}
    </div>
    {#if !atEnd}
        <button class="chevron" type="button" on:click={scrollRight}>
            <ChevronRight size={16}></ChevronRight>
        </button>
    {:else}
        <div style="width: 32px; height: 32px;"></div>
    {/if}
</div>

<style>
    .chevron {
        width: 32px;
        height: 32px;
        border: 2px solid #dddddd;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .chevron:hover {
        transform: scale(1.1); /* Make it a little bigger */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add box shadow */
    }

    .chevron-left {
        background: linear-gradient(to right, white, transparent);
    }

    .scroll-container {
        overflow-x: auto;
        scroll-behavior: smooth;
        scrollbar-width: none; /* For Firefox */
        -ms-overflow-style: none; /* For Internet Explorer and Edge */
    }

    .scroll-container::-webkit-scrollbar {
        width: 0px; /* For Chrome, Safari, and Opera */
    }
</style>
