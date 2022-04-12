import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage(props) {
  console.log(props)
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId
  console.log(newsId);
  return <h1>The {newsId} page</h1>
}

export function getStaticPaths(){
  return {
    fallback: false,
    paths: [
      {params : {
        newsId: "nextjs-is-a-great-framework",
      },
    }
    ],
  };
}

export function getStaticProps(context) {
    console.log(context);
    return {props:{
      name: "akash",
      description: "the creator of this app"
    }}
}

export default DetailPage;