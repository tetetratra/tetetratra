"use client"

import Image from 'next/image'
import classNames from 'classnames'
import { useState, useLayoutEffect, ReactNode } from 'react'
import _ from 'lodash'

import { Item, ItemSize } from './item'
import { Title } from './items/title'
import { Career } from './items/career'
import { Careers } from './items/careers'
import { Link } from './items/link'
import { Links } from './items/links'
import { Work } from './items/work'
import { Works } from './items/works'

const checkMd = () => window.matchMedia('(min-width:768px)').matches

export default () => {
  const [isMd, setIsMd] = useState(true)
  useLayoutEffect(() => { // 参考: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    const updateIsMd = () => setIsMd(checkMd())

    window.addEventListener('resize', updateIsMd)
    updateIsMd()
    return () => window.removeEventListener('resize', updateIsMd)
  }, [])

  return (
    <div className="w-[360px] md:w-[750px] lg:w-[900px] m-auto mt-2 mb-16">
      <Row title>
        <Title />
      </Row>

      <Row>
        <Link />
        <Links />
      </Row>

      {isMd ? (
        <Row>
          <Works />
          <Work />
        </Row>
      ) : (
        <Row>
          <Work placeRight />
          <Works />
        </Row>
      )}

      <Row>
        <Career />
        <Careers isMd={isMd}/>
      </Row>
    </div>
  )
}

const Row = ({ title, children }: { title?: boolean, children?: ReactNode }) => {
  const height = `
    ${title ? 'h-[240px]' : 'h-[480px]'}
    md:h-[250px]
    lg:h-[300px]
  `
  const grid = `
       grid grid-flow-col
       grid-rows-3     grid-cols-2
    md:grid-rows-1  md:grid-cols-3
  `
  return (
    <div className={classNames('w-auto', height, grid)}>
      {children}
    </div>
  )
}

