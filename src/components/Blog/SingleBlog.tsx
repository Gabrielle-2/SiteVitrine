// src/components/Blog/SingleBlog.tsx
import Image from "next/image"; // Assuming Next.js Image component for optimization
import Link from "next/link";   // Assuming Next.js Link component for navigation

// Define the type for a single blog post item
interface Blog {
  id: number;
  title: string;
  paragraph: string;
  image: string; // Path to the image
  author: {
    name: string;
    image: string;
    designation: string;
  };
  tags: string[]; // Array of tags
  publishDate: string; // Date string
}

interface SingleBlogProps {
  blog: Blog;
}

const SingleBlog = ({ blog }: SingleBlogProps) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark" data-wow-delay=".1s">
        <Link href={`/blog-details/${blog.id}`} className="relative block aspect-[370/220] w-full">
          {/* Optional: Add a badge or category tag */}
          {/* <span className="absolute top-6 right-6 z-10 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]} // Example: showing the first tag as a badge
          </span> */}
          <Image src={image} alt="image" fill />
        </Link>

        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/blog-details/${blog.id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center border-r border-body-color border-opacity-10 pr-4 dark:border-white dark:border-opacity-10 xl:pr-5">
              <div className="mr-3 h-10 w-10 rounded-full">
                <Image src={author.image} alt="author" width={40} height={40} className="rounded-full" />
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">By {author.name}</h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="w-full pl-4 xl:pl-5">
              <p className="text-sm font-medium text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;