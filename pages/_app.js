// pages/_app.js
import '../styles/globals.module.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
echo "// trigger rebuild" >> pages/_apps.js
