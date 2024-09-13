import localFont from "next/font/local";
import "./globals.css";

const satoshiRegular = localFont({
  src: '/fonts/Satoshi-Regular.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-satoshi-regular',
});

const satoshiBold = localFont({
  src: '/fonts/Satoshi-Bold.otf',
  weight: '700',
  style: 'normal',
  variable: '--font-satoshi-bold',
});

const satoshiBlack = localFont({
  src: '/fonts/Satoshi-Black.otf',
  weight: '900',
  style: 'normal',
  variable: '--font-satoshi-black',
});

const satoshiItalic = localFont({
  src: '/fonts/Satoshi-Italic.otf',
  weight: '400',
  style: 'italic',
  variable: '--font-satoshi-italic',
});

const satoshiLight = localFont({
  src: '/fonts/Satoshi-Light.otf',
  weight: '300',
  style: 'normal',
  variable: '--font-satoshi-light',
});

const satoshiMedium = localFont({
  src: '/fonts/Satoshi-medium.otf',
  weight: '500',
  style: 'normal',
  variable: '--font-satoshi-medium',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshiRegular.variable} ${satoshiBold.variable} ${satoshiBlack.variable} ${satoshiItalic.variable} ${satoshiLight.variable} ${satoshiMedium.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
