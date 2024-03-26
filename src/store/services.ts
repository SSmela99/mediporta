import { create } from "zustand";
import { API, APIRoutes } from "@/api";
import { TagState, TagsResponse } from "@/interfaces/services";
import { ParsedQuery } from "query-string";
import { defaultParams } from "@/constants";

export const useTagsStore = create<TagState>((set) => ({
  tags: [],
  isLoading: true,
  error: "",
  hasMore: false,

  fetchTags: async (params: ParsedQuery<string>) => {
    set({ isLoading: true, error: "", hasMore: true });

    const p = {
      order: (params.order as string) || "desc",
      sort: (params.sort as string) || "popular",
      pagesize: (params.pagesize as string) || "25",
      page: (params.page as string) || "1",
    };

    try {
      const response = await API.get<TagsResponse>(
        `${APIRoutes.tags}${defaultParams.initialParams(p)}${
          defaultParams.site
        }${defaultParams.filter}`
      );

      set({
        tags: response.data.items,
        isLoading: false,
        hasMore: response.data.has_more,
      });
    } catch (error) {
      set({
        error: "Failed to fetch tags",
        isLoading: false,
        hasMore: false,
      });
    }
  },
}));
