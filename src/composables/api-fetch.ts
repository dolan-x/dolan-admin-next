import { ofetch } from "ofetch";

const token = useToken();

export type DolanResponse<T> =
  | { success: true; code: number; message: string; data: T; metas: Record<string, any> }
  | { success: false; code: number; message: string; error: string };

const ofetchInstance = ofetch.create({
  baseURL: import.meta.env.DOLAN_API_URL,
});

type URLArg = Parameters<typeof ofetchInstance>[0];
type RestArgs = Parameters<typeof ofetchInstance>[1] & {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTION" | "HEAD"
};
export async function useAPIFetch<T = any>(url: URLArg, args?: RestArgs): Promise<{ res: DolanResponse<T>; error?: Error }> {
  let error;
  let res;
  try {
    res = await ofetchInstance(url, {
      ...args,
      headers: {
        Authorization: token.value ? `Bearer ${token.value}` : "",
        ...args?.headers,
      },
      onResponseError(ctx) {
        res = ctx.response._data;
      },
    });
    res.success = res.data !== undefined;
  } catch (e: any) {
    error = e;
  }
  return { res, error };
}
