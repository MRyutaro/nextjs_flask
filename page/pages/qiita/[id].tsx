import { GetServerSideProps } from 'next'
import DefaultErrorPage from 'next/error'
import React from 'react'
import axios from 'axios'

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const res = await axios.get(`http://127.0.0.1:5000/qiita/${context.query.id}`)
    if ( !res.data.url ){
      return {
        props: {}
      }
    }
    return {
        redirect: {
            permanent: false
            ,destination: res.data.url
        }
    }
}

export default function none() {
    return (<DefaultErrorPage statusCode={404} />)
}