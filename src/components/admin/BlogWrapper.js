import React from "react";

import { BlogCard } from "./BlogCard";

export const BlogWrapper = ({ entries }) => {
  return entries.map((entry, index) => <BlogCard entry={entry} key={index} />);
};
