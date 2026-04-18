import { useEffect, useState } from "react";
import localData from "../data/portfolio.json";

/**
 * To load from a live GitHub-hosted JSON:
 *   set VITE_DATA_URL in your .env file, e.g.
 *   VITE_DATA_URL=https://raw.githubusercontent.com/YOUR_USER/YOUR_REPO/main/portfolio.json
 *
 * Leave it unset (or empty) to use the bundled src/data/portfolio.json.
 */
const REMOTE_URL = import.meta.env.VITE_DATA_URL || "";

export function usePortfolioData() {
  const [data, setData] = useState(localData);
  const [loading, setLoading] = useState(!!REMOTE_URL);

  useEffect(() => {
    if (!REMOTE_URL) return;
    fetch(REMOTE_URL)
      .then((r) => r.json())
      .then((remote) => setData(remote))
      .catch(() => console.warn("Remote data fetch failed, using local data."))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
