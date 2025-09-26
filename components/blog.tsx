"use client";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Testimonies from "./testimonies";
import { useEffect, useState } from "react";
import { Post } from "@/lib/type";
import { fetchPosts } from "@/data/product";

interface BlogProps {
  page?: string;
}

const Blog = ({ page }: BlogProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength = 100) => {
    const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...'
      : textContent;
  };
  return (
    <section className={`w-full min-h-screen  ${page == "alimentaire" ? "bg-[#ffb81c]" : "bg-white  -mt-52"} `}>
      <div className="w-full min-h-[500px] bg-[#40409c] round  relative pt-16 pb-20 sm:px-10 md:px-0">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-full py-40 flex flex-col gap-y-8">
            <span className="text-white font-semibold">Blog</span>
            <h1 className="text-white text-5xl font-bold">
              Nos Actualités
            </h1>
            <p className="text-white font-medium">
              Tendances, nouveautés et coulisses
              de l’entreprise : suivez toute l’actu
              SIPRO-CHIM.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 sm:gap-y-10 gap-x-10">
            {isLoading ? (
              <div className="col-span-3 flex justify-center items-center">
                <p className="text-white text-xl">Chargement des articles...</p>
              </div>
            ) : posts.length > 0 ? (
              posts.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="border-[2px] border-[#fafafa] bg-white rounded-2xl">
                    <div className="w-full overflow-hidden h-48">
                      {post.image ? (
                        <Image
                          src={`https://esjc.org/siprochim/public/${post.image}`}
                          width={1000}
                          height={400}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-tr-2xl rounded-tl-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-tr-2xl rounded-tl-2xl flex items-center justify-center">
                          <ImageIcon className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>

                    <div className="p-5 w-full">
                      <h4 className="font-semibold text-[#3d84f8]">Article</h4>
                      <h3 className="text-[#2d2a71] text-xl font-semibold py-4 transition-all duration-500 group-hover:underline line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="font-medium text-sm text-gray-600 line-clamp-3">
                        {truncateContent(post.content)}
                      </p>
                      <div className="w-full flex gap-x-3 mt-5">
                        <div className="w-14 h-14 rounded-full bg-[#dbdbdb] flex justify-center items-center">
                          <ImageIcon className="w-4 h-4 text-[#ebebeb]" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="text-sm font-bold">
                            {post.author?.name || 'Admin'}
                          </h4>
                          <div className="flex justify-center items-center gap-x-2 text-sm">
                            <span>{formatDate(post.created_at)}</span>
                            <div className="w-1 h-1 rounded-full bg-black"></div>
                            <span>5 min</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 flex justify-center items-center">
                <p className="text-white text-xl">Aucun article disponible.</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto mt-20">
          <Testimonies />
        </div>
      </div>
    </section>
  );
};

export default Blog;
