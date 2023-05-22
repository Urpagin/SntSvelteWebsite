<script>
  // import {onMount, onDestroy} from 'svelte'
  import { RandomItemStore } from '../stores'
  import { fade, scale } from 'svelte/transition'
  import RandomItem from './RandomItem.svelte';
  // let feedback = []

  // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)

  // onMount(() => {
  //   console.log('mounted')
  // })

  // onDestroy(() => {
  //  unsubscribe()
  // })
</script>

{#each $RandomItemStore as ri (ri.id)}
<div in:scale out:fade="{{ duration: 500 }}">
  <RandomItem item={ri} />
</div>
{/each}