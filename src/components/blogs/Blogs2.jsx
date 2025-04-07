import { getAllPosts } from "../../lib/data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Blogs2 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({ hasNextPage: false });
  const [error, setError] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllPosts();
        console.log("Initial data:", data);

        if (!data || !data.edges) {
          console.log("No posts found or invalid data format");
          setError("No posts found.");
          return;
        }

        setPosts(data.edges.map((edge) => edge.node));
        setPageInfo(data.pageInfo);
      } catch (err) {
        console.error("Error fetching initial posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
        setInitialLoad(false);
      }
    };
    fetchInitialPosts();
  }, []);

  const loadMorePosts = async () => {
    if (!pageInfo?.hasNextPage || loading) {
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await getAllPosts(false, pageInfo?.endCursor);

      if (!data || !data.edges) {
        console.log("No more posts found or invalid data format");
        setPageInfo({ hasNextPage: false }); // No more pages
        return;
      }

      setPosts((prevPosts) => [
        ...prevPosts,
        ...data.edges.map((edge) => edge.node),
      ]);
      setPageInfo(data.pageInfo);
    } catch (err) {
      console.error("Error loading more posts:", err);
      setError("Failed to load more posts.");
    } finally {
      setLoading(false);
    }
  };

  if (initialLoad) {
    return (
      <div className="bg-white py-8 h-screen flex items-center justify-center">
        <div className="text-[4rem] pb-12 text-center font-semibold">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-8">
        <div className="text-[2rem] pb-12 text-center text-red-500 font-semibold">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-[95vw] lg:w-[80vw] mx-auto">
      <div className="text-7xl pt-12 text-center font-semibold uppercase">
        Blogs
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
        {posts.map((post, index) => (
          <Link key={index} to={`/blogs/${post.slug}`}>
            <div>
              <img
                src={post?.featuredImage?.node?.sourceUrl}
                alt={post.title}
                className="w-full object-cover"
              />
              <div className="">
                <div className="text-black mt-2 font-semibold text-4xl lg:text-3xl 2xl:text-4xl">
                  {post.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {pageInfo?.hasNextPage && (
        <div className="text-center my-8">
          <button
            onClick={loadMorePosts}
            disabled={loading}
            className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded text-3xl"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs2;
