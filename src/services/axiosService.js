import axios from "axios";

export var addResult = async function (data) {
  let res = await axios.put("http://localhost:5000/result/add", data);
  //   console.log(res);
  return res;
};

