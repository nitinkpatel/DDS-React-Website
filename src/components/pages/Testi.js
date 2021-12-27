
import React, { useState } from 'react'
import data from '../data'
import Footer from '../Footer'
import List from '../List'

export default function Testi() {
  const [people, setPeople] = useState(data)
  return (
    <>
    <main>
      <section className="list">
<h1> What Our Satisfied Clients are saying</h1>
        <List people={people} />
       
      </section>
    </main>
<Footer/>
  </>
  )
}