<script context="module">
  import { findPost } from "../../posts";

  export function preload(page) {
    const isPost = findPost(page.params.post);

    return {
      isPost,
    };
  }
</script>

<script>
  export let isPost;
</script>

<h1>{isPost.title}</h1>

{@html isPost.html}
