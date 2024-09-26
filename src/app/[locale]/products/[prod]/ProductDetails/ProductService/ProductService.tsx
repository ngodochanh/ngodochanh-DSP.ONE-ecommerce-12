type ProductServiceProps = {
  description: string;
  Icon: React.ElementType;
};

function ProductService({ description, Icon }: ProductServiceProps) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="h-clamp-24 w-clamp-22">
        <Icon className="h-full w-full object-contain" />
      </div>
      <p className="text-clamp-16 font-normal">{description}</p>
    </div>
  );
}

export default ProductService;
