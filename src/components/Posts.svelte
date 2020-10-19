<script lang="typescript">
  type Post = {
    date: string;
    title: string;
    description: string;
  };
  export let post: Post;
</script>

<style>
  .post__date {
  }
  .post__title {
  }
  .post__description {
  }
</style>

<div class="post">
  <span class="post__title">{post.title}</span>
  <span class="post__title">{post.date}</span>
  <p class="post__date">{post.description}</p>
</div>
