#!/usr/bin/env bash
set -euo pipefail
dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
base="https://github.com/JetBrains/JetBrainsMono/raw/master/fonts/ttf"
curl -fsSL -o "$dir/jbmono.ttf"   "$base/JetBrainsMono-Bold.ttf"
curl -fsSL -o "$dir/jbmono-r.ttf" "$base/JetBrainsMono-Regular.ttf"
echo "Fetched JetBrains Mono (Bold + Regular) into $dir"
