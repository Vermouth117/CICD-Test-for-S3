'use client'
import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {

  const [data, setData] = useState("レスポンスなし");

  console.log(data);

  const handleGet = async () => {
    const getData = await fetch("https://9czxdt7hqe.execute-api.ap-northeast-1.amazonaws.com/morisaki-stage/morisaki?id=z").then(data => data.json());
    setData(getData.name);
  }

  const handlePost = async () => {
    const postData = await fetch(
      "https://9czxdt7hqe.execute-api.ap-northeast-1.amazonaws.com/morisaki-stage/morisaki",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "a",
          name: "POSTどうだ？",
        }),
      }
      ).then(data => data.json());
    setData(postData.name);
  }

  const handlePut = async () => {
    const putData = await fetch(
      "https://9czxdt7hqe.execute-api.ap-northeast-1.amazonaws.com/morisaki-stage/morisaki",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "c",
          name: "PUTどうだ？",
        }),
      }
      ).then(data => data.json());
    setData(putData.name);
  }

  const handleDelete = async () => {
    const deleteData = await fetch(
      "https://9czxdt7hqe.execute-api.ap-northeast-1.amazonaws.com/morisaki-stage/morisaki?id=b",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
      ).then(data => data.json());
  }

  return (
    <main className={styles.main}>
      <button onClick={handleGet}>get</button>
      <button onClick={handlePost}>post</button>
      <button onClick={handlePut}>put</button>
      <button onClick={handleDelete}>delete</button>
      <p>{data}</p>
    </main>
  )
}
