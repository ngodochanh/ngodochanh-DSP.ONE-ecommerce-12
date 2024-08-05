type HeaderSectionProps = {
  title: string;
  children: React.ReactNode;
};

function HeaderSection({ title, children }: HeaderSectionProps) {
  return (
    <div className='py-20'>
      <h2 className={`text-black-90 font-semibold text-clamp-42 capitalize text-center`}>{title}</h2>
      {children}
    </div>
  );
}

export default HeaderSection;
