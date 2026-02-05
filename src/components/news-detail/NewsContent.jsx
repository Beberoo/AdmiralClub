import React from 'react';

const NewsContent = ({ news }) => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-invert max-w-none">
          

          <div className="mb-20">
            <h2 className="text-3xl font-black text-white uppercase mb-8 italic">Detalji</h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light italic lowercase font-sans">
              {news.fullContent.details}
            </p>
          </div>
            <div>
            <p className="text-gray-300 text-lg leading-relaxed font-light italic lowercase font-sans">
              {news.fullContent.conclusion}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NewsContent;
