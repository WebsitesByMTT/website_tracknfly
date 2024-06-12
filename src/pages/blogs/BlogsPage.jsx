import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BlogsData } from "../../components/blogs/BlogsJson";
import FlightTable from "../../components/BusyFlightTable/BusyFlightTable";
import Blogs from "../../components/blogs/Blogs";
const BlogsPage = () => {
  const { blogPath } = useParams();
  const selectedBlog = BlogsData.find((blog) => blog.path.includes(blogPath));
  const isBlogPage = blogPath.includes("blogs");

  if (isBlogPage) {
    return <Blogs />;
  }
  return (
    <>
      {selectedBlog && (
        <Helmet>
          <title>{selectedBlog.title}</title>
          <meta name="description" content={selectedBlog.metaDescription} />
          <meta property="og:title" content={selectedBlog.openGraph.title} />
          <meta
            property="og:description"
            content={selectedBlog.openGraph.description}
          />
          <meta property="og:image" content={selectedBlog.openGraph.image} />
          <meta property="og:url" content={selectedBlog.openGraph.url} />
          <meta property="og:type" content={selectedBlog.openGraph.type} />
          <meta
            property="og:site_name"
            content={selectedBlog.openGraph.site_name}
          />
        </Helmet>
      )}

      <div className="w-[90%] mx-auto my-10 px-4 sm:px-8 md:px-16 py-10 sm:py-16 md:py-20 bg-gray-100 rounded-lg shadow-lg">
        {selectedBlog && (
          <>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6  text-black uppercase text-center pb-8">
              {selectedBlog.title}
            </h1>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.imageAlt}
              className="w-full md:w-[80%] h-auto mb-10 md:mb-14 mx-auto rounded-lg shadow-md"
            />
            <ul>
              {selectedBlog.content.map((section, index) => (
                <li key={index} className="mb-6 md:mb-8">
                  <h2 className="font-semibold text-left text-black uppercase text-2xl sm:text-3xl md:text-4xl mb-4">
                    {section.title}
                  </h2>
                  <p
                    className="text-2xl leading-10 sm:text-xl md:text-xl lg:text-2xl text-gray-700  lg:leading-10"
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                  <p className="text-2xl leading-10 sm:text-xl md:text-xl lg:text-2xl text-gray-700  lg:leading-10">
                    {section.component && <FlightTable />}
                  </p>

                  {section.points &&
                    section.points.map((point) => (
                      <li
                        key={point}
                        className=" list-disc text-2xl leading-10 sm:text-xl md:text-xl lg:text-2xl text-gray-700  lg:leading-10"
                      >
                        {point}
                      </li>
                    ))}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default BlogsPage;
