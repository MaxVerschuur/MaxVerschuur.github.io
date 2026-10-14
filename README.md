# Verschuur Media

Films and photography by Max Verschuur. A static portfolio with a personal voice, a Miami-inspired blue palette, the supplied heraldic crest, and cinematic motion.

## Run locally

```bash
node serve.mjs
```

Open `http://localhost:3000`. There is no build step. Layout, styles, portfolio content, and interactions are in `index.html`; all media and fonts are served locally. `.nojekyll` supports GitHub Pages hosting from the repository root.

## Selected work

The six projects appear in this order:

1. **Zeelander Yachts** — `Zeelander_Web.mp4`, with its portrait-format poster.
2. **ZTE Nubia at TwitchCon** — a branded cover made from the supplied Nubia logo; `02.png` leads its event photography gallery.
3. **Iceland Travel** — `Video_Web_Full.mp4`, also used for the homepage showreel/background.
4. **Eelco de Boer Aftermovie** — `after_website_720p.mp4`.
5. **Gym Groesbeek Promotion** — `Gym_Promotion_Web.mp4`, promotional film.
6. **Dreameaze** — `dreameaze-1600.webp`, brand photography.

Edit the JavaScript `projects` array to update project titles, clients, images, descriptions, and services. Static card markup mirrors that order. A `video` property provides a silent card preview and a film player with controls and audio in the project dialog. Each project’s `photos` array adds its own gallery. Film galleries are labeled **Frames from the film**. Photo previews show the selected photo first and exclude it from the rest of the gallery, so it appears only once within the preview. The close control remains visible while scrolling.

All **25 unique supplied photographs** are grouped under their matching projects or the personal photography collection. Dreameaze has its complete eleven-photo set, including all eight new uploads. MOZA has its three-photo set, including `moza_flight_controller.webp`. These collections open from their linked photo tiles; the six Selected Work cards keep their established order.

The homepage mosaic and social strip contain **photographs only**. Twelve mosaic photographs mix Nubia, MOZA, Dreameaze, travel, and portraits across four moving columns. The two-phone Nubia tile matches the photograph’s original aspect ratio, without letterboxing. The six-photo social strip uses a separate selection. Each homepage portfolio image has one placement across the cards, mosaic, process, social strip, and closing panel. Dreameaze has a curated homepage selection, with the rest inside its project. The exact duplicate `dreameaze-2-1600.webp` is kept as an original upload but is not displayed. The gallery and social strip use no cloned photographs. Mobile uses smaller project cards, mosaic tiles, portrait, process image, and social photographs.

Sixteen distinct stills in `assets/video-stills/` come from the four supplied films and appear inside their film galleries. The process uses a sunlit Iceland mountain frame for **Find the story** and the blue MOZA equipment photograph for **Shape the direction**. Image-specific framing keeps subjects in view. All uploaded originals are unchanged.

## Identity and contact

- The current logo is `assets/photos/luxury_heraldic_crest_logo.png`. The homepage uses a smaller, higher crest; navigation, dialogs, and the footer use the same supplied asset. CSS crops the unused canvas and applies an SVG luminance filter to make the paper transparent and the original ink white (or black on light surfaces). The original crest and lettering are preserved.
- The palette uses carbon `#141c23`, paper `#f4f8fa`, Miami-inspired blue `#00a8cc`, and ice blue `#69d9ed`. Light surfaces use the darker accent `#007b98` for readable links.
- Manrope headlines, Switzer body copy, and occasional Playfair story headings are self-hosted. Attribution and licenses are in [assets/fonts/README.md](assets/fonts/README.md).
- Instagram links point to [@max.verschuur](https://www.instagram.com/max.verschuur/).
- The social link reads **IG: max.verschuur**. An **Email me below** link leads to the footer, which shows **Email me.** and the full clickable address `maxverschuur396@gmail.com`.
- Copy is written from Max’s perspective. Project details describe the supplied work without inventing dates, awards, or a team.
- About pairs `max-portrait-1024w.webp` with a personal introduction. The blue framing outline and portrait move with scrolling; the headline reveals as the portrait enters view. The photograph is used once, and reduced motion keeps the portrait and frame still with all text visible.

## Motion and media

The four-stage process moves from **Find the story** to **Shape the direction**, **Capture the moment**, and **Make it flow**. Scrolling on desktop or choosing a step changes the photograph, focus frame, caption, and progress line. Motion animates only transforms and opacity.

The story retains the pinned Zeelander video behind three personal chapters. The closing panel uses the black-and-white elephant photograph. Desktop project cards expand with their media proportions preserved; mobile cards use horizontal snapping. The photo mosaic moves alternate columns as you scroll. The client strip loops every nine seconds. The photo strip crosses its full six-photo sequence in eighteen seconds and recycles the original nodes after they leave the viewport, keeping the motion continuous without repeated images. It pauses offscreen, for open dialogs, keyboard focus, hidden pages, and reduced motion. Individual project photographs reveal gently as they enter view.

Backgrounds and previews load on demand, play silently while visible and active, and pause for open dialogs, hidden pages, and reduced-motion preferences. Dialog players keep the original film format and release their video when closed. The server supports MP4 byte ranges for seeking. Reduced motion disables animated transitions and autoplay.

## Browser review

Use the existing screenshot script unchanged:

```bash
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium node screenshot.mjs http://localhost:3000
```

Screenshots are saved in the ignored `temporary screenshots/` directory. Review the hero, six project previews, process stages, story, contact links, and both themes at desktop and mobile widths. Browser checks should cover actual pointer input, video/image bindings, media pause behavior, process clicks and scroll progression, navigation, and reduced motion.

## Asset credits

Photographs, films, client logos, and the supplied crest in `assets/photos/` belong to Verschuur Media. Posters in `assets/video-posters/` and stills in `assets/video-stills/` are frames from those films, rather than separate photography shoots. Earlier placeholder assets remain available for future editing; reference branding and media are not included in the site.
