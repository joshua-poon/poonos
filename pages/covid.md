---
layout: page
title: COVID Log
permalink: /covid/
--- 
 
I've been tracking the facts and stats, as well as my feelings during the various lockdowns in my hometown of Melbourne, Australia, as well as our way out of this pandemic.

I started this blog in the beginning of 2022.

Posts from 2021 are backdated to entries to my journal and the various logs I keep, both which I began in 2021.

Posts from 2020 were all written when I began this blog in 2022. The sentiments expressed are those that I felt at the time, as I mentally maintain a record of my feelings by attaching them to events.

The date I wrote the content is within each post itself. The date attached to the title is the date I held those sentiments. I write in the past tense if I am recounting a past event.

I was in Year 12 during 2020, the first year of the COVID-19 pandemic and in my first year of university during 2021.

POSTS BELOW HAVE NOT BEEN COMPLETED

<ul class="post-list">
    {%- for post in site.categories.covid -%}
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