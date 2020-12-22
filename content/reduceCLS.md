What is CLS(Cumulative Layout Shift)

How to debug

Quick wins:
1- placeholder for images or data that will be replaced by fetching with fixed width or height.
2- `preload` fonts and set `font-display` property to `optional` to avoid font change that may cuase shifting.
3- Use `translate` for changing positions of element instead of changin `left` or `right` in absolute positioned elements. (Specificly in skeleton!!)
