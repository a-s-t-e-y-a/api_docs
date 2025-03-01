export function OrderedList({ list }: { list: string[] }) {
  return (
    <ol className="list-decimal list-inside space-y-1 mb-2 pl-5">
      {list.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </ol>
  );
}
export function ListItem({ item }: { item: string }) {
  return (
    <li className="text-base font-normal leading-loose tracking-tight">{item}</li>
  );
}
