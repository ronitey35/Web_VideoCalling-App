const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      nav
      {children}
      foot
    </div>
  );
};

export default layout;
