---
layout: page
title: Languages
permalink: /languages/
---
Languages

{% for post in site.categories.languages %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}