import _ from "lodash";
import allPost from "./posts/*.md";

export const Posts = _.chain(allPost)
  .map(transform)
  .orderBy("date", "desc")
  .value();

export function transform({ filename, html, metadata }) {
  const post = filename.replace(/\.md$/, "");

  const date = new Date(metadata.date);

  return {
    ...metadata,
    filename,
    html,
    post,
    date,
  };
}

export function findPost(post) {
  return _.find(Posts, { post });
}
