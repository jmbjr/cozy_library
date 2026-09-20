# Cozy Library Pack Schema v1

A **pack** is a complete swappable configuration for one prototype world. The engine owns the game loop; the pack owns content and presentation configuration.

## Pack
- `id`, `name`, `version`
- `view`: viewport dimensions, haze marker, progress copy
- `shelf`: capacity, columns, slot height
- `bookStyle`: default spine/offer presentation
- `books[]`: book content and semantic facts
- `worldObjects[]`: mappings from facts to visible objects

## Book
```json
{"id":"mumbles","title":"...","text":"...","facts":["species:mumble"]}
```

Books contain no asset paths and no scene-rendering rules.

## World object
```json
{"fact":"species:mumble","className":"mumbles","content":"🟢 🟢","variants":[{"requires":"mumble.clothing:red_hat","content":"🔴 🔴"}]}
```

`content` is deliberately generic in v1: emoji/text today; later packs can evolve this into image/sprite asset references without changing book knowledge.

## Art replacement boundary
The intended asset-pack progression is:
1. starter pack reproduces today's prototype,
2. alternate packs change shelf/view/book/world configuration,
3. image assets replace placeholder `content`,
4. animation/audio can be added as optional presentation fields.

The engine must never need to know that a Mumble is an emoji, PNG, sprite sheet, or animation.
