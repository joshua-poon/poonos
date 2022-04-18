---
layout: page
title: Life
permalink: /life/
---
Nostalgia comes from Greek, and literally means pain (algia) returning home (nosta). On this section, I document life in the past, including stuff I've done, things I've owned that I really cherish, memories from growing up in Australia.

<p><a href="/life/movies">Movies</a> • <a href="/life/books">Books</a> • <a
                href="/life/tv">TV</a> • <a href="/life/music">Music</a> • <a href="/life/memories">Nostalgia</a></p>

<h3>Films</h3>
<a href="/nostalgia/movies">All the films I've ever watched, whether in cinemas, at home or at school</a>. I update this whenever I watch another one, and occasionally post a film review or two.


<ul class="post-list">
    {%- for post in site.categories.nostalgia -%}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
            </a>
        </h3>
        {%- if site.show_excerpts -%}
        {{ post.excerpt }}
        {%- endif -%}
    </li>
    {%- endfor -%}
</ul>