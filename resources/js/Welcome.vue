<template>
  <main>
    <div class="container center svelte-1fuw5ea">
        <h2 class="svelte-1fuw5ea">
            <a href="./" class="svelte-1fuw5ea">🌊 kanye.rest</a>
        </h2> 
        <span class="svelte-1fuw5ea">A free REST API for random Kanye West quotes (Kanye as a Service)</span>
    </div> 
    <div class="container svelte-1fuw5ea">
        <main class="svelte-ymtdwp">
            <div class="top svelte-ymtdwp">
                <a href="https://api.kanye.rest" class="svelte-ymtdwp">https://api.kanye.rest</a> 
                <button class="svelte-ymtdwp">📢 tweet</button>
                 <button class="svelte-ymtdwp">🔄 refresh</button>
            </div> 
            <div class="quote card svelte-ymtdwp">
                <p class="svelte-ymtdwp" style="">"For me giving up is way harder than trying."</p> 
                <span class="svelte-ymtdwp">- Kanye West</span>
            </div>
        </main>
    </div> 
    <div class="container ad svelte-1fuw5ea">
        <main>
            <div>
                <div id="carbonads">
                    <span>
                        <span class="carbon-wrap">
                            <a href="https://srv.carbonads.net/ads/click/x/GTND42JNCKYI6K7JF6ALYKQNCY7IPKJMF6ADEZ3JCYSDC23NCAYIC2JKCABDVKJICWSD42JYCEBDCK7JCVAI6KQKC6SDKK7JCESDTK3EHJNCLSIZ?segment=placement:kanyerest;" class="carbon-img" target="_blank" rel="noopener sponsored">
                            <img src="https://cdn4.buysellads.net/uu/1/118579/1653486627-260x200-stop-overpaying-Mumbai-ads_260x200-Vultr-Cloud-Servers-Now-in-Mumbai.jpg" alt="ads via Carbon" border="0" height="100" width="130" style="max-width: 130px;">
                            </a>
                            <a href="https://srv.carbonads.net/ads/click/x/GTND42JNCKYI6K7JF6ALYKQNCY7IPKJMF6ADEZ3JCYSDC23NCAYIC2JKCABDVKJICWSD42JYCEBDCK7JCVAI6KQKC6SDKK7JCESDTK3EHJNCLSIZ?segment=placement:kanyerest;" class="carbon-text" target="_blank" rel="noopener sponsored">Vultr has landed in India! Deploy servers at a fraction of the cost of Big Tech. Claim your $100 credit today.</a>
                        </span>
                        <a href="http://carbonads.net/?utm_source=kanyerest&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" class="carbon-poweredby" target="_blank" rel="noopener sponsored">ads via Carbon</a>
                    </span>
                </div>
            </div>
        </main>
    </div> 
    <div class="container svelte-1fuw5ea">
        <main>
            <div class="card svelte-1pn81mk">
                <div class="toggle svelte-1pn81mk">
                    <button class="svelte-1pn81mk">➡️ Quotes List</button> 
                    </div> 
                </div>
        </main>
    </div> 
    <div class="container center svelte-1fuw5ea">
        <p class="svelte-1fuw5ea">👋
            <a href="https://twitter.com/ajzbc">@ajzbc</a>
        </p> 
        <p class="svelte-1fuw5ea">
            <a href="https://github.com/ajzbc/kanye.rest">
                <img src="https://img.shields.io/github/stars/ajzbc/kanye.rest?style=social" alt="Github Link">
            </a>
        </p>
    </div>
</main>
</template>

<script>
export default {

}
</script>

<style>
body {
    margin: 0 auto;
    padding: 1rem;
    max-width: calc(550px + 2rem);
    color: var(--main-text);
    box-sizing: border-box;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-weight: 500;
}
.center.svelte-1fuw5ea.svelte-1fuw5ea {
    text-align: center;
}
.container.svelte-1fuw5ea.svelte-1fuw5ea {
    margin-bottom: 2rem;
}
h2.svelte-1fuw5ea.svelte-1fuw5ea {
    margin: 0.8rem 0;
}
h2.svelte-1fuw5ea a.svelte-1fuw5ea, h2.svelte-1fuw5ea a.svelte-1fuw5ea:hover {
    color: var(--main);
    text-decoration: none;
}
main.svelte-ymtdwp {
    display: flex;
    flex-direction: column;
}
.top.svelte-ymtdwp {
    display: flex;
    padding: 0.75rem 1rem;
}
.quote.svelte-ymtdwp {
    position: relative;
}
.card {
    padding: 1rem;
    background-color: hsl(0, 0%, 94%);
    border: 1px solid hsl(0, 0%, 92%);
    border-radius: 10px;
}
.top.svelte-ymtdwp {
    display: flex;
    padding: 0.75rem 1rem;
}
a.svelte-ymtdwp {
    margin-right: auto;
}
a {
    color: rgb(0, 100, 200);
    text-decoration: none;
}
button.svelte-ymtdwp {
    margin-left: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 500;
}
#carbonads {
    display: flex;
    z-index: 100;
    background-color: hsl(0, 0%, 94%);
    border: 1px solid hsl(0, 0%, 92%);
    border-radius: 10px;
}
#carbonads span {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
}
#carbonads * {
    margin: initial;
    padding: initial;
}
#carbonads .carbon-wrap {
    display: flex;
    border-radius: 10px;
}
#carbonads .carbon-img {
    display: block;
    margin: 0;
    line-height: 1;
}
#carbonads a {
    color: inherit;
    text-decoration: none;
}
#carbonads .carbon-poweredby {
    padding: 6px 8px;
    font-size: 0.8rem;
    font-weight: 400;
    position: absolute;
    bottom: 0;
    right: 0;
    color: var(--sub);
    border-radius: 0 0 10px 0;
}
.card.svelte-1pn81mk {
    flex-direction: column;
}
div.svelte-1pn81mk {
    display: flex;
}
button.svelte-1pn81mk {
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    text-align: left;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
}
</style>