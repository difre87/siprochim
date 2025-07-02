interface LoaderProps {
    // Define any props if needed
    className?: string;
    title?: string;
}

const Loader = ({ className, title }: LoaderProps) => {
    return (
        <div className={`flex flex-col justify-center items-center py-20 ${className}`}>
            <div className="relative">
                <div className="w-6 h-6 border-4 border-[#2e2e72] border-opacity-30 rounded-full"></div>
                <div className="w-6 h-6 border-4 border-[#2e2e72] border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
            </div>
            <p className="text-[#2e2e72] font-semibold mt-4 animate-pulse">
                {title || "Chargement en cours..."}
            </p>
        </div>
     );
}

export default Loader;