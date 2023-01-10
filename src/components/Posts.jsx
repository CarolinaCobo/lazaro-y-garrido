import { Children } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {
  return (
    <>
      <div className="bg-white">
        <div className="relative  px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0">
            <div className="h-1/3 bg-white sm:h-2/3" />
          </div>
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Blog
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                En esta sección encontrarás articulos en diferentes materias
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {Children.toArray(
                posts.map((post) => (
                  <div
                    key={post.fields.title}
                    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <Link href={`/blog/${post.fields.title}`}>
                        <div className="relative h-48 w-full flex-shrink-0 object-cover shadow transition-shadow hover:shadow-sm">
                          {post.fields.image !== undefined ? (
                            <Image
                              width={200}
                              height={129}
                              className="rounded-lg"
                              alt={post.fields.title}
                              src={`https:${post.fields.image.fields.file.url}?w=450`}
                            />
                          ) : (
                            <Image
                              width={200}
                              height={129}
                              className="rounded-lg"
                              alt="logo"
                              src="/images/og/logo.png"
                            />
                          )}
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <Link
                          href={`/blog/${post.fields.slug}`}
                          className="text-sm font-medium text-mallorca-600 hover:text-mallorca-700 hover:underline"
                        >
                          Leer
                        </Link>
                        <Link
                          href={`/blog/${post.fields.slug}`}
                          className="mt-2 block text-xl font-semibold text-slate-800 hover:text-mallorca-700"
                        >
                          {post.fields.title}
                        </Link>
                        <p className="mt-3 text-base text-gray-500">
                          {post.fields.excerpt}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          {/* <a href={post.author.href}>
                            <span className="sr-only">{post.author.name}</span>
                            <img
                              className="h-10 w-10 rounded-full"
                              src={post.author.imageUrl}
                              alt=""
                            />
                          </a> */}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {/* <a
                              href={post.author.href}
                              className="hover:underline"
                            >
                              {post.author.name}
                            </a> */}
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                            <span aria-hidden="true">&middot;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
