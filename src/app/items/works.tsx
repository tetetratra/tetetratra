import Image from 'next/image'

import { Item, ItemSize } from '../item'

export const Works = () => (
  <Item itemSize={ItemSize.Double} color='bg-[#EFFFEF]'>
    <div className="flex flex-col">
      <Work name="ensemble_cast" href="https://github.com/tetetratra/ensemble_cast"
        description="C拡張を使って書かれたRubyのgem. 仮引数を instance_eval した状態でブロックを評価できる"
      />
      <Work name="searchsearch" href="https://github.com/tetetratra/searchsearch"
        src="/searchsearch_logo.png"
        description="各種検索サイトのクエリストリングを検索できるサービス (停止中)"
      />
      <Work name="biotter" href="https://github.com/tetetratra/biotter-rails"
        src="/biotter_logo.png"
        description="ツイッターのプロフィールの変更履歴を残すことができるサービス (サービス終了)"
      />
    </div>
  </Item>
)

const Work = ({ name, href, src, description }: { name: string, href: string, src?: string, description: string }) => {
  return (
    <div className="flex items-center my-1 mx-4">
      <div className='m-1 w-14 h-14'>
        {src && (
          <Image
            src={src}
            width={50}
            height={50}
            style={{ borderRadius: '15%' }}
          />
        )}
      </div>
      <div className='mx-2'>
        <a className="text-base" href={href}>{name}</a>
        <p className="text-xs">
          {description}
        </p>
      </div>
    </div>
  )
}
