# Sprint 1 task breakdown

Sprint 1 delivers two vertical slices from the attraction browsing journey:
view the attraction list and open a selected attraction's details.

**Implementation status:** Both slices are implemented with a shared local
fixture in `src/data/attractions.ts`. The list-to-detail and return-to-list
flows, plus unknown-ID handling, have been verified in the browser.

## S1.6 — Technical verification

- `npm run typecheck` — passed.
- `npm run build` — passed.
- Browser smoke check — passed for opening the attraction list, opening
  `/attractions/1` and `/attractions/2` from their cards, matching detail data,
  returning to `/`, and showing a friendly state for an unknown ID.
- `npm run lint` — not available in the current install because the `eslint`
  executable is not installed.
- No automated test files or test runner are currently configured in the
  project; browser smoke checks were performed manually.

## S1.7 — Version control

The Sprint 1 changes are prepared for the current feature branch. Push status
is recorded after the remote operation.

## Slice 1 — View attraction list (`HomePage`)

**User outcome:** A visitor can open `/`, browse available attractions, and
select one to see its details.

### Tasks

1. **Define a shared attraction data source**
   - Reuse the `DiaDanh` type from `src/types/index.ts`.
   - Provide a single collection that both the list and detail views can query.
   - Use the shared local fixture while the production data/API source awaits
     product confirmation.
2. **Render the list at `/`**
   - Replace the placeholder `HomePage` heading with the attraction list.
   - Show each attraction's name, category, description, and available image.
   - Make each item navigate to `/attractions/:id`.
3. **Handle list states**
   - Provide a populated state and an empty-state message for the current local
     fixture. Add loading and recoverable error states if the source becomes
     asynchronous.
   - Keep the page usable on narrow and wide viewports and provide meaningful
     image alternative text.
4. **Verify the slice**
   - Confirm `/` renders the list and all states.
   - Confirm selecting an item navigates to its matching detail URL.
   - Confirm the list can be reached directly by URL and browser refresh.

### Acceptance criteria — implemented

- Visiting `/` shows the page title and all available attractions.
- An empty collection produces a clear empty-state message rather than a blank
  screen.
- Loading or data errors do not masquerade as an empty successful response.
- Each item has an accessible name and navigates to
  `/attractions/<id>` for that item.

## Slice 2 — View attraction detail (`AttractionDetailPage`)

**User outcome:** A visitor can open a list item and see the matching
attraction's details, or receive a clear not-found state.

### Tasks

1. **Resolve route parameters**
   - Read `id` with `useParams` from `react-router`.
   - Validate that it is a positive integer before looking up the attraction.
   - Resolve the record from the same shared data source used by `HomePage`.
2. **Render detail states**
   - Show the selected attraction's name, category, description, and image.
   - Handle malformed IDs, unknown IDs, and data loading/errors explicitly.
   - Provide a link back to `/`.
3. **Verify the slice**
   - Test a known ID, a non-numeric ID, a non-existent ID, and a missing/empty
     data result.
   - Confirm the detail URL works on direct navigation and browser refresh.
   - Confirm returning to the list does not depend on browser history alone.

### Acceptance criteria — implemented

- `/attractions/:id` displays the record matching the validated route ID.
- Invalid and unknown IDs show a not-found state, not unrelated attraction data.
- The detail page provides an accessible way back to the list.
- List and detail views use the same record data and remain consistent.

## Sprint 1 completion gate

- Both slices pass the project's TypeScript check and production build.
- The happy path works from `/` to a detail page and back to `/`.
- Unknown route IDs and the list-to-detail-to-list flow are verified manually
  in the browser. Add automated tests and asynchronous loading/error coverage if
  the attraction source becomes asynchronous.
- Product decisions absent from `docs/PRD.md` (data source, authorization,
  booking, and login behavior) remain explicit follow-up items; they are not
  inferred as implemented features.
