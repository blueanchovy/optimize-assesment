export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  image: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Future of AI Art Generation",
    excerpt:
      "Exploring the latest advancements in AI art generation and what they mean for creatives",
    date: "March 15, 2024",
    readTime: 5,
    image: "/1.png",
    link: "/blog/future-ai-art",
  },
  {
    title: "10 Tips for Better AI Art Prompts",
    excerpt:
      "Learn how to write more effective prompts to get the best results from AI art generators",
    date: "March 12, 2024",
    readTime: 8,
    image: "/2.png",
    link: "/blog/ai-art-prompts",
  },
  {
    title: "AI Art in Commercial Projects",
    excerpt:
      "How businesses are leveraging AI-generated art in their marketing and branding",
    date: "March 10, 2024",
    readTime: 6,
    image: "/3.png",
    link: "/blog/commercial-ai-art",
  },
  {
    title: "Ethics in AI Art Generation",
    excerpt:
      "Understanding the ethical considerations and best practices in AI art creation",
    date: "March 8, 2024",
    readTime: 7,
    image: "/4.png",
    link: "/blog/ethics-ai-art",
  },
  {
    title: "Customizing AI Art Styles",
    excerpt:
      "A deep dive into creating and fine-tuning custom art styles with AI",
    date: "March 5, 2024",
    readTime: 9,
    image: "/5.png",
    link: "/blog/custom-ai-styles",
  },
  {
    title: "AI Art for Social Media",
    excerpt:
      "How to create engaging AI-generated content for your social media presence",
    date: "March 3, 2024",
    readTime: 6,
    image: "/6.png",
    link: "/blog/ai-art-social-media",
  },
]; 