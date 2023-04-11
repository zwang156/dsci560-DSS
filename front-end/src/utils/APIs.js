import axios from 'axios';
const base = "http://127.0.0.1:5000/"

export function getIndustryInfo (naics) {
    const url = base+'description?code=' + naics
    let info = null
    axios.get(url).then(res => {
      console.log(res)
      info = res;
    })
    return info
}