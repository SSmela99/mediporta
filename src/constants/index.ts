export const tableHeaders = [
  { name: "Name", width: "50%", params: "name" },
  { name: "Count", width: "50%", params: "popular" },
];

export const defaultParams = {
  initialParams: ({
    order,
    sort,
    pagesize,
    page,
  }: {
    order: string;
    sort: string;
    pagesize: string;
    page: string;
  }) => `?order=${order}&sort=${sort}&pagesize=${pagesize}&page=${page}`,
  site: "&site=stackoverflow",
  filter: "&filter=!bMsg5CXICdlFSp",
};
