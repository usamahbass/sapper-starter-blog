import _ from "lodash";
import allPost from "./post/*.md";

export const Posts = _.chain(allPost)
  .map(transform)
  .orderBy("date", "desc")
  .value();

export function transform({ filename, html, metadata }) {
  const link = filename.replace(/\.md$/, "");

  const date = new Date(metadata.date);

  return {
    ...metadata,
    filename,
    html,
    link,
    date,
  };
}

export function findPost(link) {
  return _.find(Posts, { link });
}
