
<script>
export let data
let nasaImg = data.nasa.url
let nasaExplanation = data.nasa.explanation
</script>

<div class="main-div">

    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white title-nasa">Astronomy Picture of the Day</h1>
    <h1>{data.nasa.title}</h1>
    <div class="divider"></div> 


    <div class="img-blockquote">
        <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p class="explanation-nasa-txt font-medium text-2xl">Explanations</p>
            <p class="text-xm italic font-medium leading-relaxed text-gray-900 dark:text-white">"{nasaExplanation}"</p>
        </blockquote>
        <div class="divider lg:divider-horizontal"></div>
        <img class="nasa-img" src={nasaImg} alt="Daily picture from the Nasa">
        <div class="divider lg:divider-horizontal"></div>
        <!-- <p class="info-pic">More information about this picture:</p> -->
        <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank"><button class="button-info btn btn-outline btn-wide btn-accent">Information & Credits</button></a>
    </div>

</div>

<style>

    .explanation-nasa-txt {
        text-align: left;
        padding-bottom: 8px;
    }

    .title-nasa {
        padding-top: 30px;
    }
    .main-div {
        min-height: 100vh;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 50px;
        text-align: center;
    }
    .nasa-img {
        height: 300px;
        width: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 10px;
    }
    .img-blockquote {
        display: flex;
    }
</style>
