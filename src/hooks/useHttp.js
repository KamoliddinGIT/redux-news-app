import react, { useCallback } from "react";

const useHttp = () => {
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-type": "application/json" }
    ) => {
      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`error ${response.url}, status ${response.status}`);
        }
        const data = response.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    }
  );

  return { request };
};

export default useHttp;
