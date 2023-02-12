type HttpMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const useFetch = () => {
  const callHttp = async <T>(
    endpoint: string,
    method: HttpMethods = "GET",
    parameters: Record<string, unknown> = {}
  ): Promise<never | T> => {
    {
      const options: {
        method: HttpMethods;
        body?: string;
      } = {
        method,
      };
      method === "POST" && (options.body = JSON.stringify(parameters));

      try {
        const response = await fetch(`${endpoint}`, options);
        const data = (await response.json()) as Promise<T>;
        return data;
      } catch (error) {
        return error.response;
      }
    }
  };

  return {
    callHttp,
  };
};
