"use client";

import { useMemo, useState } from "react";
import { normalize } from "@/lib/normalize";

interface UseNormalizedSearchOptions<T> {
  items: T[];
  searchFields: (keyof T)[];
  filterField?: keyof T;
}

export function useNormalizedSearch<T>({
  items,
  searchFields,
  filterField,
}: UseNormalizedSearchOptions<T>) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    const normalizedSearch = normalize(search);

    return items.filter((item) => {
      // Filter by type
      if (filter !== "all" && filterField) {
        if (item[filterField] !== filter) return false;
      }

      // Filter by search text
      if (normalizedSearch) {
        return searchFields.some((field) => {
          const value = item[field];
          if (typeof value === "string") {
            return normalize(value).includes(normalizedSearch);
          }
          return false;
        });
      }

      return true;
    });
  }, [items, search, filter, searchFields, filterField]);

  return { search, setSearch, filter, setFilter, filtered };
}
