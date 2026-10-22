#!/usr/bin/env python3
"""Assemble a standalone HTML page from the editable assets and glossary.json."""
from pathlib import Path
import json
p=Path(__file__).resolve().parents[1]
html=(p/'index.template.html').read_text(encoding='utf-8')
inputs={
    '/*__INLINE_CSS__*/':(p/'assets/style.css').read_text(encoding='utf-8'),
    '/*__INLINE_APP__*/':(p/'assets/app.js').read_text(encoding='utf-8'),
    '/*__INLINE_FALLBACK__*/':(p/'assets/fallback.js').read_text(encoding='utf-8'),
    '/*__INLINE_3D__*/':(p/'assets/scene.js').read_text(encoding='utf-8'),
    '/*__INLINE_DATA__*/':(p/'glossary.json').read_text(encoding='utf-8').replace('</','<\\/'),
}
for placeholder,content in inputs.items():
    if placeholder not in html: raise ValueError('Missing '+placeholder)
    html=html.replace(placeholder,content)
(p/'index.html').write_text(html,encoding='utf-8')
print('Built index.html with',len(json.loads(inputs['/*__INLINE_DATA__*/'])['terms']),'terms')
