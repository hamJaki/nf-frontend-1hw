import Link from "next/link"
import fs from "fs"
import path from "path"
import data from "./data.json"


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Dobro pozhalovat to our MENTORS BLOGS
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  They are one of the most interesting persons in the KZ.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="text-xl font-bold">{data[0].title}{}</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    {data[0].description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${data[0].id}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="text-xl font-bold">{data[1].title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  {data[1].description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${data[1].id}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="text-xl font-bold">{data[2].title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    {data[2].description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${data[2].id}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="text-xl font-bold">{data[3].title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    {data[3].description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${data[3].id}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                  <h3 className="text-xl font-bold">{data[4].title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    {data[4].description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${data[4].id}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}