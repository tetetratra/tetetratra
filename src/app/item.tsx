
import classNames from 'classnames'

export enum ItemSize { Single, Double, Full }

export const Item = ({ itemSize, color, placeRight, children }: { itemSize: ItemSize, color: string, placeRight?: boolean, children?: ReactNode }) => {
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
