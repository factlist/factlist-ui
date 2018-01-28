import React from 'react'
import Title from './Title'
import Item from './Item'
import List from './List'
import Link from './Link'

const links = [
  { title: "#JusticeForTrabzonspor" },
  { title: "Hayırlı Cumalar" },
  { title: "Ali Tekintüre" },
  { title: "Esenyurt Belediye Başkanı" },
  { title: "YeniDünyaİçin" },
  { title: "YananAlanlarYeşilleniyor" },
  { title: "İnfantino" },
  { title: "Eylül" },
  { title: "HDP'li Sancar" }
]

const Topics = ({ title, className }) => (
  <div className={className}>
    <Title>{title}</Title>

    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <Link href="">{link.title}</Link>
        </Item>
      ))}
    </List>
  </div>
)

export default Topics
