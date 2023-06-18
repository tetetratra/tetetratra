import Image from 'next/image'

import { Item, ItemSize } from '../item'

export const Links = () => (
  <Item itemSize={ItemSize.Double} color='bg-[#DFFFEF]'>
    <div className="flex items-end">
      <Logo name="Twitter" href="https://twitter.com/tetetratra" src="/twitter_logo.png" />
      <Logo name="GitHub" href="https://github.com/tetetratra" src="/github_logo.png" />
      <Logo name="Qiita" href="https://qiita.com/tetetratra" src="/qiita_logo.png" />
    </div>
  </Item>
)

const Logo = ({ name, href, src }: { name: string, href: string, src: string }) => {
  return (
    <div className="flex flex-col items-center m-4">
      <a href={href}>
        <Image
          src={src}
          width={50}
          height={50}
          alt={name}
        />
      </a>
      <span className="text-xs md:text-sm">{name}</span>
    </div>
  )
}
