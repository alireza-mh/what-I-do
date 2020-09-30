<script lang="ts">
  import { GithubItem } from "src/routes/about.svelte";
  import StarSvg from "./assets/StarSVG.svelte";
  export let cardInfo: GithubItem;
</script>

<style lang="scss">
  $text-gray: #586069;
  $text-link: #0366d6;
  .tb-repo-card {
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    padding: 16px;
  }
  .repo-card-title {
    a {
      color: $text-link;
      text-decoration: none;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .repo-card-meta {
    display: flex;
  }
  .repo-card-description,
  .repo-card-meta-stargazer,
  .repo-card-meta-language {
    color: $text-gray;
    font-size: 12px;
  }
  .repo-card-description {
    margin-top: 8px;
    margin-bottom: 16px;
  }
  .repo-card-meta-language {
    display: flex;
    .repo-card-meta-language-bullet {
      height: 16px;
      width: 16px;
      border-radius: 100%;
      margin-right: 5px;
    }
  }
  .repo-card-meta-stargazer {
    display: flex;
    margin: 0 20px;
    cursor: pointer;
    span {
      margin: 0 5px;
    }
    &:hover {
      color: $text-link;
      :global.octicon-star {
        fill: $text-link;
      }
    }
  }
  :global.octicon-star {
    fill: $text-gray;
  }
</style>

<div class="tb-repo-card">
  <div class="repo-card-title">
    <img src="/assets/book.svg" alt="repo book icon" />
    <a class="repo-card-link" href={cardInfo.url}>{cardInfo.name}</a>
  </div>
  <div class="repo-card-description">
    {@html cardInfo.descriptionHTML}
  </div>
  <div class="repo-card-meta">
    <div class="repo-card-meta-language">
      <span
        class="repo-card-meta-language-bullet"
        style={`background: ${cardInfo.primaryLanguage.color}`} />{cardInfo.primaryLanguage.name}
    </div>
    <div class="repo-card-meta-stargazer">
      <StarSvg /><span>{cardInfo.stargazers.totalCount}</span>
    </div>
  </div>
</div>
