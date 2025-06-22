// src/components/Blog/blogData.ts
import { Blog } from "@/types/blog"; // Assuming you have a types/blog.ts file for interfaces,
                                     // if not, you can copy the Blog interface directly into this file
                                     // or define it in SingleBlog.tsx and import it from there.

const blogData: Blog[] = [
  {
    id: 1,
    title: "Fresh Design Ideas & Inspiration",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, id efficitur justo. Aliquam vitae felis sit amet.",
    image: "/images/blog/blog-01.jpg", // Make sure these image paths are correct
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Creative"],
    publishDate: "12 Dec 2025",
  },
  {
    id: 2,
    title: "Best UI/UX Design Trends in 2025",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, id efficitur justo. Aliquam vitae felis sit amet.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Tutorials"],
    publishDate: "15 Jan 2025",
  },
  {
    id: 3,
    title: "Tips to Improve Your Website's SEO",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, id efficitur justo. Aliquam vitae felis sit amet.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Web Developer",
    },
    tags: ["SEO"],
    publishDate: "20 Feb 2025",
  },
  // Add more blog posts as needed
];

export default blogData;

// If you don't have a types/blog.ts, you can put the interface here:
// export interface Blog {
//   id: number;
//   title: string;
//   paragraph: string;
//   image: string; // Path to the image
//   author: {
//     name: string;
//     image: string;
//     designation: string;
//   };
//   tags: string[]; // Array of tags
//   publishDate: string; // Date string
// }