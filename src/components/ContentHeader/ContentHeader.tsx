type ContentHeaderProps = {
  title: string;
  children: React.ReactNode;
};

function ContentHeader({ title, children }: ContentHeaderProps) {
  return (
    <div className='py-20'>
      <h2 className={`text-black-90 font-semibold text-clamp-42 capitalize text-center`}>{title}</h2>
      {children}
    </div>
  );
}

export default ContentHeader;
