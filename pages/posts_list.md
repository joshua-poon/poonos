---
layout: page
permalink: /posts_list

---

{% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> {{post.categories}} &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}