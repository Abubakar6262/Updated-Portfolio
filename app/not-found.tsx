import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Custom404() {
  return (
    <div className="container text-center mt-5 ">
    <Head>
      <title>404 - Not Found</title>
    </Head>
    <h1 className="display-4 text-danger">404 - Not Found</h1>
    <p className="lead">The page you're looking for does not exist.</p>
    <p>
      <Link className="btn btn-success " href="/">
        Go back to Home
      </Link>
    </p>
  </div>
  )
}

export default Custom404