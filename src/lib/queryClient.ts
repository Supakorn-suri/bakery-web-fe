// https://tanstack.com/query/latest/docs/reference/QueryClient
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 min - data stays fresh, avoids refetch — use cached data.
      gcTime: 1000 * 60 * 15, // 15 min - cacheTime
      retry: 2,
      refetchOnWindowFocus: true, // refresh when user returns to tab
      refetchOnReconnect: true, // refresh if connection is back
      refetchOnMount: false, // avoid refetching unnecessarily
    },
    mutations: {
      retry: 0,
    },
  },
});

export default queryClient;
