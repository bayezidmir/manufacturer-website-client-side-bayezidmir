import axios from "axios";
import React from "react";

const Fetcher = axios.create({
  baseURL: "https://dry-scrubland-92228.herokuapp.com",
});

export default Fetcher;
