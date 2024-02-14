# Responsive Images

- Responsive Images

```css
/* html */
<div>
<img></img>
<img></img>
...
<div>

/* css */
div > img {
border-readius: 8px
width:100%;
heigth: auto;
box-shadow: 0px 0px 20px 'gray';
}

div {
display: grid;
	grid-template-columns: repeat (
	auto-fit,
	minmax(150px, 1fr
	);
gap: 20px
}
```
