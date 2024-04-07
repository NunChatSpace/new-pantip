<script>
    import { Menu, User } from "lucide-svelte";
    import { PLATFORM_MOBILE, platform } from "../store";
</script>

{#if $platform === PLATFORM_MOBILE}
    <div class="flex justify-center">
        <div class="user-info-container-mobile flex flex-row">
            <User></User>
        </div>
    </div>
{:else}
    <div class="flex justify-center">
        <div class="user-info-container flex flex-row">
            <Menu />
            <User></User>
        </div>
    </div>
{/if}

<style>
    .user-info-container {
        cursor: pointer;
        padding: 10px 20px; /* Adjust as needed */
        border-radius: 25px; /* Adjust as needed */
        border: 1px solid #dddddd;
        text-align: center;
    }
    .user-info-container-mobile {
        cursor: pointer;
        padding: 10px 20px;
        text-align: center;
    }
</style>
