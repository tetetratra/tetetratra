import { Item, ItemSize } from '../item'

export const Work = ({ placeRight }: { placeRight?: boolean }) => (
  <Item itemSize={ItemSize.Single} color='bg-[#FFFFDF]' placeRight={placeRight}>
    work
  </Item>
)
