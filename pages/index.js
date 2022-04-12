// our-domain.com/
import Link from 'next/link'
function HomePage() {
  return (
    <>
      <h1>The Home Page</h1>
      <Link href="/news"> click to go to news page</Link>
    </>
  );
}

export default HomePage;