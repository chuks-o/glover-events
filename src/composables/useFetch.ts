type HttpMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const useFetch = () => {
  const callHttp = async <T>(
    endpoint: string,
    method: HttpMethods = "GET",
    parameters: Record<string, unknown> = {}
  ): Promise<T | never> => {
    {
      let data = {} as Promise<T>;
      const options: {
        method: HttpMethods;
        body?: string;
      } = {
        method,
      };
      method === "POST" && (options.body = JSON.stringify(parameters));

      try {
        const response = await fetch(`${endpoint}`, options);
        data = (await response.json()) as Promise<T>;
        return data;
      } catch (error) {}

      return data;
    }
  };

  return {
    callHttp,
  };
};
