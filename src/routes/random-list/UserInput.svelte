<script>
  import {v4 as uuidv4} from 'uuid'
  import { RandomItemStore } from '../stores';
  import Card from './Card.svelte'

  let text = ''
//   let btnDisabled = true
  let message

//   const handleSelect = e => rating = e.detail

  const handleInput = () => {
    message = null
  }

  const handleSubmit = () => {
    const newRandomItem = {
    id: uuidv4(),
    text,
    }

    RandomItemStore.update((currentRanndomItem) => {
    return [newRandomItem, ...currentRanndomItem]
    })

    text = ''
  }

  const truc = () => {
    console.log(RandomItemStore[0]);
  }

</script>
<!-- BEGIN -->
<Card>
    <header>
      <h2>How would you rate your service with us?</h2>
    </header>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} placeholder="Item">
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
  </Card>
<!-- END -->


<!-- hover:from-pink-500 hover:to-yellow-500 -->

<div class="main-layout">

    <!-- <div class="card-input">
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs input-random" />
        <button class="btn btn-outline btn-add">Add Item</button>
    </div> -->
    
    <div class="flex justify-center">
        <div class="flex items-center">
          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs input-random mr-2" />
          <button class="btn btn-outline btn-add" type="submit" on:click={truc}>Add Item</button>
        </div>
      </div>
</div>




<style>
    .main-layout {
        background-color: #0f172a;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 1%;
        margin-right: 30%;
        margin-left: 30%;
        border-radius: 20px;
    }
</style>

