type ContentHeaderProps = {
  title: string;
  children: React.ReactNode;
};

function ContentHeader({ title, children }: ContentHeaderProps) {
  return (
    <div className="py-20">
      <h2 className={`text-center text-clamp-42 font-semibold capitalize text-black-90`}>{title}</h2>
      {children}
    </div>
  );
}

export default ContentHeader;
