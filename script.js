:root {
  --bg: #0e0e11;
  --fg: #ffffff;
  --muted: #aaaaaa;
  --radius: 12px;
  --gap: 1rem;
  --max-width: 980px;
  --transition: 180ms ease-out;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

html, body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
}

.hero {
  padding: 4rem 1.5rem 3rem;
  text-align: center;
  background:
    radial-gradient(circle at 50% 0%, rgba(127,0,198,0.25), transparent 70%),
    #111115;
}
.hero h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem;
}
.tm {
  font-size: 0.65em;
  vertical-align: super;
}
.tagline {
  margin: 0.25rem 0 1.25rem;
  color: var(--muted);
}
.swatch-main {
  width: 200px;
  height: 200px;
  margin: 1.5rem auto;
  border-radius: var(--radius);
  background: var(--swatch);
  box-shadow: 0 0 60px rgba(127,0,198,0.3);
}
.meta {
  margin-top: 0.75rem;
  color: var(--muted);
  font-size: 0.9rem;
}
.btn {
  display: inline-block;
  margin-top: 1.25rem;
  padding: 0.75rem 1.2rem;
  border-radius: var(--radius);
  background: var(--color-aetherion);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: opacity var(--transition);
}
.btn:hover { opacity: 0.9; }
.btn.small {
  padding: 0.35rem 0.75rem;
  font-size: 0.9rem;
}

.content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2.5rem 1rem 4rem;
}
.content h2 {
  margin-top: 2.5rem;
}

.swatches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: var(--gap);
}
.swatch {
  height: 90px;
  border-radius: var(--radius);
  background: var(--swatch);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset;
}

pre {
  background: #1a1a1d;
  color: #eaeaea;
  padding: 1rem;
  border-radius: var(--radius);
  overflow-x: auto;
  font-size: 0.9rem;
}

.gradients {
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
.gradient {
  height: 160px;
  border-radius: var(--radius);
  background: var(--g);
}

.note {
  color: var(--muted);
  font-size: 0.9rem;
}

.footer {
  padding: 2rem 1rem 3rem;
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
}
