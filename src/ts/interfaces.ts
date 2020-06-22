export interface SubRedditResponse {
  data: {
    children: SubRedditEntity[];
    after: string | null;
    before: string | null;
  };
}

export interface SubRedditEntity {
  data: SubRedditTableData;
  kind: string;
}

export interface ExtraRequestParam {
  name: string;
  value: string;
}

export interface SubRedditTableData {
  id: string;
  title: string;
  author: string;
  url: string;
  score: number;
}
