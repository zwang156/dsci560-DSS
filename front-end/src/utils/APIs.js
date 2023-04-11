export const base = "http://127.0.0.1:5000/"

export function IndustryInfo (naics) {
    return base+'description?code=' + naics
}

// need to update
export function Recommendations (district) {
  return base+'description?code=' + district
}
