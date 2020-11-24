<script>
  import { Posts } from "../../posts";
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<h1>Blog Starter</h1>

{#each Posts as post}
  <article>
    <a href="/blog/{post.postSlug}">
      <h3>{post.title}</h3>
      <p>{post.desc}</p>
    </a>
  </article>
{/each}
