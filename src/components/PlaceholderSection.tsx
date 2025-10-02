const PlaceholderSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12">
          {title}
        </h2>
        {children || (
          <div className="text-center text-gray-600 text-lg">
            <p>This section will be implemented later.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PlaceholderSection;
