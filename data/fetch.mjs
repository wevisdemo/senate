import fs from "fs";
import fetch from "node-fetch";

const fetchPeople = async () => {
  try {
    const query =
      "where=(IsSenator,is,true)&limit=1000&fields=Id,Title,Name,Images,IsActive,NcpoType,OccupationGroup,SenatorMethod&sort=Name";
    const resp = await fetch(
      "https://sheets.wevis.info/api/v1/db/public/shared-view/572c5e5c-a3d8-440f-9a70-3c4c773543ec/rows?" +
        query
    );
    const { data } = await resp.json();

    fs.writeFileSync("data/people.json", JSON.stringify(data));
  } catch (e) {
    console.error("💥 ERROR: ", e);
  }
};

const fetchVotelog = async () => {
  try {
    const where = encodeURIComponent(
      `(SenateVoteType,isnot,null)~and(SenateVoteType,neq,อื่น ๆ)`
    );
    const query = `where=${where}&limit=1000&fields=Title,Id,Meeting,VoteDate,IsPassed,PeopleVotes,SenateVoteType&nested[PeopleVotes][limit]=1000&nested[PeopleVotes][fields]=Status,nc_9rqw__People_id`;
    const resp = await fetch(
      "https://sheets.wevis.info/api/v1/db/public/shared-view/e06d1465-2786-4799-9c0f-a20f4cf71ec4/rows?" +
        query
    );
    const { data } = await resp.json();

    fs.writeFileSync("data/votelog.json", JSON.stringify(data));
  } catch (e) {
    console.error("💥 ERROR: ", e);
  }
};

fetchPeople();
fetchVotelog();
