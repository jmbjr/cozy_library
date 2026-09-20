# Cozy Library

A tiny data-driven prototype about learning an unknown world by collecting books.

## Prototype loop

Three titled books are offered. Pick one to add to the library. Of the two unchosen books, one remains in the offer and one returns to circulation, so it may appear again later. Two books then fill the open offer slots.

Shelved books reveal knowledge, and knowledge changes the world visible outside the library.

## Run

```bash
npm install
npm start
```

Open http://localhost:3000.

## Design principle

Content, game state, and presentation are separated. Books unlock semantic facts; the renderer decides how those facts look. Art can therefore be replaced without rewriting book content or game rules.

See `docs/requirements.md` and `docs/use-cases.md`.
