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
</style>

<svelte:head>
  <title>👋🏼</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Hi, I'm Dave. (he/him) 🇦🇷🇨🇴</h1>
    <p>I’m a few things - an engineer at The New York Times, musician, <a href="https://www.discogs.com/user/sickoftalk/collection" target="_blank">record collector</a>, lover of cold brew, dad, husband, horror fanatic, and bad skateboarder.</p>
    <p>I like to build and ship in any language, but I'm pretty well-versed in stuff like Javascript/React/good old jQuery, CSS, and Ruby on Rails.</p>
    <p>Let's talk!: <a href="mailto:dave@bitshifter.co">dave at bitshifter dot co</a></p>
    <p>Here's a quick list of labor:</p>
    <ul>
      <li>Marca (name still TBD) - 05/2020 - Present - Solo Project - Svelte, Sapper, Ruby on Rails</li>
      <li><a href="https://www.nytimes.com/" target="_blank">The New York Times</a> - 06/2019 - Present - Software Engineer - React/Node</li>
      <li><a href="https://vimeo.com/ott/home" target="_blank">VHX/Vimeo OTT</a> - 07/2015 - 05/2019 - Lead Engineer - React/Ruby on Rails</li>
      <li><a href="https://techcrunch.com/2015/07/29/why-im-quitting-shoppable-video/" target="_blank">Showroom</a> - 06/2014 - 07/2015 - Founding Engineer - Backbone, lots of weird Canvas hacking</li>
      <li><a href="https://www.therealreal.com/" target="_blank">The RealReal</a> - 05/2014 - 01/2015 - Software Engineer - Ruby on Rails</li>
      <li><a href="https://www.crunchbase.com/organization/deliradio-concert-network" target="_blank">DeliRadio/Magnifi.fm</a> - 11/2013 - 05/2014 - Software Engineer - Plain old Javascript, some Meteor.js</li>
    </ul>
    <p>Here's a long list: <a href="https://www.linkedin.com/in/dvgonzalez/" target="_blank">Linkedin</a></p>
    <hr />
    <div>
      <p>I swear I'll get around to writing more:</p>
      {#each posts as post}
        <p class='post'><a rel='prefetch' href='blog/{post.slug}'>{post.printDate} - {post.title}</a></p>
      {/each}
    </div>
  </div>
</div>

