import classNames from 'classnames'

import { Item, ItemSize } from '../item'

export const Careers = ({ isMd }: { isMd: boolean }) => (
  <Item itemSize={ItemSize.Double} color='bg-[#EFFFDF]'>
    <div className='flex flex-col'>
      <Career
        company="株式会社メドピア"
        from="2020年12月"
        to="現在"
        site="https://medpeer.co.jp"
        description="サーバーサイドエンジニア"
        isMd={isMd}
      />
      <Career
        company="株式会社Donuts"
        from="2020年11月"
        to="2022年10月"
        site="https://www.donuts.ne.jp"
        description="Webエンジニア インターン"
        isMd={isMd}
      />
      <Career
        company="株式会社ルーター"
        from="2018年9月"
        to="2020年10月"
        site="https://rooter.jp"
        description="サーバーサイドエンジニア アルバイト"
        isMd={isMd}
      />
    </div>
  </Item>
)

const Career = ({ company, from, to, site, description, isMd }:
  { company: string, from: string, to: string, site: string, description: string, isMd: boolean }) => {
  return (
    <div className="m-1 md:-ml-8 lg:-ml-24">
      <div className="-mb-2">
        <span className="text-sm">{from} 〜 {to}</span>
      </div>
      <div>
        <a className="text-lg text-blue-700 mr-3" rel="noopener noreferrer" href={site}>
          {company}
        </a>
        <span className={classNames("text-sm", isMd || "block")}>
          {description}
        </span>
      </div>
    </div>
  )
}
