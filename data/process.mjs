import fs from "fs";
import PEOPLE_DATA from "./people.json" assert { type: "json" };
import VOTELOG_DATA from "./votelog.json" assert { type: "json" };

const SENATE_ID = PEOPLE_DATA.list.map((e) => e.Id);

const save = (path, content) => {
  fs.writeFileSync(path, content);
};

const saveForFetch = (filename, content) => save(`public/data/${filename}`, content);
const saveForImport = (filename, content) =>
  save(`src/data/${filename}`, "export default " + content);

const compilePeople = () => {
  const data = {
    fetch: {
      list: {},
      imgBase: "",
    },
    local: {
      total: PEOPLE_DATA.pageInfo.totalRows,
      withNcpo: 0,
      notNcpo: 0,
      jobs: {},
      ncpoType: {
        สายนิติบัญญัติ: [0, 0, 0, 0],
        "สมาชิก คสช.,สายนิติบัญญัติ": [0, 0, 0, 0],
        สายบริหาร: [0, 0, 0, 0],
        "สมาชิก คสช.": [0, 0, 0, 0],
        "สมาชิก คสช.,สายบริหาร": [0, 0, 0, 0],
        "สายบริหาร,สายนิติบัญญัติ": [0, 0, 0, 0],
      },
    },
  };

  const { list } = PEOPLE_DATA;

  data.fetch.list = list.map((e) => {
    if (e.NcpoType) {
      data.local.withNcpo++;
      data.local.ncpoType[e.NcpoType][
        ["โดยตำแหน่ง", "เลือกโดย คสช.", "เลือกกันเอง"].indexOf(e.SenatorMethod)
      ]++;
      data.local.ncpoType[e.NcpoType][3]++;
    } else {
      data.local.notNcpo++;
    }

    if (e.OccupationGroup in data.local.jobs) {
      data.local.jobs[e.OccupationGroup]++;
    } else {
      data.local.jobs[e.OccupationGroup] = 1;
    }

    return {
      ...e,
      IsActive: +!!e.IsActive,
      NcpoType: e.NcpoType ?? undefined,
      Images: e.Images?.[0].title ?? undefined,
    };
  });
  data.fetch.imgBase = list[0].Images[0].url.replace(list[0].Images[0].title, "");

  saveForFetch("people.json", JSON.stringify(data.fetch));
  saveForImport("people.ts", JSON.stringify(data.local));
};

const compileVotelog = () => {
  const data = {
    fetch: {
      list: {},
      voteEnum: [
        "เห็นด้วย",
        "ไม่เห็นด้วย",
        "งดออกเสียง",
        "ไม่ลงคะแนนเสียง",
        "ไม่เข้าร่วมประชุม",
      ],
    },
    local: {
      senate: {
        total: 0,
        keepNcpo: 0,
        nationStrat: 0,
        consVote: 0,
      },
      parliament: {
        total: 0,
        selectPm: 0,
        consDraft: 0,
        consVote: 0,
      },
    },
  };

  const { list } = VOTELOG_DATA;

  data.fetch.list = list.map((e) => {
    if (e.Meeting === "ประชุมร่วมกันของรัฐสภา") {
      data.local.parliament.total++;
      switch (e.SenateVoteType) {
        case "เลือกนายกรัฐมนตรี":
          data.local.parliament.selectPm++;
          break;
        case "ร่างแก้รัฐธรรมนูญ":
          data.local.parliament.consDraft++;
          break;
        case "ประชามติแก้รัฐธรรมนูญ":
          data.local.parliament.consVote++;
          break;
      }
    } else {
      data.local.senate.total++;
      switch (e.SenateVoteType) {
        case "ตั้งศาลรัฐธรรมนูญ":
          data.local.senate.keepNcpo++;
          break;
        case "ยุทธศาสตร์ชาติ":
          data.local.senate.nationStrat++;
          break;
        case "ประชามติแก้รัฐธรรมนูญ":
          data.local.senate.consVote++;
          break;
      }
    }

    const formatPeopleVote = (peopleVoteData) => {
      const reduced = peopleVoteData.reduce(
        (all, current) => {
          if (SENATE_ID.includes(current.nc_9rqw__People_id)) {
            all.senate[data.fetch.voteEnum.indexOf(current.Status)]++;
            all.senate[5]++;
          } else {
            all.mp[data.fetch.voteEnum.indexOf(current.Status)]++;
            all.mp[5]++;
          }

          return all;
        },
        {
          senate: [0, 0, 0, 0, 0, 0],
          mp: [0, 0, 0, 0, 0, 0],
        }
      );

      Object.keys(reduced).forEach((k) => {
        if (reduced[k][5] === 0) delete reduced[k];
      });

      return reduced;
    };

    return {
      ...e,
      VoteDate: e.VoteDate.split("-")
        .map((e) => +e)
        .reverse()
        .join("."),
      IsPassed: +!!e.IsPassed,
      PeopleVotes: e.PeopleVotes.length ? formatPeopleVote(e.PeopleVotes) : undefined,
    };
  });

  saveForFetch("votelog.json", JSON.stringify(data.fetch));
  saveForImport("votelog.ts", JSON.stringify(data.local));
};

compilePeople();
compileVotelog();
