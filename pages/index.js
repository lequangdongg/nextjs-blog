import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }


export default function Home() {
  const posts = [
    {
      title: 'Introducing Tailwind Nexjs Starter Blog',
      date: '2021-01-12',
      lastmod: '2021-01-18',
      tags: [ 'next-js', 'tailwind', 'guide' ],
      draft: false,
      summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.',
      images: [
        '/static/images/canada/mountains.jpg',
        '/static/images/canada/toronto.jpg'
      ],
      slug: 'introducing-tailwind-nextjs-starter-blog'
    },
    {
      title: 'Images in Next.js',
      date: '2020-11-11',
      tags: [ 'next js', 'guide' ],
      draft: false,
      summary: 'In this article we introduce adding images in the tailwind starter blog and the benefits and limitations of the next/image component.',
      slug: 'guide-to-using-images-in-nextjs'
    },
    {
      title: 'Deriving the OLS Estimator',
      date: '2019-11-16',
      tags: [ 'next js', 'math', 'ols' ],
      draft: false,
      summary: 'How to derive the OLS Estimator with matrix notation and a tour of math typesetting using markdown with the help of KaTeX.',
      slug: 'deriving-ols-estimator'
    },
    {
      title: 'Markdown Guide',
      date: '2019-10-11',
      tags: [ 'github', 'guide' ],
      draft: false,
      summary: 'Markdown cheatsheet for all your blogging needs - headers, lists, images, tables and more! An illustrated guide based on Github Flavored Markdown.',
      slug: 'github-markdown-guide'
    },
    {
      title: 'The Time Machine',
      date: '2018-08-15',
      tags: [ 'writings', 'book', 'reflection' ],
      draft: false,
      summary: 'The Time Traveller (for so it will be convenient to speak of him) was expounding a recondite matter to us. His pale grey eyes shone and twinkled, and his usually pale face was flushed and animated...',
      slug: 'the-time-machine'
    },
    {
      title: 'O Canada',
      date: '2017-07-15',
      tags: [ 'holiday', 'canada', 'images' ],
      draft: false,
      summary: 'The scenic lands of Canada featuring maple leaves, snow-capped mountains, turquoise lakes and Toronto. Take in the sights in this photo gallery exhibition and see how easy it is to replicate with some MDX magic and tailwind classes.',
      slug: 'pictures-of-canada'
    },
    {
      title: 'Sample .md file',
      date: '2016-03-08',
      tags: [ 'markdown', 'code', 'features' ],
      draft: false,
      summary: 'Example of a markdown file with code blocks and syntax highlighting',
      slug: 'code-sample'
    }
  ]
  
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
