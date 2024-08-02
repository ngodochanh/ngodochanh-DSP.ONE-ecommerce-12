function HeaderSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='py-20'>
      <h2 className={`text-black-90 font-semibold text-[42px] capitalize text-center`}>{title}</h2>
      {children}
    </div>
  );
}

export default HeaderSection;
