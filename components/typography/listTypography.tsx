export function OrderedList({ list }: { list: string[] }) {
  return (
    <ol className='mb-2 list-inside list-decimal space-y-1 pl-5'>
      {list.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </ol>
  );
}
export function ListItem({ item }: { item: string }) {
  return (
    <li className='text-base font-normal leading-loose tracking-tight'>
      {item}
    </li>
  );
}
