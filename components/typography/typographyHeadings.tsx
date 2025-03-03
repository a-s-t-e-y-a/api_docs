export function MainHeading({ heading }: { heading: string }) {
  return (
    <h1 className='mb-3 pb-3 text-2xl font-bold lg:text-4xl'>{heading}</h1>
  );
}

export function SubHeading({ heading }: { heading: string }) {
  return <h2 className='mb-1 text-xl font-bold lg:text-2xl'>{heading} </h2>;
}

export function SubHeading2({ heading }: { heading: string }) {
  return <h3 className='mb-1 text-lg font-bold lg:text-xl'>{heading} </h3>;
}

export function SubHeading3({ heading, className }: { heading: string, className?: string }) {
  return <h4 className={`mb-1 text-base font-normal lg:text-lg ${className}`}>{heading} </h4>;
}

export function Paragraph({ paragraph }: { paragraph: string }) {
  return (
    <p className='mb-2 text-base font-normal leading-loose tracking-tight'>
      {paragraph}
    </p>
  );
}
