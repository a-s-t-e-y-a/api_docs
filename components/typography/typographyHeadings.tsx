export function MainHeading({ heading }: { heading: string }) {
  return (
    <h1 className="text-2xl lg:text-4xl pb-3 mb-3 font-bold">{heading}</h1>
  );
}

export function SubHeading({ heading }: { heading: string }) {
  return (
    <h2 className="text-xl lg:text-2xl font-bold mb-1">{heading} </h2>
  );
}

export function SubHeading2({ heading }: { heading: string }) {
  return (
    <h3 className="text-lg lg:text-xl font-bold mb-1">{heading} </h3>
  );
}

export function Paragraph({ paragraph }: { paragraph: string }) {
  return (
    <p className="text-base font-normal leading-loose mb-2 tracking-tight">
      {paragraph}
    </p>
  );
}

