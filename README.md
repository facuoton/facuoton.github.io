# Portfolio - Facundo Otón

A premium, dark-themed portfolio website designed for a multimedia designer and art director. Built with modern HTML, CSS, and Vanilla JavaScript, focusing on smooth interactions and visual storytelling.

## Features

- **Cinematic Hero Section:** Full-screen background slider with crossfade transitions and animated text reveal.
- **Interactive Portfolio Grid:** responsive grid layout with hover effects, showcasing photography, video, and design work.
- **Dynamic Modal Viewer:**
  - Supports both **Images** and **Videos**.
  - **Integrated Gallery Slider:** navigation for projects with multiple images (e.g., "Nueva York 2025").
  - Keyboard navigation support (Arrow keys, Escape).
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Performance:** Image preloading for gallery sliders and optimized asset delivery.

## Technologies Used

- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Custom properties (variables), Flexbox, Grid, and CSS animations.
- **JavaScript (Vanilla):** DOM manipulation, modal logic, and slider functionality (no heavy frameworks).
- **Icons:** [Remix Icon](https://remixicon.com/) for UI elements.
- **Fonts:** [Outfit](https://fonts.google.com/specimen/Outfit) (Headings) and [Inter](https://fonts.google.com/specimen/Inter) (Body).

## Project Structure

```
Portfolio/
├── index.html      # Main HTML file
├── style.css       # Main stylesheet
├── assets/         # Images and video files
└── README.md       # Project documentation
```

## Setup

1.  Clone the repository or download the source code.
2.  Open `index.html` in your web browser to view the site.
3.  To edit styles, modify `style.css`.
4.  To update content, edit `index.html`.

## Customization

- **Colors:** Defined in CSS variables within the `:root` selector in `style.css`.
- **Gallery Images:** Managed in the `galleryData` object within the `<script>` tag in `index.html`. To add new images to a gallery, simply add their paths to the corresponding array.

## License

© 2026 Facundo Otón. All rights reserved.
