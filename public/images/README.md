# Photos go here

Drop your JPG/PNG/WebP files in this folder, then swap the matching
`<ImagePlaceholder .../>` in `src/App.jsx` for a real `<img>` tag, e.g.:

```jsx
<img
  src="/images/team-at-work.jpg"
  alt="UP team at work"
  className="h-full w-full object-cover rounded-2xl"
/>
```

## Slots used in the site

| Section          | Placeholder label                     | Suggested size        |
|-------------------|-----------------------------------------|------------------------|
| Nav / footer        | Logo (`LogoMark` in `src/App.jsx`)      | square, transparent PNG/SVG |
| Hero collage       | Team at work                            | 1080×1350 (portrait)  |
| Hero collage       | On-location shoot                       | 1080×1350 (portrait)  |
| Hero collage       | Client meeting                          | 1080×1350 (portrait)  |
| Hero collage       | Editing session                         | 1080×1350 (portrait)  |
| Recent work strip  | Studio Madrasi — reel                   | 1080×1080 (square)    |
| Recent work strip  | Replica XI — product shoot              | 1080×1080 (square)    |
| Recent work strip  | Kitchen Herald — LinkedIn campaign      | 1080×1080 (square)    |
| Founder block       | Founder portrait                        | 1080×1350 (portrait)  |

The logo slot (`LogoMark`) works a little differently from the photo
placeholders — swap its contents for:

```jsx
<img src="/images/logo.png" alt="UP logo" className="h-full w-full object-contain" />
```
