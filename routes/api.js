import express , { Router } from 'express';
import config from '../config';
import axios from 'axios';

const router = Router();
const { clinicalTrialsURL } = config;

const api = () =>
  router.get('/trials/:term', (req, res) => {
    const { term } = req.params;
    request({ clinicalTrialsURL , term }, data => res.send(data) );
  });


const request = (options, completion) => {
  const { clinicalTrialsURL , term } = options;
  axios
    .get(`${ clinicalTrialsURL }?name=${ term }`)
    .then(results => completion(results.data.terms) )
};

export default api;

