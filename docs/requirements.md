# Cozy Library — Prototype Requirements

## Purpose
Validate the core fantasy: filling an empty library with intriguing books gradually makes an initially unknown world legible and alive.

## Functional requirements
1. Start with an empty bookshelf and a visually sparse/indistinct outside world.
2. Present exactly three candidate books by title. Titles should be intriguing, playful, or odd without routinely revealing their full consequence.
3. Selection is informed, not a blind draw.
4. Choosing a book shelves it and reveals its text/knowledge.
5. After a choice, exactly one of the two unchosen books remains offered. The other returns to circulation and can reappear later.
6. Fill the two open candidate positions with new books, restoring three offers.
7. Each shelved book unlocks semantic world facts independent of art assets.
8. The outside scene reacts to accumulated facts.
9. The shelf visibly records progress and has finite capacity.
10. Filling the shelf completes the prototype world.

## Architecture requirements
- Book/content definitions live in data, not rendering code.
- Books unlock semantic facts such as `species:mumble` or `mumble.clothing:red_hat`.
- Rendering maps facts to presentation.
- Placeholder art must be replaceable without changing content/rules.
- Prototype requires no database, authentication, Firebase, or build system.
