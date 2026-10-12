import type { DiaDanh } from "../types";

export type { DiaDanh } from "../types";

export type DiaDanhSortField = "title" | "category";
export type SortDirection = "asc" | "desc";

function normalizeText(value: string): string {
  return value
    .toLocaleLowerCase("vi")
    .replace(/đ/g, "d")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

export function searchDiaDanh(
  diaDanhs: readonly DiaDanh[],
  query: string,
): DiaDanh[] {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return [...diaDanhs];

  const searchTerms = normalizedQuery.split(" ");

  return diaDanhs.filter((diaDanh) => {
    const searchableText = normalizeText(
      `${diaDanh.title} ${diaDanh.category} ${diaDanh.description}`,
    );
    return searchTerms.every((term) => searchableText.includes(term));
  });
}

export function filterDiaDanhByCategory(
  diaDanhs: readonly DiaDanh[],
  category: string,
): DiaDanh[] {
  const normalizedCategory = normalizeText(category);
  if (!normalizedCategory) return [...diaDanhs];

  return diaDanhs.filter(
    (diaDanh) => normalizeText(diaDanh.category) === normalizedCategory,
  );
}

export function sortDiaDanh(
  diaDanhs: readonly DiaDanh[],
  field: DiaDanhSortField = "title",
  direction: SortDirection = "asc",
): DiaDanh[] {
  const directionMultiplier = direction === "asc" ? 1 : -1;

  return [...diaDanhs].sort(
    (a, b) =>
      directionMultiplier *
      a[field].localeCompare(b[field], "vi", {
        sensitivity: "base",
        numeric: true,
      }),
  );
}