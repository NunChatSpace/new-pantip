<script>
    import { Heart, Home, User } from "lucide-svelte";
    import IconLabel from "./IconLabel.svelte";
    import { PLATFORM_MOBILE, PLATFORM_TABLET, platform } from "../store";
</script>

{#if $platform === PLATFORM_MOBILE || $platform === PLATFORM_TABLET}
    <div
        class="footer-container fixed bottom-0 w-full flex justify-center items-center pt-1"
    >
        <div class="grid grid-cols-3 grid-flow-col gap-10">
            <div class="col-span-1">
                <IconLabel>
                    <Home />
                </IconLabel>
            </div>
            <div class="col-span-1">
                <IconLabel>
                    <Heart />
                </IconLabel>
            </div>

            <div class="col-span-1">
                <IconLabel>
                    <User />
                </IconLabel>
            </div>
        </div>
    </div>
{/if}

<style>
    .footer-container {
        height: 40px;
        background-color: white;
    }
</style>
