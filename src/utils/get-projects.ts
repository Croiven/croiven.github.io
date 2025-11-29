import cvData from "../../data/cv-data.json";
import type { Project } from "../types/types";

export function getProjects(): Project[] {
  return (cvData.projects || []) as Project[];
}

