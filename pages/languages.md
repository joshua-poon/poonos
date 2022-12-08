---
layout: page
title: Languages
permalink: /languages/
---
During my childhood, I studied Chinese, French, Latin and VCE English Language formally, and from there, I began a passion for learning languages and the potential that it yields.

Some languages I will cover are English (of course), Chinese, French, Latin, Ancient Greek and German.

I will also look at my project [@medetymology](https://www.instagram.com/medetymology), language pedagogy, the history of English, the evolution of scripts and how all of these interlink.

To check out my (incomplete) linguistics journey, [click here][/life/language-journey].

<ul class="post-list">
    {%- for post in site.categories.languages -%}
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