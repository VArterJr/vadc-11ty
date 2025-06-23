---
layout: layouts/content-only.njk
title: Blog Posts
description: Thoughts and insights on technology, development, and more
---

## Recent Posts

{% if collections.posts.length > 0 %}

<div class="grid gap-6">
{% for post in collections.posts %}
<article class="card bg-base-100 shadow-xl">
    <div class="card-body">
        <h3 class="card-title">
            <a href="{{ post.url }}" class="link link-hover">{{ post.data.title }}</a>
        </h3>
        {% if post.data.date %}
        <div class="badge badge-outline mb-2">
            {{ post.data.date | dateDisplay }}
        </div>
        {% endif %}
        {% if post.data.description %}
        <p class="opacity-70">{{ post.data.description }}</p>
        {% endif %}
        <div class="card-actions justify-end">
            <a href="{{ post.url }}" class="btn btn-primary btn-sm">Read More</a>
        </div>
    </div>
</article>
{% endfor %}
</div>
{% else %}
<div class="hero min-h-96">
    <div class="hero-content text-center">
        <div class="max-w-md">
            <div class="text-6xl mb-4">📝</div>
            <h3 class="text-2xl font-semibold mb-2">No Posts Yet</h3>
            <p class="opacity-70 mb-6">I'm working on some great content. Check back soon!</p>
            <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
    </div>
</div>
{% endif %}

## Topics I Write About

- Web Development & Technology
- Static Site Generators
- CSS Frameworks & Design Systems
- JavaScript & Modern Web APIs
- Performance & Accessibility
- Development Tools & Workflows

## Subscribe

_Add subscription information here if you plan to have a newsletter or RSS feed_

---

_Want to suggest a topic or have questions about any of these posts? [Get in touch](mailto:vince@vincearter.com)!_
