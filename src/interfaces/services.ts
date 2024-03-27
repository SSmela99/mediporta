import { ParsedQuery } from "query-string";

export interface TagsResponse {
  items?: TagsEntity[] | null;
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface TagsEntity {
  count: number;
  name: string;
}

export interface TagState {
  tags: TagsEntity[] | null;
  isLoading: boolean;
  error: string;
  hasMore: boolean;
  fetchTags: (params: ParsedQuery<string>) => Promise<void>;
}
