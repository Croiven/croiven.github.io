import cvData from "../../data/cv-data.json";
import type { Certification } from "../types/types";

export function getCertifications(): Certification[] {
  return (cvData.certifications || []) as Certification[];
}

