import data from "../../../app/data.json"


export default function Blog({params}) {
    
    

    return (
        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <article className="prose prose-gray mx-auto max-w-6xl dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            {data[params.blogId - 1].title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">By {data[params.blogId - 1].author} | Published on {data[params.blogId - 1].date}</p>
        </div>
        <p>
          {data[params.blogId - 1].description}
        </p>
        
      </article>
    </div>
  
)
}