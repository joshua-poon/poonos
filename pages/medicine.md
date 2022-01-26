---
layout: page
title: Medicine
permalink: /medicine/
---

In 2022, I'm a second year medical student at Monash University, Melbourne, Australia. Here are my complete journal entries and notes on the course, as well as observations on the Australian health system in general, as someone who works at a GP clinic and a Pharmacy.

<ul class="post-list">
    {%- for post in site.categories.medicine -%}
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