const queryClientConfig = {
  defaultOptions: {
    queries: {
      networkMode: "offlineFirst",
      retry: 3,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: "always",
      cacheTime: 1000 * 3600, //1 hour
      refetchInterval: false, //1 hour
      refetchIntervalInBackground: false,
      suspense: false,
      staleTime: 2000 * 3600, //2 hours
    },
    mutations: {
      networkMode: "always",
      retry: 3,
    },
  },
};

export default queryClientConfig;
