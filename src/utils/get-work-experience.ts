import cvData from "../../data/cv-data.json";
import type { WorkExperience } from "../types/types";

export function getWorkExperience(): WorkExperience[] {
  return (cvData.workExperience || []) as WorkExperience[];
}

