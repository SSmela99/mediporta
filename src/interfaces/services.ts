import { ParsedQuery } from "query-string";

export interface TagsResponse {
  items?: TagsEntity[] | null;
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface TagsEntity {
  collectives?: CollectivesEntity[] | null;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

export interface CollectivesEntity {
  tags?: string[] | null;
  external_links?: ExternalLinksEntity[] | null;
  description: string;
  link: string;
  name: string;
  slug: string;
}

export interface ExternalLinksEntity {
  type: string;
  link: string;
}

export interface TagState {
  tags: TagsEntity[] | null;
  isLoading: boolean;
  error: string;
  hasMore: boolean;
  fetchTags: (params: ParsedQuery<string>) => Promise<void>;
}
