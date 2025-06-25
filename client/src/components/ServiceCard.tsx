type Props = {
  title: string;
  description: string;
  imageUrl?: string;
};

function ServiceCard({ title, description, imageUrl }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default ServiceCard;
