<script>
    import { onDestroy, onMount } from "svelte";
    import Header from "../components/Header.svelte";
    import "../main.css";
    import {
        PLATFORM_DESKTOP,
        PLATFORM_MOBILE,
        PLATFORM_TABLET,
        platform,
    } from "../store";
    import Footer from "../components/Footer.svelte";

    const resizeHandler = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 500) {
                $platform = PLATFORM_MOBILE;
            } else if (window.innerWidth < 1024) {
                $platform = PLATFORM_TABLET;
            } else {
                $platform = PLATFORM_DESKTOP;
            }
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

<Header></Header>
<slot />
<Footer></Footer>
