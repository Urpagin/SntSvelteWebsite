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

<div class="card">
    <!-- <div class="item-index">
        {item.index}
    </div> -->
    <button class="close" on:click={() => handleDelete(item.id)}>X</button>
    <p class="text-display">
        {item.text}
    </p>
</div>



<style>

    .text-display {
        text-align: left;
        padding-left: 10px;
    }
    .card {
      background-color: #0f172a;
      display: grid;
      padding-top: 5px;
      padding-bottom: 5px;
      top: 20px;
      left: 20px;
    }
    
    /* .item-index {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50px;
      height: 50px;
      background: #ff6a95;
      color: #fff;
      border: 1px #eee solid;
      border-radius: 50%;
      padding: 10px;
      text-align: center;
      font-size: 19px;
    } */
  
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
      cursor: pointer;
      background: none;
      border: none;
    }
  </style>
