"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
import { BlogsData } from "../../components/blogs/BlogsJson"
import FlightTable from "../../components/BusyFlightTable/BusyFlightTable"
import Blogs from "../../components/blogs/Blogs"

// Custom Accordion Item Component
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-8 px-2 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-medium">{question}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4 px-2" : "max-h-0"}`}>
        <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-700">{answer}</p>
      </div>
    </div>
  )
}

const BlogsPage = () => {
  const { blogPath } = useParams()
  const selectedBlog = BlogsData.find((blog) => blog.path.includes(blogPath))

  return (
    <>
      {!selectedBlog && <Blogs />}
      {selectedBlog && (
        <Helmet>
          <title>{selectedBlog.title}</title>
          <meta name="description" content={selectedBlog.metaDescription} />
          <meta property="og:title" content={selectedBlog.openGraph.title} />
          <meta property="og:description" content={selectedBlog.openGraph.description} />
          <meta property="og:image" content={selectedBlog.openGraph.image} />
          <meta property="og:url" content={selectedBlog.openGraph.url} />
          <meta property="og:type" content={selectedBlog.openGraph.type} />
          <meta property="og:site_name" content={selectedBlog.openGraph.site_name} />
        </Helmet>
      )}

      {selectedBlog && (
        <div className="w-[90%] mx-auto my-10 px-4 sm:px-8 md:px-16 py-10 sm:py-16 md:py-20 bg-gray-100 rounded-lg shadow-lg">
          {selectedBlog && (
            <>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-black text-center pb-8">
                {selectedBlog.title}
              </h1>
              <img
                src={selectedBlog.image || "/placeholder.svg"}
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
                      className="text-2xl leading-10 sm:text-xl md:text-xl lg:text-2xl text-gray-700 lg:leading-10"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                    <p className="text-2xl leading-10 sm:text-xl md:text-xl lg:text-2xl text-gray-700 lg:leading-10">
                      {section.component && <FlightTable />}
                    </p>

                    {section.points &&
                      section.points.map((point, pointIndex) => (
                        <li
                          key={`point-${index}-${pointIndex}`}
                          className="list-disc text-2xl leading-10 sm:text-xl md:text-xl lg:text-2xl text-gray-700 lg:leading-10"
                        >
                          {point}
                        </li>
                      ))}

                    {/* Render Q&A accordion if questions and answers exist */}
                    {section.questions && section.answers && (
                      <div className="mt-8">
                        <h3 className="font-semibold text-left text-black text-xl sm:text-2xl md:text-3xl mb-4">
                          Frequently Asked Questions
                        </h3>
                        <div className="w-full border-t border-gray-200 rounded-md">
                          {section.questions.map((question, qIndex) => (
                            <AccordionItem
                              key={`qa-${index}-${qIndex}`}
                              question={question}
                              answer={section.answers[qIndex]}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Render Q&A accordion at blog level if questions and answers exist */}
              {selectedBlog?.questions && selectedBlog?.answers && (
                <div className="mt-20">
                  <h2 className="font-semibold text-left text-black uppercase text-2xl sm:text-3xl md:text-4xl mb-10">
                  Questions & Answers
                  </h2>
                  <div className="w-full border-t ml-10 border-gray-200 rounded-md">
                    {selectedBlog.questions.map((question, qIndex) => (
                      <AccordionItem
                        key={`blog-qa-${qIndex}`}
                        question={question}
                        answer={selectedBlog.answers[qIndex]}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  )
}

export default BlogsPage

