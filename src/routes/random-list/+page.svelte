<script>
    import UserInput from './UserInput.svelte';
    // import UserForm from './UserForm.svelte';
    import RandomItemList from './RandomItemList.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<!-- <UserForm /> -->

<UserInput />
<div class="items">
    <RandomItemList />
</div>

<style>

    .items {
        min-height: 68vh;
        display: inline-flex;
        flex-wrap: wrap;
    }
</style>