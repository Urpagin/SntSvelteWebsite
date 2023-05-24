<script>
  import {v4 as uuidv4} from 'uuid'
  import { RandomItemStore } from '../stores';

  let text = ''
  let chosenText = ''


  const resetList = () => {
    RandomItemStore.set([]) // Set the list to an empty array
    chosenText = ''
  }
  

  const randomPick = () => {
    console.log(RandomItemStore[0])

  let items = []

  // Subscribe to the RandomItemStore
  RandomItemStore.subscribe((value) => {
    items = value
  })()

  if (items.length === 0) {
    console.log(`Cannot random pick an item - item list empty. (items:${items})`)
    return
  }

  // Return a random item from the store
  chosenText = items[Math.floor(Math.random() * items.length)]['text']
  }

  const handleSubmit = () => {

    if (!text) {
      console.log(``)
      return;
    }

    const newRandomItem = {
    id: uuidv4(),
    text,
    }

    RandomItemStore.update((currentRanndomItem) => {
    return [newRandomItem, ...currentRanndomItem]
    })

    text = ''
  }

</script>
<div class="custom-card">

    <header>
      <h2 class="explanation">Add an item to the list!</h2>
    </header>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <!-- <input type="text" on:input={handleInput} bind:value={text} placeholder="Item"> -->
      <input type="text" placeholder="Item" bind:value={text} class="input input-bordered w-full max-w-xs input-random mr-2" />
        <button class="btn btn-outline btn-add" type="submit">Add Item</button>
        <button class="btn btn-outline btn-random-pick" type="button" on:click={randomPick}>Random Pick</button>
        <button class="btn btn-outline btn-reset" type="button" on:click={resetList}>Reset List</button>

    </div>
  
  </form>
</div>
  <h1 class="overline tracking-wide text-2xl result-header">Result: {chosenText} </h1>

<style>
  .custom-card {
    background-color: #0f172a;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 10px;
        padding-left: 10px;
        margin-top: 1%;
        margin-right: 35%;
        margin-left: 30%;
        border-radius: 20px;
  }
  .result-header {
    padding-left: 10px;
    padding-bottom: 20px;
    padding-top: 30px;
    text-align: center;
  }
  .explanation {
    padding-bottom: 10px;
    text-align: center;
  }
</style>

