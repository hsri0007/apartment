import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:8081",
});

export default Instance;
