#!/usr/bin/env python3
"""Render one 1280x640 banner per blog post, personalized with its own
real version, publish date and description -- via the shared template.html
(Chrome headless screenshot), not a fabricated image."""
import glob
import re
import subprocess
import sys
import urllib.parse
from pathlib import Path

import yaml

MONTHS = {
	"en": ["January", "February", "March", "April", "May", "June", "July",
	       "August", "September", "October", "November", "December"],
	"es": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
	       "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
}


def format_date(iso_date, locale):
	y, m, d = str(iso_date).split("-")
	month = MONTHS[locale][int(m) - 1]
	if locale == "es":
		return f"{int(d)} de {month} de {y}"
	return f"{month} {int(d)}, {y}"


def load_frontmatter(path):
	text = Path(path).read_text(encoding="utf-8")
	_, fm, _ = text.split("---", 2)
	return yaml.safe_load(fm)


def main():
	repo_root = Path(__file__).resolve().parents[2]
	blog_dir = repo_root / "src/content/blog"
	out_dir = repo_root / "src/assets/og/blog"
	out_dir.mkdir(parents=True, exist_ok=True)

	files = sorted(glob.glob(str(blog_dir / "podup-*.md")))
	if not files:
		sys.exit("no podup blog posts found")

	for i, path in enumerate(files, 1):
		fm = load_frontmatter(path)
		version = re.search(r"\d+\.\d+\.\d+$", fm["title"]).group(0)
		date = format_date(fm["date"], fm["locale"])
		params = urllib.parse.urlencode({
			"version": version,
			"date": date,
			"highlight": fm["description"],
		})
		out_file = out_dir / f"{fm['urlSlug']}.{fm['locale']}.png"
		url = f"http://localhost:8746/template.html?{params}"
		subprocess.run([
			"google-chrome", "--headless=new", "--disable-gpu", "--hide-scrollbars",
			f"--screenshot={out_file}", "--window-size=1280,640",
			"--default-background-color=00000000", url,
		], check=True, capture_output=True)
		print(f"[{i}/{len(files)}] {out_file.name}")


if __name__ == "__main__":
	main()
