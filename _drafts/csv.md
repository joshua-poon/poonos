
https://jekyllrb.com/docs/datafiles/

{% assign row = site.data.movies_list[0] %}
{{ row | inspect }}


{% assign row = site.data.movies_list[0] %}
{% for pair in row %}
  {{ pair | inspect }}
{% endfor %}


<table class="table-sortable">
  {% for row in site.data.movies_list %}
  {% if forloop.first %}
  <tr>
    {% for pair in row %}
    <th>{{ pair[0] }}</th>
    {% endfor %}
  </tr>
  {% endif %}

  <tr>
    {% for pair in row %}
    <td>{{ pair[1] }}</td>
    {% endfor %}
  </tr>

  {% endfor %}

</table>

Official
<table>
  {% for row in site.data.authors %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>