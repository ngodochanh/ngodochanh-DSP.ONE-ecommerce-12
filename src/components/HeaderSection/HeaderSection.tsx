function HeaderSection({
  title,
  marginBottom = '50px',
  children,
}: {
  title: string;
  marginBottom?: string;
  children: React.ReactNode;
}) {
  return (
    <div className='py-20'>
      <h2 className={`text-black-90 font-semibold text-[42px] capitalize text-center mb-[${marginBottom}]`}>{title}</h2>
      {children}
    </div>
  );
}

export default HeaderSection;
