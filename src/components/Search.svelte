<script>
    import { Search as SearchIcon } from "lucide-svelte";
    export let placeholder = "Search ...";
</script>

<div class="search-container">
    <input
        type="text"
        {placeholder}
        class="w-full h-full bg-transparent border-none"
    />
    <div class="search-icon">
        <SearchIcon size="16" color="white" />
    </div>
</div>

<style>
    .search-container {
        border-radius: 36px;
        border: 1px solid #dddddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 16px;
        height: 64px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
    .search-container:focus {
        background-color: #ebebeb;
    }

    .search-container input:focus {
        outline: none;
        border: none;
    }

    .search-icon {
        width: 48px;
        height: 48px;
        background-color: #ff385c;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
