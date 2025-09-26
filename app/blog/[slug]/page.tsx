"use client";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { fetchPostBySlug } from "@/data/product";
import { Post } from "@/lib/type";
import { ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const resolvedParams = await params;
        const postData = await fetchPostBySlug(resolvedParams.slug);
        
        if (!postData) {
          notFound();
        }
        
        setPost(postData);
      } catch (error) {
        console.error("Erreur lors du chargement de l'article:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [params]);

  if (loading) {
    return (
      <>
        <Header type="alimentaire" className="bg-[#40409c]" isPage />
        <section className="w-full min-h-[400px] bg-[#40409c] pt-20 pb-10 flex items-center justify-center">
          <div className="text-white text-xl">Chargement...</div>
        </section>
        <Footer />
      </>
    );
  }

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const calculateReadingTime = (content: string) => {
    // Supprimer les balises HTML pour compter les mots
    const plainText = content.replace(/<[^>]+>/g, '');
    const words = plainText.trim().split(/\s+/).length;
    // Moyenne de 200 mots par minute
    const readingTime = Math.ceil(words / 200);
    return readingTime;
  };

  const shareArticle = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`;
        break;
      default:
        // Copier le lien dans le presse-papiers
        navigator.clipboard.writeText(url);
        alert('Lien copié dans le presse-papiers !');
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <>
      <Header type="alimentaire" className="bg-[#40409c]" isPage />
      
      {/* Hero Section */}
      <section className="w-full min-h-[400px] bg-[#40409c] pt-20 pb-10">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="w-full flex flex-col gap-y-6 text-white">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="hover:underline">Accueil</a>
              <span>/</span>
              <a href="/blog" className="hover:underline">Blog</a>
              <span>/</span>
              <span className="text-gray-300">{post.title}</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-x-4 text-sm">
              <div className="flex items-center gap-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex justify-center items-center">
                  <ImageIcon className="w-4 h-4 text-white" />
                </div>
                <span>{post.author?.name || 'Admin'}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <span>{formatDate(post.created_at)}</span>
              <div className="w-1 h-1 rounded-full bg-white"></div>
              <span>{calculateReadingTime(post.content)} min de lecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-5">
          {/* Featured Image */}
          {post.image && (
            <div className="w-full mb-10">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={`https://esjc.org/siprochim/public/${post.image}`}
                  fill
                  alt={post.title}
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </article>

          {/* Author Info */}
          <div className="mt-16 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-x-4">
              <div className="w-16 h-16 rounded-full bg-[#40409c] flex justify-center items-center">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2d2a71]">
                  {post.author?.name || 'Admin'}
                </h3>
                <p className="text-gray-600">
                  Auteur SIPRO-CHIM
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <a 
              href="/blog" 
              className="flex items-center gap-x-2 text-[#40409c] hover:underline font-medium"
            >
              ← Retour au blog
            </a>
            
            <div className="flex gap-x-2">
              <button 
                onClick={() => shareArticle('facebook')}
                className="px-4 py-2 bg-[#1877f2] text-white rounded-full hover:bg-[#166fe5] transition-colors text-sm"
              >
                Facebook
              </button>
              <button 
                onClick={() => shareArticle('twitter')}
                className="px-4 py-2 bg-[#1da1f2] text-white rounded-full hover:bg-[#1a91da] transition-colors text-sm"
              >
                Twitter
              </button>
              <button 
                onClick={() => shareArticle('linkedin')}
                className="px-4 py-2 bg-[#0077b5] text-white rounded-full hover:bg-[#006699] transition-colors text-sm"
              >
                LinkedIn
              </button>
              <button 
                onClick={() => shareArticle('whatsapp')}
                className="px-4 py-2 bg-[#25d366] text-white rounded-full hover:bg-[#22c55e] transition-colors text-sm"
              >
                WhatsApp
              </button>
              <button 
                onClick={() => shareArticle('copy')}
                className="px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors text-sm"
              >
                Copier
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetailPage;