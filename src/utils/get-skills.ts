import cvData from "../../data/cv-data.json";
import type { SkillCategory } from "../types/types";

export function getSkills(): SkillCategory[] {
  return (cvData.skills || []) as SkillCategory[];
}

