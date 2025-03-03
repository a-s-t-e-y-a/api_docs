import localFont from 'next/font/local';

export const myLocalFontCollection = localFont({
  src: [
    {
      path: './font/f406ac24b8376b17efd4.woff2',
      weight: '300',
      style: ' normal',
    },
    {
      path: './font/26238818d1268ab9a0d6.woff2',
      weight: '400',
      style: ' normal',
    },
    {
      path: './font/83cb027ab8dca34d506d.woff2',
      weight: '500',
      style: ' normal',
    },
    {
      path: './font/df3315fc3030ada60d02.woff2',
      weight: '700',
      style: ' normal',
    },
  ],
  // variable: '--font-my-local-font-collection',
});
