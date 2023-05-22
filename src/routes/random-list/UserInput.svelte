<script>
  import {v4 as uuidv4} from 'uuid'
  import { RandomItemStore } from '../stores';
  import Card from './Card.svelte'

  let text = ''
  // truc de modal chosen one oulala
  let chosenText = ''
//   let btnDisabled = true
  let message

//   const handleSelect = e => rating = e.detail

  const handleInput = () => {
    message = null
  }

  const randomPick = () => {
    console.log(RandomItemStore[0])

  let items = []

  // Subscribe to the RandomItemStore
  RandomItemStore.subscribe((value) => {
    items = value
  })()

  // Return a random item from the store
  chosenText = items[Math.floor(Math.random() * items.length)]['text']
  }

  const handleSubmit = () => {

    if (!text) {
      console.log('Could not add item, text is null! text=' + text)
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

  const truc = () => {
    console.log(RandomItemStore[0]);
  }

</script>
<!-- BEGIN -->
<Card>
    <header>
      <h2>Add an item to the list!</h2>
    </header>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <!-- <input type="text" on:input={handleInput} bind:value={text} placeholder="Item"> -->
      <input type="text" placeholder="Item" on:input={handleInput} bind:value={text} class="input input-bordered w-full max-w-xs input-random mr-2" />
        <button class="btn btn-outline btn-add" type="submit" on:click={truc}>Add Item</button>
    </div>
  
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
  </Card>
  
  <!-- <label for="my-modal" class="btn btn-outline btn-random-pick" on:click={randomPick}>open modal</label> -->

  <button class="btn btn-outline btn-random-pick" type="notsubmit" on:click={randomPick}>Random Pick</button>




  <h1>CHOSEN TEXT -- {chosenText} </h1>


  <!-- MODAL RANDOM CHOSEN -->

<!-- The button to open modal -->
<!-- <label for="my-modal" class="btn">open modal</label> -->

<!-- Put this part before </body> tag -->
<!-- <div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free! {chosenText}</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
{#if showModal}
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
      <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free! {chosenText}</p>
      <div class="modal-action">
        <label for="my-modal" class="btn">Yay!</label>
      </div>
    </div>
  </div>
{/if} -->
<!-- END -->

<!-- <div class="main-layout">
  <div class="flex justify-center">
      <div class="flex items-center">
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs input-random mr-2" />
        <button class="btn btn-outline btn-add" type="submit" on:click={truc}>Add Item</button>
      </div>
    </div>
</div> -->
<!-- hover:from-pink-500 hover:to-yellow-500 -->





<!-- 
<style>
    /* .main-layout {
        background-color: #0f172a;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 1%;
        margin-right: 30%;
        margin-left: 30%;
        border-radius: 20px;
    } */
</style>
 -->
