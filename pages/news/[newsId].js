import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId
  console.log(newsId);
  return <h1>The {newsId} page</h1>
}

export default DetailPage;