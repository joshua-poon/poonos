---
layout: post
author:
title: "Comparison of pools in Melbourne"
date: 2023-01-09 0:49:11 +1100
tags: movies
categories: sports featured life
permalink: "/swimming"
---

This is a table of comparison of the current (January 2023) prices of a number of pools in Melbourne.
- Price refers to full-time university student concession NOT government concession card (which is significantly cheaper in some instances). *Refers to pools with no student discount
- Multi-pass price refers to the unit price for each individual visit
- In general, swim memberships refer to the adult price, but concession prices are also available.

<style>
  .table-sortable th {
    cursor: pointer;
  }

  .table-sortable .th-sort-asc::after {
    content: "\25b4";
  }

  .table-sortable .th-sort-desc::after {
    content: "\25be";
  }

  .table-sortable .th-sort-asc::after,
  .table-sortable .th-sort-desc::after {
    margin-left: 5px;
  }

  .table-sortable .th-sort-asc,
  .table-sortable .th-sort-desc {
    background: rgba(0, 0, 0, 0.1);
  }
</style>


<table class="table-sortable">
  <thead>
  <tr>
    {% for pair in site.data.swim_prices[0] %}
    <th>{{ pair[0] }}</th>
    {% endfor %}

  </tr>
  </thead>

  <tbody>
  {% for row in site.data.swim_prices %}

  <tr>
    {% for pair in row %}
    <td>{{ pair[1] }}</td>
    {% endfor %}
  </tr>

  {% endfor %}

  </tbody>

</table>

<script src="{{site.baseurl}}/assets/js/table.js"></script>
