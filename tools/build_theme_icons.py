"""Generate theme versions of the icons — background tile only.

The artwork (lamp, flame, scroll, beads, lotus) keeps its original colours.
Only the tile behind it is recoloured to match each theme.

Output: assets/icons/themes/<theme>/<icon>.svg
Run from the project root:  python tools/build_theme_icons.py
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "icons"
OUT = SRC / "themes"

# Dark tile used by aarti / shloka / mantra icons: (centre, edge, dashed ring)
DARK_TILE = {
    "ivory":  ("#7a2410", "#3e1106", "#a8452a"),
    "sandal": ("#6b4310", "#331f06", "#8f5f1f"),
    "rose":   ("#7d2338", "#3c0f1b", "#a54660"),
    "sage":   ("#2b5a36", "#112617", "#4a7a52"),
    "sky":    ("#1f4f7a", "#0b1f33", "#3d6f9c"),
    "night":  ("#112656", "#07112b", "#254385"),  # original navy suits the dark theme
}
# Light tile behind the home-page emblem: (centre, middle, edge)
LIGHT_TILE = {
    "ivory":  ("#FFF9ED", "#F0DFC4", "#D3B38B"),  # original
    "sandal": ("#fff4dc", "#efd6a0", "#cfa35e"),
    "rose":   ("#fff6f4", "#f6dad6", "#dca6a4"),
    "sage":   ("#f8fcf2", "#deead1", "#a7c296"),
    "sky":    ("#f8fbff", "#dbe8f4", "#a3bfd9"),
    "night":  ("#4a3f33", "#2f2820", "#1d1914"),
}
NAVY = {"#112656": 0, "#07112b": 1, "#254385": 2}


def dark_tile(svg, colours):
    return re.sub("|".join(NAVY), lambda m: colours[NAVY[m.group(0).lower()]], svg, flags=re.I)


def light_tile(svg, colours):
    block = re.search(r'<radialGradient id="bg".*?</radialGradient>', svg, flags=re.S)
    if not block:
        return svg
    stops = iter(colours)
    new = re.sub(r'stop-color="#[0-9a-fA-F]{3,6}"', lambda m: f'stop-color="{next(stops)}"', block.group(0))
    return svg[:block.start()] + new + svg[block.end():]


def main():
    count = 0
    for theme in DARK_TILE:
        folder = OUT / theme
        folder.mkdir(parents=True, exist_ok=True)
        for icon in sorted(SRC.glob("*.svg")):
            svg = icon.read_text(encoding="utf-8")
            if icon.name in ("aarti_icon.svg", "shloka_icon.svg", "mantra_icon.svg"):
                svg = dark_tile(svg, DARK_TILE[theme])
            elif icon.name == "sandalwood_homepage_emblem_full_flower.svg":
                svg = light_tile(svg, LIGHT_TILE[theme])
            # logo + loading icon have no tile: copied unchanged
            (folder / icon.name).write_text(svg, encoding="utf-8")
            count += 1
    print(f"{count} files -> {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
