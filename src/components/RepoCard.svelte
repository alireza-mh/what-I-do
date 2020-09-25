<script lang="ts">
  import { GithubItem } from "src/routes/about.svelte";
  export let cardInfo: GithubItem;
  console.log(cardInfo);
</script>

<style lang="scss">
  .tb-repo-card {
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
  }
  .repo-card-title {
    a {
      color: #0366d6;
      text-decoration: none;
      font-weight: 500;
    }
  }
</style>

<div class="tb-repo-card">
  <div class="repo-card-title">
    <img src="/assets/book.svg" alt="repo book icon" />
    <a class="repo-card-link" href={cardInfo.url}>{cardInfo.name}</a>
  </div>
</div>
