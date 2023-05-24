<script>
    let inputText = ''
    let outputText = ''

    let userDefined = false
    let userDefinedValue = ''

    let separator = ' '
    let selectedValue = 'Space'; // Store the selected value in a reactive variable


    function handleSelect(event) {
    selectedValue = event.target.value; // Update the selectedValue variable on change

    userDefined = (selectedValue === 'User Defined'); // Set selectedValue to true if "User Defined" is selected

    if (selectedValue === 'Space') {
        separator = ' '
    }
    else if (selectedValue === 'Comma') {
        separator = ','
    }
    else if (selectedValue === 'Dot') {
        separator = '.'
    }
    else if (selectedValue === 'None') {
        separator = ''
    }
  }


    function textToBinary() {
        if (userDefined) {
            separator = userDefinedValue
        }
    // Convert each character in the text to binary
    const binaryArray = [...inputText].map((char) => char.charCodeAt(0).toString(2));
    
    // Join the binary values with the separator
    const binaryString = binaryArray.join(separator);
    
    outputText = binaryString;
    return binaryString;
}

</script>

<div class="main">

    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white title">Text to Binary</h1>

    <textarea class="textarea textarea-success input-txt" placeholder="Input" bind:value={inputText} on:input={textToBinary}></textarea>
    <div class="separator">
        <select class="select select-primary w-full max-w-xs list-user" on:change={handleSelect} bind:value={selectedValue}>
            <option>Space</option>
            <option>Comma</option>
            <option>Dot</option>
            <option>None</option>
            <option>User Defined</option>
          </select>

          <input type="text" placeholder="Your separator" class="input input-bordered input-primary w-full max-w-xs" disabled={!userDefined} bind:value={userDefinedValue} />
    </div>
    <textarea class="textarea textarea-success output-txt" placeholder="Output" bind:value={outputText}></textarea>

  

</div>

<style>

.title {
    padding-top: 20px;
}
.main {
    min-height: 93vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    /* height: 500rem; */

    margin-right: 30%;
    margin-left: 30%;
}

.separator {
    display: flex;
  justify-content: center; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
  gap: 15px; /* Gap between the elements */
}

</style>
