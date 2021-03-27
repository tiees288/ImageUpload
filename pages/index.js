import Head from 'next/head'
import React, { useState } from 'react';
import Swal from 'sweetalert2'
// import styles from '../styles/Home.module.css'

export default function Home() {
  let myfiles = null;
  const [files, setfiles] = useState(null)

  const handleFiles = (file) => {
    setfiles(file)
  }

  const handleClear = () => {
    setfiles(null)
    console.log('Cleard.')
  }

  const handleUpload = (e) => {
    e.preventDefault()

    if (files == undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Upload Fail',
        // didOpen: () => {
        //   Swal.showLoading()
        // },
        text: 'Something went wrong!',
        // footer: '<a href>Why do I have this issue?</a>'
      })
    }
    else {
      Swal.fire({
        // icon: 'error',
        title: 'Upload in progress.',
        didOpen: () => {
          Swal.showLoading()
        },
        text: 'Please wait.!',
        allowOutsideClick: false
        // footer: '<a href>Why do I have this issue?</a>'
      })


      // Simulate Upload
      setTimeout(() => {
        Swal.close()
      }, 1000);
    }
  }

  if (files != undefined) {
    console.log(files[0])
    if (files[0] != undefined)
      myfiles = URL.createObjectURL(files[0])
    // console.log(myfiles)
  }

  return (
    <div>
      <Head>
        <title>Upload Images</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <fieldset style={{ width: '500px' }}>
        <legend>Upload Images</legend>
        <form onSubmit={(e) => handleUpload(e)} >
          <label>Files : </label>
          <input type="file" accept="image/*" onChange={(e) => handleFiles(e.target.files)} />
          <div style={{ textAlign: 'center' }}>
            <button type="submit">Upload</button>
            <button onClick={(e) => handleClear()} type="Reset">Clear</button>
          </div>
          <div>
            {
              files != null ? <img style={{ maxWidth: '150px', maxHeight: '150px' }} src={myfiles} /> : ''
            }
          </div>
        </form>
      </fieldset>
      <fieldset style={{ width: '500px' }}>
        <legend>Images List</legend>

      </fieldset>
    </div>
  )
}
