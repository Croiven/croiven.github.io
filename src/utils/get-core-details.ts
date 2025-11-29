import cvData from "../../data/cv-data.json";
import type { CoreDetailsData } from "../types/types";

export function getCoreDetails(): CoreDetailsData {
  // Defensive: fallback if cvData.coreDetails is undefined.
  return cvData.coreDetails as CoreDetailsData;
}
