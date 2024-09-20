function HeaderAuth({ title, desc }: { title: string; desc: string }) {
  return (
    <header className="mb-9">
      <h1 className="mb-4 text-clamp-36 font-medium">{title}</h1>
      <p className="text-clamp-16 font-normal">{desc}</p>
    </header>
  );
}

export default HeaderAuth;
