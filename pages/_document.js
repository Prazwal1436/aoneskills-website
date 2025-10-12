import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Bootstrap CSS */}
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
       {/* Font Awesome CDN */}
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-papm6Qp1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1QK1Q==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          {/* Google Fonts */}
         <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />    
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* jQuery and Bootstrap JS using next/script */}
        <Script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" strategy="beforeInteractive" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
