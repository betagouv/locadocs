#!/usr/bin/env ts-node
/* eslint-disable no-console */
import { districtsURLsList } from './utils/listFiles';
import { parse } from 'node-html-parser';
import fetch from 'node-fetch';

const processDistrict = async (targetDistrict: {
  url: string;
  districtNumber: string;
}) => {
  const response = await fetch(targetDistrict.url);
  const body = await response.text();
  const page = parse(body);

  console.log(page);
};

processDistrict(districtsURLsList[0]);
