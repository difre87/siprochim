"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Post } from "@/lib/type";
import { fetchPosts } from "@/data/product";
import { ImageIcon } from "lucide-react";

const BlogPage = () => {
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

  const truncateContent = (content: string, maxLength = 150) => {
    const textContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return textContent.length > maxLength 
      ? textContent.substring(0, maxLength) + '...'
      : textContent;
  };

  return (
    <>
      <Header type="alimentaire" className="bg-[#40409c]" isPage />
      
      {/* Hero Section */}
      <section className="w-full min-h-[400px] bg-[#40409c] pt-20 pb-10">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="w-full flex flex-col gap-y-6 text-white">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:underline">Accueil</Link>
              <span>/</span>
              <span className="text-gray-300">Blog</span>
            </nav>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Nos Actualités
            </h1>
            
            <p className="text-xl font-medium max-w-2xl">
              Tendances, nouveautés et coulisses de l&apos;entreprise : 
              suivez toute l&apos;actu SIPRO-CHIM.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-5">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <p className="text-xl text-gray-500">Chargement des articles...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group transition-all duration-500 hover:shadow-2xl"
                >
                  <article className="border-[2px] border-[#fafafa] bg-white rounded-2xl overflow-hidden h-full">
                    <div className="w-full h-48 overflow-hidden">
                      {post.image ? (
                        <Image
                          src={`https://esjc.org/siprochim/public/${post.image}`}
                          width={400}
                          height={200}
                          alt={post.title}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <ImageIcon className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <h2 className="text-[#2d2a71] text-xl font-bold mb-3 transition-all duration-500 group-hover:underline line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="font-medium text-sm text-gray-600 line-clamp-3 mb-4">
                          {truncateContent(post.content)}
                        </p>
                      </div>

                      <div className="flex items-center gap-x-3 mt-auto pt-4 border-t border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-[#dbdbdb] flex justify-center items-center">
                          <ImageIcon className="w-4 h-4 text-[#ebebeb]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-[#2d2a71]">
                            {post.author?.name || 'Admin'}
                          </h4>
                          <div className="flex items-center gap-x-2 text-xs text-gray-500">
                            <span>{formatDate(post.created_at)}</span>
                            <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                            <span>5 min de lecture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  Aucun article disponible
                </h3>
                <p className="text-gray-500">
                  Les articles seront bientôt disponibles.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;