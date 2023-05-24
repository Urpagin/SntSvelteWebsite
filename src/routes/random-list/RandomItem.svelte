<script>
    import {RandomItemStore} from '../stores'
    import Card from './Card.svelte'
    export let item

    const handleDelete = (itemId) => {
        RandomItemStore.update((currentItem) => {
            return currentItem.filter(item => item.id != itemId)
        })
    }
</script>

<div class="container">
    <div class="space-x-4 space-y-4 card">
        <button class="close" on:click={() => handleDelete(item.id)}>X</button>
        <p class="text-display">
            {item.text}
        </p>
    </div>
</div>


<style>

    .container {
        display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    
  }

  .card {
    background-color: #17233c;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    white-space: normal;
    overflow-wrap: break-word;
  }

    .text-display {
        text-align: left;
        padding-left: 10px;
    }
  </style>
