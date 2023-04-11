const base = "http://127.0.0.1:5000/"

function Api_IndustryInfo (naics) {
    return base+'description?code='+naics
}