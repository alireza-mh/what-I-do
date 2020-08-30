<script context="module">
  export async function preload({ params, query }) {
    const github = await this.fetch(`githubapi.json`).then((r) => r.json());
	const posts = await this.fetch(`blog.json`).then((r) => r.json());
	return {github, posts}
  }
</script>

<script>
  import Posts from "../components/Posts.svelte";
  export let posts;
</script>

<style>
  h3 {
    text-align: center;
    margin: 0 auto;
  }

  p {
    margin: 1em auto;
    text-align: left;
  }
</style>

<svelte:head>
  <title>Alireza's Blog</title>
</svelte:head>

<h3>Welcome to this blog</h3>
<p>
  Here I will share my exprience and technical issues that I find intersting.
  Also there maybe some none technical content here but I will try to keep them
  as little as possible.
</p>

<h1>Articles</h1>
{#each posts as post}
  <Posts {post} />
{/each}
