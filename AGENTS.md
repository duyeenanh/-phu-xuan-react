# Repository guidance

## Routing and navigation

- This project uses `react-router` v8. Import router APIs from `react-router`;
  do not add or import `react-router-dom`.
- Declare route objects in `src/app/routes.tsx`. Keep router construction in
  `src/app/router.tsx`, and connect the router through `RouterProvider` in the
  application entry point.
- Use `<Link>` or `<NavLink>` for in-app navigation. Use `<Navigate replace>`
  for redirects that should not add an obsolete history entry.
- Keep shared page chrome in `RootLayout` and render matched child routes with
  `<Outlet />`. Routes that intentionally do not use the shared layout (such as
  the administrator sign-in page) must be explicit in the route configuration.
- Read dynamic parameters with `useParams` from `react-router`. Treat every
  parameter as untrusted input: validate and convert it before lookup, and
  render a deliberate not-found state for malformed or unknown values. Do not
  assume a parameter is numeric just because its route segment is named `id`.
- Validate required navigation state (for example, `location.state` used by
  checkout) at the destination. A route must handle direct navigation where
  in-memory navigation state is absent.
- Keep access-control decisions explicit in route specifications and implement
  guards only when requirements define the roles and behavior. A hidden link is
  not authorization.
- Document route paths, screen, access, required data/state, error behavior, and
  navigation outcomes in `docs/ROUTES.md`; update that document when route
  behavior changes.
- Follow the route inventory and confirmed requirements in `docs/PRD.md` when
  present. If a requirement is missing or contradictory, record it for
  clarification rather than inventing security, persistence, or booking
  behavior.
