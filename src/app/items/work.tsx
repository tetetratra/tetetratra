import { Item, ItemSize } from '../item'

export const Work = ({ placeRight }: { placeRight?: boolean }) => (
  <Item itemSize={ItemSize.Single} color='bg-[#FFFFDF]' placeRight={placeRight}>
    <div className={'text-shadow text-2xl md:text-3xl'}>
      works
    </div>
  </Item>
)
