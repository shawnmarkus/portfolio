import { useEffect, useState } from "react";
import type { PortfolioData } from "../types";
import localData from "../data/portfolio.json";

/**
 * Set VITE_DATA_URL in .env to load data from a remote GitHub-hosted JSON.
 * Leave empty to use the bundled src/data/portfolio.json.
 *
 * Example:
 *   VITE_DATA_URL=https://raw.githubusercontent.com/USER/REPO/main/portfolio.json
 */
const REMOTE_URL: string = import.meta.env.VITE_DATA_URL ?? "";

interface UsePortfolioDataReturn {
  data: PortfolioData;
  loading: boolean;
}

export function usePortfolioData(): UsePortfolioDataReturn {
  const [data, setData] = useState<PortfolioData>(localData as PortfolioData);
  const [loading, setLoading] = useState<boolean>(Boolean(REMOTE_URL));

  useEffect(() => {
    if (!REMOTE_URL) return;

    fetch(REMOTE_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<PortfolioData>;
      })
      .then((remote) => setData(remote))
      .catch(() =>
        console.warn("Remote data fetch failed — falling back to local data."),
      )
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
