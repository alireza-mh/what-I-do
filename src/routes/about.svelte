<script context="module" lang="typescript">
  export function preload({ params, query }) {
    return this.fetch(`/githubapi.json`)
      .then((r) => r.json())
      .then((githubs) => {
        return { githubs };
      });
  }
  export type GithubItem = {
    descriptionHTML: string;
    stargazers: {
      totalCount: number;
    };
    name: string;
    primaryLanguage: {
      name: string;
      color: string;
    };
    updatedAt: string;
    url: string;
  };

  export type GithubItemNode = {
    node: GithubItem;
  };
</script>

<script lang="typescript">
  import RepoCard from "src/components/RepoCard.svelte";

  export let githubs: IGithub;
  export let githubDatas: GithubItemNode[] = githubs.data.user.pinnedItems.edges;

  interface IGithub {
    data: {
      user: {
        pinnedItems: {
          edges: Array<GithubItemNode>;
          totalCount: number;
        };
      };
    };
  }
</script>

<style>
  .card-wrapper {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
</style>

<svelte:head>
  <title>About Me</title>
</svelte:head>
<p class="justify-text">
  I'm FrontEnd developer insterst with performance and developer exprience problems. I'm also like contributing to open
  source projects. Here I share my thoughts and expriences hope you find it useful
</p>
<div class="card-wrapper">
  {#each githubDatas as githubData}
    <RepoCard cardInfo={githubData.node} />
  {/each}
</div>
