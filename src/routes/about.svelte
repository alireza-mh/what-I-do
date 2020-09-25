<script context="module" lang="ts">
  export function preload({ params, query }) {
    return this.fetch(`/githubapi.json`)
      .then((r) => r.json())
      .then((githubs) => {
        return { githubs };
      });
  }
  export type GithubItem = {
	node:{
		descriptionHTML: string,
		stargazers:{
			totalCount: number;
		},
		name: string,
		updatedAt: string,
		url: string,
	}
  } 
</script>

  
<script lang="ts">
import RepoCard from 'src/components/RepoCard.svelte';

  export let githubs: IGithub;
  export let githubDatas: GithubItem[] = githubs.data.user.pinnedItems.edges; 
  
 
  interface IGithub{
	  data: {
		  user:{
			  pinnedItems:{
				  edges: Array<GithubItem>
				  totalCount: number;
			  }
		  }
	  }
  }
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>
<p class="justify-text">
  I'm FrontEnd developer insterst with performance and developer exprience
  problems. I'm also like contributing to open source projects. Here I share my
  thoughts and expriences hope you find it useful
</p>
<RepoCard/>
{#each githubDatas as githubData}
{/each}
