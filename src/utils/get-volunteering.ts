import cvData from "../../data/cv-data.json";
import type { Volunteering } from "../types/types";

export function getVolunteering(): Volunteering[] {
  return (cvData.volunteering || []) as Volunteering[];
}

