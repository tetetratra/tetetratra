"use client"

import Image from 'next/image'
import classNames from 'classnames'
import { useState, useLayoutEffect, ReactNode } from 'react'
import _ from 'lodash'

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
    <div className="w-[360px] md:w-[750px] lg:w-[900px] m-auto mt-2">
      <Row title>
        <Item itemSize={ItemSize.Full} color='bg-[#DFFFDF]'>
          tetetratra.net
        </Item>
      </Row>

      <Row>
        <Item itemSize={ItemSize.Single} color='bg-[#DFFFFF]'>
          link
        </Item>

        <Item itemSize={ItemSize.Double} color='bg-[#DFFFEF]'>
          links...
        </Item>
      </Row>

      {isMd ? (
        <Row>
          <Item itemSize={ItemSize.Double} color='bg-[#EFFFEF]'>
            works...
          </Item>

          <Item itemSize={ItemSize.Single} color='bg-[#FFFFDF]'>
            work
          </Item>
        </Row>
      ) : (
        <Row>
          <Item itemSize={ItemSize.Single} color='bg-[#FFFFDF]' placeRight>
            work
          </Item>

          <Item itemSize={ItemSize.Double} color='bg-[#EFFFEF]'>
            works...
          </Item>
        </Row>
      )}

      <Row>
        <Item itemSize={ItemSize.Single} color='bg-[#FFEFFF]'>
          career
        </Item>

        <Item itemSize={ItemSize.Double} color='bg-[#EFFFDF]'>
          careers...
        </Item>
      </Row>
    </div>
  )
}

const Row = ({ title, children }: { title?: boolean, children?: ReactNode }) => {
  const height = `
       ${title ? 'h-[180px]' : 'h-[270px]'}
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

enum ItemSize { Single, Double, Full }

const Item = ({ itemSize, color, placeRight, children }: { itemSize: ItemSize, color: string, placeRight?: boolean, children?: ReactNode }) => {
  let width = ''
  switch (itemSize) {
    case ItemSize.Single:
      width = 'col-span-1 md:col-span-1' + (placeRight ? ' col-start-2' : '')
      break;
    case ItemSize.Double:
      width = 'col-span-2 md:col-span-2'
      break;
    case ItemSize.Full:
      width = 'col-span-2 md:col-span-3'
      break;
  }

  let height = ''
  switch (itemSize) {
    case ItemSize.Single:
      height = 'row-span-1 md:row-span-1'
      break;
    case ItemSize.Double:
      height = 'row-span-2 md:row-span-1'
      break;
    case ItemSize.Full:
      height = 'row-span-3 md:row-span-1'
      break;
  }

  return (
    <div className={classNames('rounded-2xl text-3xl m-1 md:m-2', width, height, color)}>
      {children}
    </div>
  )
}

