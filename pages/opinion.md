---
layout: page
title: Opinion
permalink: /opinion/
---

Opinion pieces written by yours truly. Views expressed here at not necessarily held by me still, nor necessarily well researched or evidence-based.

<ul class="post-list">
    {%- for post in site.categories.opinion -%}
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