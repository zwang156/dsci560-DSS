export const base = "http://127.0.0.1:5000/";

export function IndustryInfo_API (naics) {
    return base+'description?code=' + naics
};

// need to update
export function Recommendations_API (district) {
  return base+'description?code=' + district
};
