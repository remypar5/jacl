# JACL
**J**ust **A**nother **C**omponent **L**ibrary. A React Library containing genericaly created components to use wherever needed.

This is a work in progress. **JACL** is a showcase and playground for developing myself in the following areas: React, unit testing, and setting up generic, clean code. For now, the project doesn't contain any styling whatsoever. Maybe I will add them later, but there is a slim chance I will, for it kind of defeats the purpose of setting up something generic.

##Current components

* [Icon](#icon)
* [List](#list)
* [Table](#table)

###Icon
A customizable icon component which lets you easily switch between element, library and icon without creating new elements for them. Library defaults to [Font Awesome](http://www.fontawesome.io "Font Awesome") (Font not incuded).

Example:
```
<Icon icon="square-o" />
```
Result:
```
<i class="fa fa-square-o"><i>
```

###List
An easy way of rendering and maintaining list-like data

Example:
```
<List items={['Red', 'Green', 'Blue']} />
```
Result:
```
<ul class="list-group">
	<li class="list-group-item">Red</li>
	<li class="list-group-item">Green</li>
	<li class="list-group-item">Blue</li>
</ul>
```

###Table
Implementing [List](#list) for the body, and taking (optional) custom column configurations, makes it easy to create a simpel table with little effort. It is the current component I'm working on.

Example:
```
<Table items={[{id: 1, color: 'Red'}, {id: 2, color: 'Green'}, {id: 3, color: 'Blue'}]} />
```
Result:
```
<table class="table">
	<thead class="table__head">
		<tr class="table__row">
			<th class="table__cell table__cell--id">id</th>
			<th class="table__cell table__cell--color">color</th>
		</tr>
	</thead>
	<tbody class="table__body">
		<tr class="table__row">
			<td class="table__cell table__cell--id">1</td>
			<td class="table__cell table__cell--color">Red</td>
		</tr>
		<tr class="table__row">
			<td class="table__cell table__cell--id">2</td>
			<td class="table__cell table__cell--color">Green</td>
		</tr>
		<tr class="table__row">
			<td class="table__cell table__cell--id">3</td>
			<td class="table__cell table__cell--color">Blue</td>
		</tr>
	</tbody>
</table>
```
