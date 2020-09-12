---
template: post
title: Notes from setting up a Rails + GraphQL server
slug: rails-graphql-notes
draft: false
date: 2020-02-04T16:00:00.000Z
description: >-
  Things I've learned while setting up a new Rails/GraphQL project on a brand
  new computer.
socialImage: “”
category: dev
tags:
  - graphql
  - rails
---
### 1. Install Rails with the version you plan on using

When I first setup this computer, I installed Rails using the system version of Ruby (v2.6.3, it seems). Weeks later, I made the following changes:

* installed [rbenv](https://github.com/rbenv/rbenv "rbenv") to install Ruby 2.7.0
* Set the `GEM_HOME` in my `.zshrc` file to avoid needing `sudo` when installing gems

Rails generators and commands kept pointing to the original version of Ruby **until** I ran `sudo gem install rails`. I'm still not sure why I needed to run it using `sudo`.

### 2. Mixing conventions translates to confusion

Rails convention is to use `snake_case`. GraphQL convention is to use `camelCase`. I spent nearly 30 minutes trying to figure out why my `gql` query was failing, and it's entirely due to the [mixing of case conventions](https://github.com/rmosolgo/graphql-ruby/issues/1953) between the two.

### 3. About query_type.rb

Seems that the norm is to have a huge `query_type.rb` file which is really strange to me. The [graphql-ruby](https://github.com/rmosolgo/graphql-ruby "graphql-ruby") maintainers [liken the query type file to a routes.rb](https://github.com/rmosolgo/graphql-ruby/issues/1825#issuecomment-447304637) type of file since it's handling all of the requests. Regardless, I still think there should be a simple way to break it up. All of the potential solutions I tried either relied on a previous version of `graphql-ruby` or just didn't work.

