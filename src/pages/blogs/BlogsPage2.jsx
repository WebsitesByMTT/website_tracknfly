import Blogs2 from "../../components/blogs/Blogs2";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getPostBySlug } from "../../lib/data";
import { useState, useEffect } from "react";

const BlogsPage2 = () => {
  const { blogPath } = useParams();
  const [postData, setPostData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPostBySlug = async () => {
      setLoading(true);
      try {
        const { post } = await getPostBySlug(blogPath, false, []);
        console.log(post);
        setPostData(post);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPostBySlug();
  }, [blogPath]);

  if (!blogPath) {
    return <Blogs2 />;
  }

  if (blogPath && loading) {
    return (
      <div className="bg-white py-8">
        <div className="text-[4rem] pb-12 text-center font-semibold">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      {blogPath && (
        <Helmet>
          <title>{postData?.title}</title>
          <meta name="description" content={postData?.seo?.metaDesc} />
          <meta property="og:title" content={postData?.title} />
          <meta
            property="og:description"
            content={postData?.seo?.opengraphDescription}
          />
          <meta
            property="og:image"
            content={postData?.seo?.opengraphImage?.sourceUrl}
          />
          <meta property="og:url" content={`/${blogPath}`} />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Tracknfly Blogs" />
        </Helmet>
      )}
      {blogPath && (
        <div className="w-[90%] mx-auto my-10 px-4 sm:px-8 md:px-16 py-10 sm:py-16 md:py-20 bg-gray-100 rounded-lg shadow-lg">
          {postData && (
            <>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-black text-center pb-8">
                {postData.title}
              </h1>
              <img
                src={
                  postData.featuredImage?.node?.sourceUrl || "/placeholder.svg"
                }
                alt={postData.imageAlt}
                className="w-full  h-auto mb-10 md:mb-14 mx-auto rounded-lg shadow-md"
              />
              <div
                className="blog-content prose prose-lg max-w-none text-gray-700 flex flex-col"
                dangerouslySetInnerHTML={{ __html: postData?.content }}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default BlogsPage2;
