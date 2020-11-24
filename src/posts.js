import _ from "lodash";
import allPost from "./posts/*.md";

export const Posts = _.chain(allPost)
  .map(transform)
  .orderBy("date", "desc")
  .value();

export function transform({ filename, html, metadata }) {
  const postSlug = filename.replace(/\.md$/, "");

  const date = new Date(metadata.date);

  return {
    ...metadata,
    filename,
    html,
    postSlug,
    date,
  };
}

export function findPost(postSlug) {
  return _.find(Posts, { postSlug });
}
