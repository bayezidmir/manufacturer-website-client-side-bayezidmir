import axios from "axios";
import React from "react";

const Fetcher = axios.create({ baseURL: "https://blooming-scrubland-82321.herokuapp.com" });

export default Fetcher;
