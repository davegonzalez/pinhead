import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    // console.log(post);
    return {
      template: post.template,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      printDate: post.printDate,
      template: post.template,
      one_liner: post.one_liner,
      link: post.link,
      redirect: post.redirect,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
