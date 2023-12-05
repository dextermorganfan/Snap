import{_ as i,o as s,c as a,R as e}from"./chunks/framework.CHKX9sr8.js";const g=JSON.parse('{"title":"Snap","description":"","frontmatter":{},"headers":[],"relativePath":"api/snap.md","filePath":"api/snap.md"}'),n={name:"api/snap.md"},t=e(`<h1 id="snap" tabindex="-1">Snap <a class="header-anchor" href="#snap" aria-label="Permalink to &quot;Snap&quot;">​</a></h1><p>The public main of the Snap class.</p><h2 id="init-data" tabindex="-1"><code>.Init(data)</code> <a class="header-anchor" href="#init-data" aria-label="Permalink to &quot;\`.Init(data)\`&quot;">​</a></h2><p>Initialize information about the grids/plots in your game.</p><h3 id="parameters" tabindex="-1">Parameters: <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters:&quot;">​</a></h3><ul><li><code>data</code> (table): Contains essential data for initializing the Snap class. <ul><li><code>gridSize</code> (number): The size of the grid.</li><li><code>plotSize</code> (number): The size of the plot.</li><li><code>buildingPieces</code> (Folder): Folder where all of your building pieces are.</li><li><code>buildingData</code> (Module): Data defining the dimensions of building pieces, along with other informations (optional)</li><li><code>key_1</code> (string): Key identifier for checking where placement started..</li><li><code>key_2</code> (string): Key identifier for checking occupied cells.</li></ul></li></ul><h3 id="usage" tabindex="-1">Usage: <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage:&quot;">​</a></h3><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    gridSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plotSize </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    buildingPieces </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buildingPieces,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    buildingData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buildingData,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key_1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;isStructure&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key_2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;isOccupied&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Snap.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data)</span></span></code></pre></div>`,8),l=[t];function h(p,d,r,k,o,c){return s(),a("div",null,l)}const u=i(n,[["render",h]]);export{g as __pageData,u as default};