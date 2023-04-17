export interface FilteredPeopleDataSchema extends PeopleDataSchema {
  listByJobs: Record<OccupationGroup, PeopleListSchema[]>;
}

export interface PeopleDataSchema {
  list: PeopleListSchema[];
  imgBase: string;
}

export interface PeopleListSchema {
  Title: string;
  Name: string;
  IsActive: number;
  SenatorMethod: "เลือกกันเอง" | "เลือกโดย คสช." | "โดยตำแหน่ง";
  OccupationGroup: OccupationGroup;
  Id: number;
  Images?: string;
  NcpoType?:
    | "สมาชิก คสช."
    | "สมาชิก คสช.,สายนิติบัญญัติ"
    | "สมาชิก คสช.,สายบริหาร"
    | "สายนิติบัญญัติ"
    | "สายบริหาร"
    | "สายบริหาร,สายนิติบัญญัติ";
}

export type OccupationGroup =
  | "กฎหมาย"
  | "การศึกษา"
  | "การเมือง"
  | "ตำรวจ"
  | "ทหาร"
  | "สาธารณสุข"
  | "สื่อมวลชน"
  | "องค์กรรัฐ/รัฐวิสาหกิจ"
  | "อื่นๆ"
  | "เกษตรกรรม"
  | "เอกชน";
