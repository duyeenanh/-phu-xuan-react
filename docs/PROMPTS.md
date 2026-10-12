# Prompt history — Sprint 1 routing and attraction slices

This is a concise record of the prompts used during the work. Entries are
summarized from the conversation and are not intended to be a verbatim export.

## Documentation and routing

- Prepare `docs/ROUTES.md` from the PRD route inventory, with path, screen,
  access, data, state, next destination, and a Mermaid flow diagram; prepare
  `docs/TASKS.md` as Sprint 1 vertical slices for the home list and detail
  screen; add React Router v8 conventions to `AGENTS.md`.
- Build the route configuration in `src/app/routes.tsx` and
  `src/app/router.tsx`, add a `RootLayout` with `<Outlet />` and navigation,
  include a reusable `ProtectedRoute`, and include a wildcard 404 route.
- Keep `ProtectedRoute` available but do not apply it to routes until an
  authentication source and access policy are defined.

## Attraction list and detail

- Implement the Sprint 1 home-page attraction list and the
  `/attractions/:id` detail flow.
- Use shared attraction data so selecting a card opens the matching detail,
  validate unknown IDs, and provide a link back to the home list.
- Fix the mismatched attraction photos and align images consistently in cards.

## Verification

- Verify that the home page displays the attraction cards, a card opens the
  matching detail page, and the detail page links back to the list.
- Verify that invalid attraction IDs show a not-found state.
