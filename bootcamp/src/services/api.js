import axios from 'axios' 

const api = axios.create({
  baseUrl: 'http://172.10.100.141:3333'
})

const listaFake = [
  {
    id: "1",
    title: "Front-end com ReactJs",
    owner: "Reverson thaiam"
  },
  {
    id: "2",
    title: "Mobile com React Native",
    owner: "Reverson thaiam"
  },
  {
    id: "3",
    title: "Aprendendo nodeJs",
    owner: "Reverson thaiam"
  },
  {
    id: "4",
    title: "Como usar o Redux",
    owner: "Reverson thaiam"
  }
]


export default listaFake