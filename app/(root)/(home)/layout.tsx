import { relative } from "path";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative ">
      Navbar
      {children}
      footer
    </main>
  );
};

export default layout;
