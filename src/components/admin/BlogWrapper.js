import React from "react";

import { BlogCard } from "./BlogCard";

export const BlogWrapper = ({ entries, setBlogEntries }) => {
  return entries.map((entry, index) => <BlogCard entry={entry} key={index} setBlogEntries={setBlogEntries}/>);
};
