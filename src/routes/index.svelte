<script>
  import { Posts } from "../posts.js";
</script>

<h1>Blog Starter</h1>

{#each Posts as post}
  <article>
    <a href="/posts/{post.link}">
      <h3>{post.title}</h3>
      <p>{post.desc}</p>
    </a>
  </article>
{/each}
