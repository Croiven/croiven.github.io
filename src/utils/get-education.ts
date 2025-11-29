import cvData from "../../data/cv-data.json";
import type { Education } from "../types/types";

export function getEducation(): Education[] {
  return (cvData.education || []) as Education[];
}

