import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

  render() {
    return (
		<Html lang="pt">
			<Head>
				<meta charSet="utf-8" />
				<meta name="description" content="Seguro de vida em grupo - Cuidar do time é garantir a saúde financeira da sua empresa" />

				<meta name="twitter:card" content="summary" key="twcard" />
				<meta name="twitter:creator" content="" key="twhandle" />

				<meta property="og:url" content="t" key="https://vidaemgrupo.admsouseguros.com.br" />
				<meta property="og:image" content="t" key="ogimage" />
				<meta property="og:site_name" content="t" key="Vida em Grupo" />
				<meta property="og:title" content="t" key="Sou" />
				<meta property="og:description" content="t" key="ogdesc" />

				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>

				<script dangerouslySetInnerHTML={{ __html: `(function( w, d, s, l, i ) {
					w[l] = w[l] || [];
					w[l].push( {'gtm.start': new Date().getTime(), event: 'gtm.js'} );
					var f = d.getElementsByTagName( s )[0],
						j = d.createElement( s ), dl = l != 'dataLayer' ? '&l=' + l : '';
					j.async = true;
					j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
					f.parentNode.insertBefore( j, f );
				} )( window, document, 'script', 'dataLayer', 'GTM-NHFMVXB' );`}}>
				</script>

				<script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
				n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
				t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
				document,'script','https://connect.facebook.net/en_US/fbevents.js');`}}>
				</script>
				<script dangerouslySetInnerHTML={{ __html: `fbq('init', '120674979882311', {}, {"agent": "wordpress-5.7.2-3.0.5"});`}}>
				</script>
				<script dangerouslySetInnerHTML={{ __html: `fbq('track', 'PageView', []);`}}>
				</script>

				<script dangerouslySetInnerHTML={{ __html: `(function(h,o,t,j,a,r){
					h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					h._hjSettings={hjid:1810782,hjsv:5};
					a=o.getElementsByTagName('head')[0];
					r=o.createElement('script');r.async=1;
					r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					a.appendChild(r);
				})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');`}}>
				</script>
			</Head>
			<body>
				<noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHFMVXB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>

				<noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none" alt="fbpx"
				src="https://www.facebook.com/tr?id=120674979882311&ev=PageView&noscript=1" />`}}></noscript>
				<Main />
				<NextScript />
			</body>
		</Html>
		)
	}
}
