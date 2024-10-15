import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        {/* Add any custom <meta>, <link> tags, etc. here */}


        
    <link rel="icon" type="image/png" href="{% static 'fav.png' %}" />

    <link href="/assets/new/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/new/all.min.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />

    <script src="/assets/new/profile.js" async defer type="text/javascript"></script>

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2877392052691878" crossorigin="anonymous"></script>





      </Head>
      <body>
        <Main /> {/* This renders the page's content */}
        <NextScript /> 
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> 
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <script src="/assets/new/codeaj.js" type="text/javascript"></script>

      </body>
    </Html>
  );
}

export default MyDocument;
