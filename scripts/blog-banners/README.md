# Blog post banners

Renders a real, per-post banner for every podup release-note post — same
TTY/violet identity as `ai-context/brand/repos/src/podup.html`, but with the
post's own version, publish date and description baked in via Chrome
headless, not shared marketing art reused across every post.

## Regenerate

```bash
fonts/fetch-fonts.sh              # once — writes fonts/*.ttf (gitignored)
python3 -m http.server 8746 &     # from this directory, so the template reaches ./fonts
python3 generate.py               # reads every src/content/blog/podup-*.md, writes src/assets/og/blog/
```

Requires `google-chrome` on PATH and the `pyyaml` package. Output lands in
`src/assets/og/blog/<urlSlug>.<locale>.png`; each post's frontmatter
`banner:` field points at its own file. Re-run after adding new podup
release posts — it regenerates every banner, so it's safe to run any time.

Edit the shared frame in `template.html`; the hue and glyph are podup's own
(`#b06bff`) since podup is the only product with a blog today.
