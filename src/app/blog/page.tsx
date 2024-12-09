import Link from "next/link";

function BlogUnderConstruction() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
          Blog Page Under Construction
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          We sincerely apologize for the inconvenience. Our Blog page is
          currently under construction as we work to provide you with great
          content. Please check back soon!
        </p>
        <Link href="/">
          <button className="bg-[#C8A165] hover:bg-[#a57f4d] text-white py-3 px-6 rounded-md text-sm font-medium transition-all">
            Go Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
}

export default BlogUnderConstruction;
