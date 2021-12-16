<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .post {
    margin: 0;
  }

  p {
    font-size: 1.2em;
    line-height: 1.55em;
  }

  /* li {
    margin: .2rem 0;
    font-size: 1.1rem;
  } */
</style>

<svelte:head>
  <title>👋🏼</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Hi, I'm Dave. (he/him) 🇦🇷🇨🇴</h1>
    <p>I’m a few things - <a href="https://www.linkedin.com/in/ashleyotherson/" target="_blank">husband</a>, dad, engineering manager at <a href="https://primary.com" target="_blank">Primary</a>, musician, web3 enthusiast, <a href="https://www.discogs.com/user/sickoftalk/collection" target="_blank">record collector</a>, lover of cold brew, <a href="https://letterboxd.com/dvgonzalez/" target="_blank">horror fanatic</a>, <a href="https://at-war-with-radio.simplecast.com/" target="_blank">podcaster</a>, and bad skateboarder.</p>
    <p>I like to grow products, people, and teams 🪴.</p>
    <p>I don't blog much but I like to <a href="https://publish.obsidian.md/dvg" target="_blank">publicly share notes and thoughts (forever under construction)</a>.</p>
    <h2>Other things I do</h2>
    <p>
      <a href="https://publish.obsidian.md/dvg" target="_blank">Research + My Notes</a><br />
      <a href="https://www.atwarwithradio.com/" target="_blank">At War with Radio: A Music Newsletter</a><br />
      <a href="https://at-war-with-radio.simplecast.com/" target="_blank">At War with Radio: Podcast</a><br />
      <a href="https://github.com/definitelyfriends/laser-wallet" target="_blank">Laser Wallet - Browser HNT Wallet</a><br />
      <a href="https://medallion.fm" target="_blank">Medallion</a>
    </p>
    <h2>The social stuff</h2>
    <p>
      <a href="https://www.twitter.com/_daveg/" target="_blank">Twitter</a> |
      <a href="https://www.linkedin.com/in/dvgonzalez/" target="_blank">Linkedin</a> |
      <a href="https://github.com/davegonzalez" target="_blank">Github</a> |
      <a href="https://www.instagram.com/_daveg/" target="_blank">Instagram</a>
      <a href="https://rainbow.me/davegonzalez.eth" target="_blank">Rainbow NFT Gallery</a>
    </p>
    <p>Let's talk!: <a href="mailto:hi@davegonzalez.dev">hi @ davegonzalez dot dev</a></p>
    <hr />
    <div>

      <!-- <h2>Daily/Weekly Notes</h2>
      {#each posts as post}
        {#if post.template === 'note'}
          <p class="post">
            <a href={post.link} target="_blank">
              {post.printDate} - {post.one_liner}
            </a>
          </p>
        {/if}
      {/each} -->


      <h2>Blog Posts</h2>
      {#each posts as post}
        {#if post.template !== 'note'}
          <p class='post'><a rel='prefetch' href='blog/{post.slug}'>{post.printDate} - {post.title}</a></p>
        {/if}
      {/each}
    </div>
  </div>
</div>


<!-- This is a bit of a writing experiment - traditional blogging is not something that I’ve been good with, but keeping a running list of notes and concepts that I write about does resonate with me. I keep my very disorganized notes running in Roam but am tending and organizing them here. These notes will always be “under construction” are inspired by digital gardens.

Fair warning: it’s not always going to make sense. Notes may be left incomplete. Inline comments are welcome.

I’m looking for a new, untethered way to organize thoughts in some spatial dimensions that aren’t by chronology or topic, but more around how function in terms of connecting me to my own intuitions, the world, and to communities. It’s a work-in-progress, so for now you get this random pile of rough notes loosely organized.

I stole a lot of this from Buster Benson. Thanks for making this available and for showing me a way forward. -->
