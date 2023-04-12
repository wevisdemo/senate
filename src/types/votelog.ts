export interface PeopleVotesType {
  senate?: [number, number, number, number, number, number];
  mp?: [number, number, number, number, number, number];
}

export interface VotelogItemType {
  Title: string;
  VoteDate: string;
  IsPassed: number;
  Id: number;
  PeopleVotes?: PeopleVotesType;
}

export interface VotelogDataSchema {
  senate: {
    keepNcpo: VotelogItemType[];
    nationStrat: VotelogItemType[];
    consVote: VotelogItemType[];
  };
  parliament: {
    consDraft: VotelogItemType[];
    consVote: VotelogItemType[];
  };
}
