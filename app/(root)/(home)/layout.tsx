import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { relative } from "path";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-1  min-h-screen flex-col pb-6 px-6 pt-28 max-md:pb-14  sm:px-14 ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
