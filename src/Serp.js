console.log("Hello World")
import {getJson} from "serpapi"

getJson({
  engine: "google",
  q: "Coffee",
  api_key: "8f0f7e61794200e4c5eda13abda9e8144ddfd7f655dad5ca45177feff6b0e1a3"
}, (json) => {
  console.log(json["organic_results"]);
});

export function GetSerp() {
    res = {}
    getJson({
        engine: "google",
        q: "Coffee",
        api_key: "8f0f7e61794200e4c5eda13abda9e8144ddfd7f655dad5ca45177feff6b0e1a3"
      }, (j) => {
       res = j
      });

      return res
}