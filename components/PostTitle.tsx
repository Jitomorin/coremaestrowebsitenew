export default function PostTitle({ children }: any) {
  return (
    <h1 className="mb-12 text-center text-5xl font-bold leading-none tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-7xl">
      {children}
    </h1>
  );
}
