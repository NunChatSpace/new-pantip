<script>
</script>

<div class="text-hoverable">
    <slot />
</div>

<style>
    .text-hoverable {
        cursor: pointer;
        border-radius: 40%;
        display: inline-block;
        padding: 10px 20px; /* Adjust as needed */
        border-radius: 25px; /* Adjust as needed */
        text-align: center;
    }

    .text-hoverable:hover {
        background-color: #f3f3f3;
    }
</style>
