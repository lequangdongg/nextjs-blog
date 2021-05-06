import hydrate from 'next-mdx-remote/hydrate'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'

export default function Blog() {
  return (
    <>
      {/* {frontMatter.draft !== true ? (
        <PostLayout frontMatter={frontMatter} prev={prev} next={next}>
          {content}
        </PostLayout>
      ) : (
        <div className='mt-24 text-center'>
          <PageTitle>
            Under Construction{' '}
            <span role='img' aria-label='roadwork sign'>
              🚧
            </span>
          </PageTitle>
        </div>
      )} */}
    </>
  )
}
